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
                                <Box component="main" className="flex-grow bg-white p-6">
                                <Box className="text-center mb-6">
                                 <Typography variant="h4" className="text-black font-bold">
                                 Trainer's Profile
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
                                 <Box className="space-y-6">
                                                
                            
                                                <Box className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-start">  
                                                <img
                                                    src="/jose.png"
                                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mr-4"
                                                    alt="Jose P. Ybanez"
                                                />
                                                <Box className="flex-grow">
                                                    <Typography variant="h6" className="text-black font-bold">
                                                    Jose P. Ybanez
                                                    </Typography>
                                                    <Typography variant="body2" className="text-gray-700">Age: 30</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Location: Carcar City, Cebu</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Experience: 5 years in fitness training</Typography>
                                                    <Box className="flex items-center mt-2">
                                                    <Rating name="read-only" value={5} readOnly />
                                                    </Box>
                                                    <Box className="flex justify-end mt-2">
                                                    <Button variant="outlined" className="ml-2">View</Button>
                                                    <Button variant="outlined" className="ml-2">Book Trainer</Button>
                                                    </Box>
                                                </Box>
                                                </Box>

                                        
                                                <Box className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-start">
                                                <img
                                                    src="/Maria.png"
                                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mr-4"
                                                    alt="Maria Clara B. Ignacio"
                                                />
                                                <Box className="flex-grow">
                                                    <Typography variant="h6" className="text-black font-bold">
                                                    Maria Clara B. Ignacio
                                                    </Typography>
                                                    <Typography variant="body2" className="text-gray-700">Age: 28</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Location: Cebu City, Cebu</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Experience: 3 years in fitness training</Typography>
                                                    <Box className="flex items-center mt-2">
                                                    <Rating name="read-only" value={4} readOnly />
                                                    </Box>
                                                    <Box className="flex justify-end mt-2">
                                                    <Button variant="outlined" className="ml-2">View</Button>
                                                    <Button variant="outlined" className="ml-2">Book Trainer</Button>
                                                    </Box>
                                                </Box>
                                                </Box>
                                                <Box className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-start">
                                                <img
                                                    src="/richard.png"
                                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mr-4"
                                                    alt="Richard Y. Morales"
                                                />
                                                <Box className="flex-grow">
                                                    <Typography variant="h6" className="text-black font-bold">
                                                    Richard Y. Morales
                                                    </Typography>
                                                    <Typography variant="body2" className="text-gray-700">Age: 32</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Location: Talisay City, Cebu</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Experience: 6 years in fitness training</Typography>
                                                    <Box className="flex items-center mt-2">
                                                    <Rating name="read-only" value={4} readOnly />
                                                    </Box>
                                                    <Box className="flex justify-end mt-2">
                                                    <Button variant="outlined" className="ml-2">View</Button>
                                                    <Button variant="outlined" className="ml-2">Book Trainer</Button>
                                                    </Box>
                                                </Box>
                                                </Box>
                                                <Box className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-start">
                                                <img
                                                    src="/saitama.png"
                                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mr-4"
                                                    alt="Saitama"
                                                />
                                                <Box className="flex-grow">
                                                    <Typography variant="h6" className="text-black font-bold">
                                                    Saitama
                                                    </Typography>
                                                    <Typography variant="body2" className="text-gray-700">Age: 25</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Location: City of Heroes</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Experience: 1 year in fitness training</Typography>
                                                    <Box className="flex items-center mt-2">
                                                    <Rating name="read-only" value={5} readOnly />
                                                    </Box>
                                                    <Box className="flex justify-end mt-2">
                                                    <Button variant="outlined" className="ml-2">View</Button>
                                                    <Button variant="outlined" className="ml-2">Book Trainer</Button>
                                                    </Box>
                                                </Box>
                                                </Box>
                                                <Box className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-start">
                                                <img
                                                    src="/whis.png"
                                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mr-4"
                                                    alt="Whis"
                                                />
                                                <Box className="flex-grow">
                                                    <Typography variant="h6" className="text-black font-bold">
                                                    Whis
                                                    </Typography>
                                                    <Typography variant="body2" className="text-gray-700">Age: 500</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Location: Universe 7</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Experience: Eons in fitness training</Typography>
                                                    <Box className="flex items-center mt-2">
                                                    <Rating name="read-only" value={5} readOnly />
                                                    </Box>
                                                    <Box className="flex justify-end mt-2">
                                                    <Button variant="outlined" className="ml-2">View</Button>
                                                    <Button variant="outlined" className="ml-2">Book Trainer</Button>
                                                    </Box>
                                                </Box>
                                                </Box>
                                                <Box className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-start">
                                                <img
                                                    src="/kamogawa.png"
                                                    className="w-24 h-24 object-cover rounded-full border-2 border-gray-300 mr-4"
                                                    alt="Kamogawa"
                                                />
                                                <Box className="flex-grow">
                                                    <Typography variant="h6" className="text-black font-bold">
                                                    Kamogawa
                                                    </Typography>
                                                    <Typography variant="body2" className="text-gray-700">Age: 40</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Location: Tokyo, Japan</Typography>
                                                    <Typography variant="body2" className="text-gray-700">Experience: 20 years in fitness training</Typography>
                                                    <Box className="flex items-center mt-2">
                                                    <Rating name="read-only" value={4} readOnly />
                                                    </Box>
                                                    <Box className="flex justify-end mt-2">
                                                    <Button variant="outlined" className="ml-2">View</Button>
                                                    <Button variant="outlined" className="ml-2">Book Trainer</Button>
                                                    </Box>
                                                </Box>
                                                </Box>

                                            </Box>
                                            </Box>
                                                    </div>
                    </>
     );
}