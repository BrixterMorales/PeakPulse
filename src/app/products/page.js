"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Assessment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Button from '@mui/material/Button';
import Pagination  from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {
                        const list = () => (
                            <Box className="w-64 bg-sky h-100">
                            <Box className="flex flex-col items-center mt-4 mb-4">
                                <img
                                src="/goku.png" 
                                className="w-16 h-16 rounded-full border-2 border-sky-600" 
                                />
                                <Typography variant="body1" className="mt-2 text-black font-semibold">
                                Goku  
                                </Typography>
                            </Box>
                            <List>
                                    {[
                                        { text: 'Gym Profiling', icon: <SportsGymnasticsIcon /> },
                                        { text: 'Trainer', icon: <PersonIcon /> },
                                        { text: 'Services and Promotion', icon: <LocalOfferIcon /> },
                                        { text: 'Calendar', icon: <EventIcon /> },
                                        { text: 'Reports', icon: <ReportIcon /> }
                                    ].map(({ text, icon }) => (
                                        <ListItem button key={text} className="p-4 hover:bg-blue-300 cursor-pointer">
                                            <ListItemIcon> {React.cloneElement(icon, { style: { color: '#030712' } })} </ListItemIcon>
                                            <ListItemText primary={<Typography variant="body1" style={{ fontWeight: 'bold',fontStyle: 'italic', color: '#111827' }}>{text}</Typography>
                                            }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>    
                        );
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
                            <div className="flex">
                                        {list()}
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
                                <Button variant="outlined" className="mr-2" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    View
                                </Button>
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    Buy Now
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
                                <Button variant="outlined" className="mr-2" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    View
                                </Button>
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    Buy Now
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
                                <Button variant="outlined" className="mr-2" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    View
                                </Button>
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    Buy Now
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
                                <Button variant="outlined" className="mr-2" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    View
                                </Button>
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    Buy Now
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
                                <Button variant="outlined" className="mr-2" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    View
                                </Button>
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    Buy Now
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
                                <Button variant="outlined" className="mr-2" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    View
                                </Button>
                                <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                                    Buy Now
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
                    </>
     );
}