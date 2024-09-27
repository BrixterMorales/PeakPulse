"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DrawerList from '@/app/components/drawerheaderbar/page';
import Footer from '@/app/components/footer/page';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating'; 
import Pagination  from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {
                
                    return (
                     <>
                     <DrawerList />
            
                        <div className="flex">
                              
                        <Box component="main" className="flex-grow bg-gray-100 p-6">
                        <Box className="text-center mb-6">
                          <Typography variant="h4" className="text-black font-bold">
                            Gym Profiles
                          </Typography>
                        </Box>
                        <Box className="flex justify-center mb-6">
                          <TextField
                            id="standard-basic"
                            label="Search"
                            variant="standard"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                            sx={{ width: '400px' }} 
                          />
                        </Box>

                    
                        <Box className="flex justify-center mb-6">
                          <Pagination count={10} color="primary" />
                        </Box>
                        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/performancefitness.png" className="w-full h-40 object-cover rounded" alt="Performance Fitness" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Performance Fitness</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 5 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={4} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/fitquestgym.png" className="w-full h-40 object-cover rounded" alt="FitQuest Gym" />
                            <Typography variant="h6" className="text-black font-bold mt-2">FitQuest Gym</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 3 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={3} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/powerhouse.png" className="w-full h-40 object-cover rounded" alt="Powerhouse Workout" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Powerhouse Workout</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 4 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={5} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/vitality1.png" className="w-full h-40 object-cover rounded" alt="Vitality Fitness Club" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Vitality Fitness Club</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 2 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={4} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/vitality1.png" className="w-full h-40 object-cover rounded" alt="Vitality Fitness Club" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Energize Gym</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 2 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={4} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/vitality1.png" className="w-full h-40 object-cover rounded" alt="Vitality Fitness Club" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Infinity Strength Studio</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 2 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={4} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>
                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/kamogawagym.png" className="w-full h-40 object-cover rounded" alt="Vitality Fitness Club" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Kamogawa Gym </Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 2 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={4} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                          <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                            <img src="/beerusgym.png" className="w-full h-40 object-cover rounded" alt="Vitality Fitness Club" />
                            <Typography variant="h6" className="text-black font-bold mt-2">Beerus Gym</Typography>
                            <Typography variant="body2" className="text-gray-600">Location: City, Country</Typography>
                            <Typography variant="body2" className="text-gray-600">Experience: 2 years in fitness training</Typography>
                            <Box className="flex items-center mt-2">
                              <Rating name="read-only" value={4} readOnly />
                            </Box>
                            <Box className="mt-3">
                              <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>View</Button>
                            </Box>
                          </Box>

                        </Box>
                      </Box>

            </div>
            <Footer />  
                    </>
     );
}