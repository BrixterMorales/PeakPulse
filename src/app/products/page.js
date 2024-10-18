"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DrawerList from '@/app/components/drawerheaderbar/page';
import Footer from '@/app/components/footer/page';
import Button from '@mui/material/Button';
import Pagination  from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
export default function Home() {
                    return (
                     <>
                     <DrawerList />
                            <div className="flex">
                                      
                                        <Box component="main" className="flex-grow h-screen bg-gray-100 p-6">
                          <Box className="text-center mb-6">
                            <Typography variant="h4" className="text-black font-bold">
                            Products Available in the Gym
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
                        
                        <Box className="flex-grow flex justify-center">
                            <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
                            
                            <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                                <img
                                src="/whey.png"
                                className="w-full h-40 object-cover rounded mb-4"
                                alt="Whey Protein"
                                />
                                <Typography variant="h6" className="text-black font-bold mt-2">
                                Whey Protein
                                </Typography>
                                <Box className="mt-3">
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                        <AddIcon />
                                        </Button>
                                </Box>
                            </Box>

                        
                            <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                                <img
                                src="/creatine.png"
                                className="w-full h-40 object-cover rounded mb-4"
                                alt="Creatine Monohydrate"
                                />
                                <Typography variant="h6" className="text-black font-bold mt-2">
                                Creatine Monohydrate
                                </Typography>
                                <Box className="mt-3">
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                <AddIcon />
                                </Button>
                                </Box>
                            </Box>

                        
                            <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                                <img
                                src="/energy.png"
                                className="w-full h-40 object-cover rounded mb-4"
                                alt="Energy Booster"
                                />
                                <Typography variant="h6" className="text-black font-bold mt-2">
                                Energy Booster
                                </Typography>
                                <Box className="mt-3">
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                <AddIcon />
                                </Button>
                                </Box>
                            </Box>

                            <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                                <img
                                src="/collagen.png"
                                className="w-full h-40 object-cover rounded mb-4"
                                alt="Collagen Fat Burner"
                                />
                                <Typography variant="h6" className="text-black font-bold mt-2">
                                Collagen Fat Burner
                                </Typography>
                                <Box className="mt-3">
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                <AddIcon />
                                </Button>
                                </Box>
                            </Box>

                            
                            <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                                <img
                                src="/protein.png"
                                className="w-full h-40 object-cover rounded mb-4"
                                alt="Protein Bar"
                                />
                                <Typography variant="h6" className="text-black font-bold mt-2">
                                Protein Bar
                                </Typography>
                                <Box className="mt-3">
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                <AddIcon />
                                </Button>
                                </Box>
                            </Box>

                            
                            <Box className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-4">
                                <img
                                src="/glutine.png"
                                className="w-full h-40 object-cover rounded mb-4"
                                alt="Glutamine"
                                />
                                <Typography variant="h6" className="text-black font-bold mt-2">
                                Glutamine
                                </Typography>
                                <Box className="mt-3">
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                <AddIcon />
                                </Button>
                                </Box>
                            </Box>
                            </Box>
                        </Box>

                        <Box className="mt-6 flex justify-center">
                            <Pagination count={10} color="primary" />
                        </Box>
                        </Box>
                                        </div>
                                        <Footer />  
                    </>
     );
}