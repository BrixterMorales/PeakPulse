"use client";
import React from 'react';
import Footer from '@/app/components/footer/page';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LoginPage() {
  return (
    <>
    <div className="flex h-screen">

      <div className="w-1/2 h-full">
        <img 
          src="/graywebsitevibes.png" 
          alt="Ocean view" 
          className="object-cover w-full h-full"
        />
      </div>

  
      <div className="w-1/2 flex items-center justify-center bg-white">
        <Box 
          className="w-full max-w-xs p-8 bg-gray-800 shadow-lg rounded-lg"
        >
          <div className="flex justify-center mb-6">
            <img 
              src="/peakpulselogo1.png"   
              className="h-16" 
            />
          </div>
        
          
          <form>
            <TextField
              label="Username or Email Address"
              variant="outlined"
              fullWidth
              className="mb-4 text-white"
              InputProps={{
                className: "text-white", 
              }}
              InputLabelProps={{
                className: "text-white",
              }}
            />
            
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              className="mb-4 text-white"
              InputProps={{
                className: "text-white", 
              }}
              InputLabelProps={{
                className: "text-white", 
              }}
            />
          
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              className="mb-4 text-blue-500"
            />
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
              className="bg-blue-600 text-white"
            >
              Log In
            </Button>
          </form>

          <Box className="mt-4 text-center">
            <Typography variant="body2" color="textSecondary">
              <a href="#" className="text-blue-500 hover:underline">Lost your password?</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" className="mt-2">
              <a href="#" className="text-blue-500 hover:underline">&larr; Back to Landing Page of Peak Pulse</a>
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
    <Footer/>
    </>
  );
}