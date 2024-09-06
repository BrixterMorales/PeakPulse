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
export default function Home() {
                    const list = () => (
                        <Box className="w-64 bg-sky-100 h-100">
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
                    <Toolbar>
                        <div className="flex items-center space-x-2">
                            <img src="/peakpulselogo1.png" alt="PeakPulse Logo" className="h-10 w-10" />
                            <Typography variant="h6" component="div" className="flex-grow text-white">
                                PeakPulse
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
                <div className="flex">
                            {list()}
                            <Box component="main" className="flex-grow bg-white text-white p-6">
                                <div className="text-center p-6">
                                    <Typography variant="h4" className="text-black font-bold mb-6">
                                    Products Available in the Gym
                                    </Typography>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                                        <img
                                        src="/whey.png"
                                        className="w-full h-60 object-cover rounded-lg mb-4"
                                        />
                                        <Typography variant="h6" className="text-white mb-2">
                                        Whey Protein
                                        </Typography>
                                        <Button variant="contained" color="primary" className="mt-2">
                                        View
                                        </Button>
                                    </div>
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                                        <img
                                        src="/creatine.png"
                                        className="w-full h-60  object-cover rounded-lg mb-4"
                                        />
                                        <Typography variant="h6" className="text-white mb-2">
                                        Creatine Monohydrate
                                        </Typography>
                                        <Button variant="contained" color="primary" className="mt-2">
                                        View
                                        </Button>
                                    </div>

                                    <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                                        <img
                                        src="/energy.png"
                                        className="w-full h-60  object-cover rounded-lg mb-4"
                                        />
                                        <Typography variant="h6" className="text-white mb-2">
                                        Energy Booster
                                        </Typography>
                                        <Button variant="contained" color="primary" className="mt-2">
                                        View
                                        </Button>
                                    </div>

                                        <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                                        <img
                                        src="/collagen.png"
                                        className="w-full h-60 object-cover rounded-lg mb-4"
                                        />
                                        <Typography variant="h6" className="text-white mb-2">
                                        Collagen Fat Burner
                                        </Typography>
                                        <Button variant="contained" color="primary" className="mt-2">
                                        View
                                        </Button>
                                    </div>
                                     
                                    <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                                        <img
                                        src="/protein.png"
                                        className="w-full h-60 object-cover rounded-lg mb-4"
                                        />
                                        <Typography variant="h6" className="text-white mb-2">
                                       Protein bar
                                        </Typography>
                                        <Button variant="contained" color="primary" className="mt-2">
                                        View
                                        </Button>
                                    </div>

                                    <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                                        <img
                                        src="/glutine.png"
                                        className="w-full h-60 object-cover rounded-lg mb-4"
                                        />
                                        <Typography variant="h6" className="text-white mb-2">
                                        Glutamine
                                        </Typography>
                                        <Button variant="contained" color="primary" className="mt-2">
                                         View
                                        </Button>
                                    </div>

                                    </div>
                                </div>
                                </Box>
                        </div>
                    </>
     );
}