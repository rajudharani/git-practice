"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to register");
      }
      // auto sign-in via credentials and redirect to home
      const signInResult = await signIn("credentials", { email, password, redirect: false, callbackUrl: "/" });
      if (signInResult?.error) {
        throw new Error(signInResult.error || "Failed to sign in");
      }
      // Wait a moment for session to be established, then hard redirect
      await new Promise(resolve => setTimeout(resolve, 100));
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Create your account</h1>
      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/" })}
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
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          {loading ? "Creating..." : "Create account"}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account? <a href="/login" className="text-yellow-700 hover:underline">Login</a>
      </p>
    </div>
  );
}


