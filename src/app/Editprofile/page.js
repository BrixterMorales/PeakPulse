"use client";
import DrawerList from '@/app/components/drawerheaderbar/page';
import Footer from '@/app/components/footer/page';
import React from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
export default function Home() {

    return (
        <>
               <DrawerList />
            <Box className="bg-white rounded-lg shadow-lg p-6 w-3/5 mx-auto mt-10 min-h-screen flex flex-col mb-10"> 
                <Typography variant="h5" className="font-semibold mb-4">Edit Profile</Typography>

            
                <Box className="flex flex-col items-center mb-4 bg-white p-4 rounded-lg">
                    <Avatar src="/goku.png" sx={{ width: 100, height: 100 }} />
                    <Typography variant="h5" className="font-semibold mb-4">Goku</Typography>
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-2"
                    />
                </Box>

             
                <Box>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        label="Location"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        label="Height (cm)"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        label="Weight (kg)"
                        variant="outlined"
                        fullWidth
                        className="mb-4"
                    />
                </Box>

              
                <div className="flex justify-center mt-4 mb-6"> 
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Save Changes
                    </Button>
                </div>
            </Box>
            <Footer /> 
      
    </>
    );
};
