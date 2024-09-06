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
                            <Box component="main" className="flex-grow bg-gray-100 p-10">
                            <div className="bg-gray-300 rounded-lg shadow-lg p-10">
                                <div className="flex flex-col items-center">
                                    <img
                                        src="/performancefitness.png"
                                        className="w-50 h-50 object-cover border-2 border-gray-300 mb-6" // Square image with margin below
                                    />
                                </div>
                                <div className="text-center">
                                    <Typography variant="h4" className="text-black font-bold mb-2">
                                        Performance Fitness
                                    </Typography>
                                <div className="text-left">
                                    <Typography variant="body1" className="text-black mb-6">
                                        <span className="font-semibold">Location:</span>
                                        <br />
                                        Santa Catalina St. Carcar City, Cebu
                                       </Typography>
                                       <Typography variant="body1" className="text-black mb-6">
                                        <span className="font-semibold">Operating Hours:</span>
                                        <br />
                                        Operating Hours: 7:00 AM- 10:00 PM from Monday- Sunday
                                       </Typography>
                                
                                    <Typography variant="h6" className="text-black font-bold mb-2">
                                        Equipments:
                                    </Typography>
                                    <ul className="list-disc list-inside mb-4 text-black">
                                        <li>Barbells: Pull-up Bar</li>
                                        <li>Dumbells:  Chest Press Machine </li>
                                        <li>Threadmill: Leg Press Machine</li>
                                    </ul>
                                    
                                    <Typography variant="h6" className="text-black font-bold mb-2">
                                        Contacts:
                                    </Typography>
                                    <p>Email: <a href="mailto:Performancefitness@example.com" className="text-blue-500">Performancefitness@example.com</a></p>
                                    <p>Phone: <span className="text-black">09275687345</span></p>
                                    
                                    <Button variant="contained" color="primary" className="mt-4">
                                        Book Gym
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Box>
                        </div>
                    </>
     );
}