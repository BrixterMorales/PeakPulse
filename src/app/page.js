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
             <Box className="flex-grow">
                        <AppBar position="static" className="bg-gray-900">
                            <Toolbar className="flex justify-center items-center">
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center space-x-2">
                                        <img src="/peakpulselogo1.png" alt="PeakPulse Logo" className="h-10 w-10" />
                                        <Typography variant="h6" component="div" className="text-white font-bold">
                                            PeakPulse
                                        </Typography>
                                    </div>
                                    <Typography variant="body1" className="text-white hover:text-blue-300 cursor-pointer">
                                        LEARN MORE
                                    </Typography>
                                    <Typography variant="body1" className="text-white hover:text-blue-300 cursor-pointer">
                                        ABOUT
                                    </Typography>
                                    <Typography variant="body1" className="text-white hover:text-blue-300 cursor-pointer">
                                        MEMBERSHIPS
                                    </Typography>
                                    <Button variant="contained" className="bg-yellow-500 text-black font-bold hover:bg-blue-300">
                                        CONTACT US
                                    </Button>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Box
                    className="relative flex flex-col md:flex-row min-h-screen text-white"
                    sx={{
                      backgroundImage: 'url("/graywebsitevibes.png")', // Background image
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <Box className="flex flex-col justify-center items-center p-8 w-full md:w-1/2 bg-black bg-opacity-60">
                    <Typography variant="h2" className="text-sky-500 text-6xl font-bold mb-2 text-center">
                      FIND YOUR GYM PLACE
                    </Typography>
                    <Typography variant="h4" className="text-pink-600 text-3xl font-semibold mb-4 text-center">
                      AND TRAINER
                    </Typography>
                    <Typography className="text-white mb-6 text-center">
                      Use this website to find some gym places, trainers, and products within the gym you choose.
                    </Typography>
                    <div className="flex space-x-4 mt-4">
                      <Button
                        variant="contained"
                        className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-pink-600"
                      >
                        Login
                      </Button>
                      <Button
                        variant="outlined"
                        className="border-sky-500 text-sky-500 py-2 px-4 rounded hover:bg-sky-500 hover:text-white"
                      >
                        Register
                      </Button>
                    </div>
                  </Box>

                    {/* Right section: Image */}
                    <Box className="w-full md:w-1/2 flex justify-center items-center p-8">
                      <img
                        src="/gymwebsite.png" // Image path
                        alt="Gym"
                        className="object-cover rounded-lg shadow-lg max-w-full"
                      />
                    </Box>
                  </Box>
                    
                      
                  <Box className="flex flex-col md:flex-row justify-center items-center p-8 bg-white">
                    <Box className="w-full md:w-1/2 p-4 flex flex-col md:flex-row">
                      <img
                        src="/boxing1.png" 
                        alt="Reinventing resistance"
                        className="object-cover rounded-lg shadow-lg w-full h-64 md:w-1/2" // Set a fixed height
                      />
                      <Box className="md:w-1/2 md:pl-4 flex flex-col justify-center">
                        <Typography variant="h5" className="font-bold text-maroon mt-4 md:mt-0">
                          Building Endurance 
                        </Typography>
                        <Typography className="text-pink">
                          We took one of the most versatile pieces of fitness and trainer that help you improve your endurance.
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="w-full md:w-1/2 p-4 flex flex-col md:flex-row mt-4">
                      <Box className="md:w-1/2 md:pr-4 flex flex-col justify-center">
                        <Typography variant="h5" className="font-bold text-pink-600 mt-4 md:mt-0">
                          Equipments
                        </Typography>
                        <Typography className="text-black">
                          We try our best to have equipment that you mgiht needed for your training.
                        </Typography>
                      </Box>
                      <img
                        src="/rightbottomimage1.png" 
                        alt="Fitness made"
                        className="object-cover rounded-lg shadow-lg w-full h-64 md:w-1/2" 
                      />
                    </Box>
                  </Box>
   
 
              
                                              
      <footer className="w-full bg-black text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} PeakPulse. All rights reserved.</p>
      </footer>
    </>
  );
}