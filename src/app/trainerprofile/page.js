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
                              <ListItemIcon>{React.cloneElement(icon, { style: { color: '#030712' } })}</ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="body1"
                                    style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#111827' }}
                                  >
                                    {text}
                                  </Typography>
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
                            <Box className="bg-white rounded-lg shadow-lg p-6 mb-10">
                                <Box className="flex items-center justify-between">
                                <Box className="flex items-center">
                                    <img
                                    src="/jose.png"
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                                    />
                                    <Box className="ml-4">
                                    <Typography variant="h5" className="font-bold text-black">Jose P. Ybanez</Typography>
                                    <Typography variant="body1" className="text-black mt-2">
                                        <span className="font-semibold">Age:</span> 30
                                    </Typography>
                                    <Typography variant="body1" className="text-black mt-1">
                                        <span className="font-semibold">Location:</span> Carcar City, Cebu
                                    </Typography>
                                    <Typography variant="body1" className="text-black mt-1">
                                        <span className="font-semibold">Experience:</span> 5 years in fitness training
                                    </Typography>
                                    </Box>
                                    </Box>
                                <Box className="flex flex-col items-end">
                                <Rating name="read-only" value={5} readOnly />
                                    <Button variant="outlined" className="mt-2">Book Trainer</Button>
                                
                            </Box>
                            </Box>
                            </Box>
                            <Box className="flex mb-10">
                               
                                <Box className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full mr-4">
                                <Typography variant="h5" className="font-bold text-black mb-4">Background Experience:</Typography>
                                <Typography variant="body1" className="text-black mb-4">
                                    With over 10 years of experience in the fitness industry, Maria Clara has a proven track record of helping clients achieve their fitness goals. She has worked with a diverse clientele, ranging from professional athletes to beginners looking to improve their overall health. Jane specializes in strength training, weight loss programs, and injury rehabilitation, ensuring personalized and effective workout plans for each individual.
                                </Typography>

                                <Typography variant="h5" className="font-bold text-black mb-2">Achievements:</Typography>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Trained multiple athletes who have gone on to compete at national levels.</li>
                                    <li>Featured in several fitness magazines for her innovative workout programs.</li>
                                    <li>Regularly conducts workshops and seminars on fitness and wellness.</li>
                                </ul>

                              
                                <Typography variant="h5" className="font-bold text-black mb-2">Contacts:</Typography>
                                <Typography variant="body1" className="text-black">Email: Marialgnacio@gmail.com</Typography>
                                <Typography variant="body1" className="text-black">Facebook: Marialgnacio69@yahoo.com</Typography>
                                <Typography variant="body1" className="text-black">Contact Number: 09275687345</Typography>
                                </Box>
                                
                                <Box className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                                <img
                                    src="/achievements.png"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                </Box>
                                <Box className="ml-6 w-full max-w-xs">
                            <Typography variant="h5" className="font-bold text-black mb-4">Customer Reviews</Typography>
                      
                            <Card variant="outlined" className="mb-4">
                                <CardContent>
                                <Typography variant="body1" className="font-medium">Mike Ybalez</Typography>
                                <Typography variant="body2" className="text-gray-700 mb-2">Membership</Typography>
                                <Typography variant="body2" className="text-gray-600">Nice Coaching.</Typography>
                                </CardContent>
                            </Card>

                         
                            <Card variant="outlined" className="mb-4">
                                <CardContent>
                                <Typography variant="body1" className="font-medium">Mel</Typography>
                                <Typography variant="body2" className="text-gray-700 mb-2">Membership</Typography>
                                <Typography variant="body2" className="text-gray-600">Great Trainer.</Typography>
                                </CardContent>
                            </Card>

                           
                            <Card variant="outlined" className="mb-4">
                                <CardContent>
                                <Typography variant="body1" className="font-medium">Jenna</Typography>
                                <Typography variant="body2" className="text-gray-700 mb-2">Membership</Typography>
                                <Typography variant="body2" className="text-gray-600">Excellent Support.</Typography>
                                </CardContent>
                            </Card>

                            <Card variant="outlined">
                                <CardContent>
                                <Typography variant="body1" className="font-medium">Ivan </Typography>
                                <Typography variant="body2" className="text-gray-700 mb-2">Membership</Typography>
                                <Typography variant="body2" className="text-gray-600">Excellent Support.</Typography>
                                </CardContent>
                            </Card> 
                            </Box>
                            </Box>                              
                            </Box>
                                             
                     </div> 
                                                
                    </>
     );
}