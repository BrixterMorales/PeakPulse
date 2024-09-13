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
import Rating from '@mui/material/Rating'; 
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
                                                  
                    </>
     );
}