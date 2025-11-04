export default function ForgotPasswordPage() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 mt-10 border border-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Forgot Password</h1>
      <p className="text-sm text-gray-600 mb-6">
        Enter your email address and we’ll send you instructions to reset your password.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 rounded-md bg-yellow-400 text-black hover:bg-yellow-500 active:bg-yellow-600 transition-colors"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
