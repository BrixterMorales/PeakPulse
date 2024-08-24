import React from 'react';
export default function home() {
    return (
      <>
      <header className="w-full flex items-center p-4 bg-white shadow-md dark:bg-gray-800">
          <div className="flex items-center space-x-4">
              <img
                  src="/peakpulselogo1.png" className="h-10 w-10"/>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">PeakPulse</h1>
          </div>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
          <div className="w-full max-w-4xl bg-[#98d8e4] p-8 rounded-lg shadow-lg dark:bg-[#98d8e4] mt-6 text-center">
              <div className="mb-6">
                  <img
                      src="/peakpulselogo1.png" className="h-32 w-32 mb-4 mx-auto"
                  />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-center dark:text-black">Welcome to PeakPulse</h2>
              <p className="text-lg mb-6 dark:text-black">
                  Try to use the enchance gym management system and as a software service. Click Create account to register and Click login to enter the system!!
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                  <a href="/login" className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                      Login
                  </a>
                  <a href="/register" className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition duration-300">
                      Register
                  </a>
              </div>
          </div>
          <br>
          </br>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn more{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find more about the functionalities on peakpulse platform.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find out more about how the peakpulse created.
          </p>
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact us {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click to know how to contact customer service in peakpulse.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Member{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
           Get member to our peakpulse platform.
          </p>
        </a>
      </div>
      </main>
      <footer className="w-full bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} PeakPulse. All rights reserved.</p>
      </footer>
    </>
  );
}