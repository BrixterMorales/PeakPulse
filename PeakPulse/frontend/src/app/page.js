import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
export default function home() {
    return (
      <>
            <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <div className="flex items-center space-x-2">
                <img src="/peakpulselogo1.png" alt="PeakPulse Logo" className="h-10 w-10" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  PeakPulse
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <main
              className="flex flex-col items-center justify-center min-h-screen p-6"
              style={{
                backgroundImage: 'url("/gymwebsite.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
       <div className="w-full max-w-4xl bg-[#98d8e4]/50 p-8 rounded-lg shadow-lg dark:bg-[#98d8e4]/50 mt-6 text-center">
              <Box sx={{ mb: 4 }}>
                <img
                  src="/peakpulselogo1.png"
                  alt="PeakPulse Logo"
                  style={{ height: '8rem', width: '8rem', margin: '0 auto' }}
                />
              </Box>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
                Welcome to PeakPulse
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Try to use the enhanced gym management system as a software service. Click Create account to register and Click login to enter the system!
              </Typography>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <Button 
                  variant="outlined" 
                  href="/login" 
                  className="w-full md:w-auto py-2 px-4 text-center text-black"
                >
                  Login
                </Button>            
                <Button 
                  variant="contained" 
                  href="/register" 
                  className="w-full md:w-auto py-2 px-4 text-center"
                  color="primary"
                >
                  Register
                </Button>
              </div>
            </div>
          <br>
          </br>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-[#98d8e4] hover:dark:bg-[#98d8e4] shadow-lg mb-4 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    Learn more{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
                    Find more about the functionalities on PeakPulse platform.
                  </p>
                </a>

                <a
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-[#98d8e4] hover:dark:bg-[#98d8e4] shadow-lg mb-4 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    About{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
                    Find out more about how PeakPulse was created.
                  </p>
                </a>

                <a
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-[#98d8e4] hover:dark:bg-[#98d8e4] shadow-lg mb-4 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    Contact us{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
                    Click to know how to contact customer service on PeakPulse.
                  </p>
                </a>

                <a
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-[#98d8e4] hover:dark:bg-[#98d8e4] shadow-lg text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="mb-3 text-2xl font-semibold text-white">
                    Member{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
                    Become a member of our PeakPulse platform.
                  </p>
                </a>
      </div>
      </main>
      <footer className="w-full bg-black text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} PeakPulse. All rights reserved.</p>
      </footer>
    </>
  );
}