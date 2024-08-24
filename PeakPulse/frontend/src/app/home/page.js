import React from 'react';
export default function Login() {
    return (
       <>
        <header className="w-full flex items-center p-4 bg-white shadow-md dark:bg-gray-800">
        <div className="flex items-center space-x-4">
        <img
            src="/peakpulselogo1.png"  className="h-10 w-10"
      
          />
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">PeakPulse</h1>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md bg-[#98d8e4] p-8 rounded-lg shadow-lg dark:bg-[#98d8e4] mt-6">
          <div className="flex justify-center mb-6">
            <img
              src="/peakpulselogo1.png" className="h-16 w-16 mb-4"
            />
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-black">PeakPulse</h2>
          <form>
            <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 font-medium mb-2 dark:text-gray-400">
                Username
            </label>
            <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your username"
                required
            />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-800 font-medium mb-2 dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-black py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
      