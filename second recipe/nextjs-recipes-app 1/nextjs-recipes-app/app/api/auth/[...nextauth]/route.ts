import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import { compare } from "bcrypt";
import { ObjectId } from "mongodb";

export const runtime = "nodejs";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture || profile.image || null,
        } as any;
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const client = await clientPromise;
          const db = client.db();
          const user = await db.collection("users").findOne({ email: credentials.email });
          if (!user || !user.password) return null;
          const isValid = await compare(credentials.password, user.password as string);
          if (!isValid) return null;
          return {
            id: (user._id as ObjectId).toString(),
            name: user.name as string,
            email: user.email as string,
            image: (user.image as string | undefined) || null,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Initial sign in - capture user data
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image || null;
      }
      
      // Handle Google OAuth - get image from profile if available
      if (account?.provider === "google" && profile) {
        const googleImage = (profile as any).picture || (profile as any).image;
        if (googleImage) {
          token.picture = googleImage;
          // Also update user in database if using adapter
          try {
            const client = await clientPromise;
            const db = client.db();
            await db.collection("users").updateOne(
              { email: token.email },
              { $set: { image: googleImage } },
              { upsert: false }
            );
          } catch (error) {
            console.error("Error updating user image:", error);
          }
        }
      }
      
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        
        // Get image from token, or fetch from database if not available
        let userImage = (token.picture as string | null) || null;
        
        // If no image in token, try to get from database
        if (!userImage && token.email) {
          try {
            const client = await clientPromise;
            const db = client.db();
            const user = await db.collection("users").findOne({ email: token.email });
            if (user?.image) {
              userImage = user.image as string;
            }
          } catch (error) {
            console.error("Error fetching user image from database:", error);
          }
        }
        
        session.user.image = userImage;
      }
      return session;
    },
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
  },
  pages: {
    signIn: "/register",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };