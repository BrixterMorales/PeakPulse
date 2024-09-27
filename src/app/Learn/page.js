"use client";
import React from 'react';
import Footer from '@/app/components/footer/page';
import DrawerList from '@/app/components/drawerheaderbar/page';
import { Box, Typography, Button } from '@mui/material';

export default function LearnMore() {
  return (
    <>
      <DrawerList />
      <Typography variant="h2" className="text-black text-4xl font-bold mb-5 mt-4 text-center">
            Learn More
        </Typography>
      <Box
        className="flex flex-col mt-10 md:flex-row-reverse min-h-[70vh] text-white mb-8" // Adjusted height and margin
        sx={{
          backgroundImage: 'url("/gymprofiling.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box className="flex flex-col justify-center p-4 w-full md:w-1/2 bg-black bg-opacity-60">
          <Typography variant="h5" className="font-semibold">Gym Profiling</Typography>
          <Typography variant="body2">
            Gym profiling allows you to customize your fitness experience based on your personal goals and preferences.
            Discover tailored workout plans, track your progress, and optimize your training sessions.
          </Typography>
        </Box>
      </Box>


      <Box
        className="flex flex-col md:flex-row min-h-[70vh] text-white mb-8" // Adjusted height and margin
        sx={{
          backgroundImage: 'url("/trainerprofile.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box className="flex flex-col justify-center p-4 w-full md:w-1/2 bg-black bg-opacity-60">
          <Typography variant="h5" className="font-semibold">Trainer</Typography>
          <Typography variant="body2">
            Our trainers are experienced professionals dedicated to helping you achieve your fitness goals. 
            With personalized guidance and support, you can maximize your potential and stay motivated throughout your journey.
          </Typography>
        </Box>
      </Box>

    
      <Box
        className="flex flex-col md:flex-row-reverse min-h-[70vh] text-white mb-8" // Adjusted height and margin
        sx={{
          backgroundImage: 'url("/productsprofile.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box className="flex flex-col justify-center p-4 w-full md:w-1/2 bg-black bg-opacity-60">
          <Typography variant="h5" className="font-semibold">Products</Typography>
          <Typography variant="body2">
            We offer a range of fitness products designed to enhance your training experience. 
            From supplements to workout gear, find everything you need to support your fitness journey.
          </Typography>
        </Box>
      </Box>

      <Footer />
    </>
  );
}