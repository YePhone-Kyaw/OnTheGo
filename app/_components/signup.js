"use client";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-600 font-semibold mb-1">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-600 font-semibold mb-1">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}
