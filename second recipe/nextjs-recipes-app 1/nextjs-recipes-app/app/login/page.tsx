"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(search.get("error"));
  
  // Get callback URL from query params, default to home
  const callbackUrl = search.get("callbackUrl") || "/";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: callbackUrl,
      });
      if (!res || res.error) {
        setError(res?.error || "Invalid email or password");
        return;
      }
      // Wait a moment for session to be established, then redirect to callback URL
      await new Promise(resolve => setTimeout(resolve, 100));
      window.location.href = callbackUrl;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 border border-gray-200">
      <h1 className="text-2xl font-bold mb-2 text-gray-900">Welcome back</h1>
      <p className="text-sm text-gray-600 mb-4">
        Please login or register to access recipe pages
      </p>
      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: callbackUrl })}
        className="w-full mb-4 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 active:bg-red-800 transition-colors"
        aria-label="Continue with Google"
      >
        Continue with Google
      </button>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
        <div className="relative flex justify-center text-xs"><span className="bg-white px-2 text-gray-500">or</span></div>
      </div>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 active:bg-yellow-600 transition-colors disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Don&apos;t have an account? <Link href="/register" className="text-yellow-700 hover:underline">Register</Link>
      </p>

      <p className="mt-2 text-sm text-gray-600">
         <Link href="/forgot-password" className="text-yellow-700 hover:underline">
             Forgot your password?
         </Link>
      </p>

    </div>
  );
}


