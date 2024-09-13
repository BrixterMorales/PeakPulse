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
import { Card, CardContent} from '@mui/material';
import Rating from '@mui/material/Rating';
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
                        <Box component="main" className="flex-grow bg-gray-100 p-10 min-h-screen flex flex-col">
                            <Box className="max-w-   mx-auto bg-white rounded-lg shadow-lg p-6">
                            <Box className="flex flex-col md:flex-row justify-between">
                                <Box className="flex justify-center mb-6 md:mb-0 md:w-1/2">
                                <img
                                    src="/performancefitness.png"
                                    alt="Performance Fitness"
                                    className="w-full h-full max-w-xs object-cover border-2 border-gray-300 rounded-lg"
                                />
                                </Box>
                                <Box className="space-y-4 bg-gray-200 p-6 rounded-lg md:w-1/2">
                                <Typography variant="h4" className="font-bold text-black text-center">
                                    Performance Fitness
                                </Typography>

                                <Typography variant="body1" className="text-black mb-6">
                                    <span className="font-semibold">Location:</span>
                                    <br />
                                    Santa Catalina St. Carcar City, Cebu
                                </Typography>

                                <Typography variant="body1" className="text-black mb-6">
                                    <span className="font-semibold">Operating Hours:</span>
                                    <br />
                                    7:00 AM - 10:00 PM, Monday - Sunday
                                </Typography>

                                <Typography variant="h6" className="font-bold text-black mb-2">
                                    Equipments:
                                </Typography>
                                <ul className="list-disc list-inside mb-4 text-black">
                                    <li>Barbells: Pull-up Bar</li>
                                    <li>Dumbbells: Chest Press Machine</li>
                                    <li>Treadmill: Leg Press Machine</li>
                                </ul>
                                <Typography variant="h6" className="font-bold text-black mb-2">
                                    Contacts:
                                </Typography>
                                <Typography variant="body1" className="text-black">
                                    Email: <a href="mailto:Performancefitness@example.com" className="text-blue-500">Performancefitness@example.com</a>
                                </Typography>
                                <Typography variant="body1" className="text-black">
                                    Phone: <span className="text-black">09275687345</span>
                                </Typography>

                                <Button variant="contained" color="primary" className="mt-4">
                                    Book Gym
                                </Button>
                                <Box className="mt-4">
                                <Rating name="read-only" value={5} readOnly />
                            </Box>
                            </Box>
                            </Box>
                            </Box>
                            <Box className="flex mt-10">
                            <Box className="bg-white rounded-lg shadow-lg p-6 w-full h-auto max-w-3xl flex flex-col">
                                <Typography variant="h5" className="font-bold text-black mb-4">
                                Description
                                </Typography>
                                <Typography variant="body1" className="text-black mb-4">
                                Here’s what you’ll gain:
                                </Typography>
                                <ul className="list-disc list-inside mb-4">
                                <li>Initial Contact Mastery: Learn how to make a great first impression and gather essential information.</li>
                                <li>Lead Nurturing: The ‘Secret Sauce’ that can set you apart.</li>
                                <li>Property Viewing Techniques: Discover the best practices for viewing and assessing rental properties and building rapport.</li>
                                <li>The Listing Presentation: Key tips & tools to demonstrate your VALUE to prospective landlord clients.</li>
                                <li>Signing the Mandate: Understand how to use your mandate to highlight your VALUE & what crucial details should be included in your mandate for a smooth onboarding process.</li>
                                </ul>

                                <Typography variant="h5" className="font-bold text-black mb-2">
                                Benefits of Attending
                                </Typography>
                                <ul className="list-disc list-inside">
                                <li>Increase your confidence and professionalism in dealing with prospective landlord clients.</li>
                                <li>Learn the importance of showing VALUE and BENEFITS.</li>
                                <li>The importance of ‘standing out from the crowd’.</li>
                                <li>Improve your efficiency in gathering and managing property information.</li>
                                <li>Secure more mandates with comprehensive and well-structured lead capture, nurturing, and onboarding process.</li>
                                </ul>
                            </Box>
                            <Box className="ml-6 w-full max-w-xs">
                        <Typography variant="h5" className="font-bold text-black mb-4">Customer Reviews</Typography>
                        <Card variant="outlined" className="mb-4">
                            <CardContent>
                            <Typography variant="body1" className="font-medium">Tumulak</Typography>
                            <Typography variant="body2" className="text-gray-700 mb-2">Membership</Typography>
                            <Typography variant="body2" className="text-gray-600">
                                The gym is clean and has a nice environment.
                            </Typography>
                            </CardContent>
                        </Card>
                        <Card variant="outlined">
                            <CardContent>
                            <Typography variant="body1" className="font-medium">Nino Garbs</Typography>
                            <Typography variant="body2" className="text-gray-700 mb-2">Trainer</Typography>
                            <Typography variant="body2" className="text-gray-600">
                                The gym is cheap, yet very clean and simple. Performance fitness shows you what you already need equipment.
                            </Typography>
                            </CardContent>
                        </Card>
                        </Box>
                    </Box>
                    </Box>
                        </div>
                                                
                    </>
     );
}