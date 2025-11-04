import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import { compare } from "bcrypt";
import { ObjectId } from "mongodb";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "admin" | "user";
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "admin" | "user";
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  debug: true,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection("users").findOne({ email: credentials.email });
        if (!user || !user.password) return null;
        const ok = await compare(credentials.password, user.password as string);
        if (!ok) return null;
        return {
          id: (user._id as ObjectId).toString(),
          name: user.name as string | undefined,
          email: user.email as string | undefined,
          image: (user.image as string | undefined) || undefined,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      try {
        const u = new URL(url, baseUrl);
        if (u.origin === baseUrl) {
          if (u.pathname.startsWith("/api/auth")) return baseUrl;
          return u.toString();
        }
      } catch {}
      return baseUrl;
    },
    async jwt({ token, user }) {
      const client = await clientPromise;
      const db = client.db();
      // If user just signed in, ensure role exists and set ADMIN_EMAIL as admin
      if (user?.email) {
        const adminEmail = process.env.ADMIN_EMAIL;
        const isAdmin = adminEmail && user.email.toLowerCase() === adminEmail.toLowerCase();
        const existing = await db.collection("users").findOne({ email: user.email });
        const role = (existing?.role as "admin" | "user" | undefined) || (isAdmin ? "admin" : "user");
        if (!existing?.role || existing.role !== role) {
          await db.collection("users").updateOne({ email: user.email }, { $set: { role } });
        }
        token.role = role;
      } else if (!token.role && token.email) {
        // On subsequent requests, hydrate from DB if missing
        const existing = await db.collection("users").findOne({ email: token.email });
        token.role = ((existing?.role as any) || "user") as "admin" | "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      if (session.user) {
        session.user.role = (token.role as any) || "user";
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});


