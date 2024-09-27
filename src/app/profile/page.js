"use client";
import * as React from 'react';
import DrawerList from '@/app/components/drawerheaderbar/page';
import Footer from '@/app/components/footer/page';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Home() {
  return (
    <>
 < DrawerList />
 <Box component="main" className="flex-grow bg-gray-100 p-10 min-h-screen flex flex-col">
           
                <Box className="bg-white rounded-lg shadow-lg p-6 mb-10">
                    <Box className="flex items-center justify-between">
                        <Box className="flex items-center">
                            <Avatar
                                src="Goku.png"
                                className="w-24 h-24 border-2 border-gray-300"
                            />
                            <Box className="ml-4">
                                <Typography variant="h5" className="font-bold text-black">Goku </Typography>
                                <Typography variant="body1" className="text-black mt-2">
                                    <span className="font-semibold">Age:</span> 60
                                </Typography>
                                <Typography variant="body1" className="text-black mt-1">
                                    <span className="font-semibold">Location:</span> Earth
                                </Typography>
                                <Typography variant="body1" className="text-black mt-1">
                                    <span className="font-semibold">Height:</span> 180 cm
                                </Typography>
                                <Typography variant="body1" className="text-black mt-1">
                                    <span className="font-semibold">Weight:</span> 75 kg
                                </Typography>
                                <Typography variant="body1" className="text-black mt-1">
                                    <span className="font-semibold">Allergies:</span> Pollen, Nuts
                                </Typography>
                            </Box>
                        </Box>
                        <Button variant="outlined" className="ml-4">
                            Edit Profile
                        </Button>
                    </Box>
                </Box>

                <Box className="flex">
         
                    <Box className="bg-white rounded-lg shadow-lg p-6 w-2/5 mr-4">
                        <Typography variant="h6" className="font-semibold mb-4">Create a Post</Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            variant="outlined"
                            placeholder="What's on your mind?"
                            className="mb-4"
                        />
                        <Button variant="contained" color="primary">Post</Button>
                                  </Box>
                   <Box className="bg-white rounded-lg shadow-lg p-6 w-3/5">
                  <Box className="flex justify-between items-center mb-4">
                      <Typography variant="h6" className="font-semibold">My Post</Typography>
                      <Button variant="text" color="primary" className="hover:underline text-black" onClick={() => {} }>
                          View More
                      </Button>
                  </Box>
                  
                  <Card variant="outlined" className="mb-4">
                      <CardContent>
                          <Typography variant="caption" className="text-gray-600">Posted on: 3011-09-20 12:00 PM</Typography>
                          <Typography variant="body1" className="text-black">
                              Me vs Gojo? Easy win.
                          </Typography>
                          <Box className="flex justify-between mt-2">  
                          </Box>
                      </CardContent>
                  </Card>

                  <Card variant="outlined" className="mb-4">
                      <CardContent>
                          <Typography variant="caption" className="text-gray-600">Posted on: 3056-09-20 9:58 PM</Typography>
                          <Typography variant="body1" className="text-black">
                              Planet Namek workout.
                          </Typography>
                          <Box className="flex justify-between mt-2">
                          </Box>
                      </CardContent>
                  </Card>
              </Box>
              </Box>

                               
                              <Box className="flex mt-10">
                  <Box className="bg-white rounded-lg shadow-lg p-6 w-2/5 mr-4">
                      <Typography variant="h6" className="font-semibold mb-4">Friends</Typography>
                      
                      <Card variant="outlined" className="mb-4">
                          <CardContent className="flex items-center">
                              <Avatar src="Vegeta.png" className="mr-2" />
                              <Typography variant="body1" className="font-medium">Vegeta</Typography>
                          </CardContent>
                      </Card>
                      
                      <Card variant="outlined" className="mb-4">
                          <CardContent className="flex items-center">
                              <Avatar src="luffy.png" className="mr-2" />
                              <Typography variant="body1" className="font-medium">Monkey D. Luffy</Typography>
                          </CardContent>
                      </Card>

              
                      <Box className="mt-2 text-center">
                          <Button variant="text" color="primary" className="hover:underline text-black" onClick={() => { /* Handle view all */ }}>
                              View All Friends
                          </Button>
                      </Box>
                      </Box>

                    <Box className="bg-white rounded-lg shadow-lg p-2 w-3/5">
                    <Typography variant="h6" className="font-semibold mb-0.5">User Photos</Typography>
                    <Box className="flex space-x-1">
                        <Box className="h-44 w-44 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="/goku1.png" className="h-full w-full object-cover" />
                        </Box>
                        <Box className="h-44 w-44 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="/goku2.png" className="h-full w-full object-cover" />
                        </Box>
                        <Box className="h-44 w-44 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="/goku3.png"  className="h-full w-full object-cover" />
                        </Box>
                    <Box className="h-44 w-44 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden m-0.5">
                            <img src="/goku4.png" className="h-full w-full object-cover" />
                        </Box>
                        <Box className="h-44 w-44 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden m-0.5">
                            <img src="/gokubeerus.png" className="h-full w-full object-cover" />
                        </Box>
                        <Box className="h-44 w-44 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden m-0.5">
                            <img src="/gokugangsta.png" className="h-full w-full object-cover" />
                        </Box>
                        <Button variant="text" color="primary" className="hover:underline text-black" onClick={() => { /* Handle view all */ }}>
                              See all photos
                      </Button>
                   
                    </Box>
                 </Box>   
                </Box>
                </Box>
    
             

            <Footer />
    </>
  );
}