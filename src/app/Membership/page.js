"use client";
import React from 'react';
import Footer from '@/app/components/footer/page';
import DrawerList from '@/app/components/drawerheaderbar/page';
import { Box, Typography, Button } from '@mui/material';
import { Card, CardContent} from '@mui/material';
export default function MEMBERSHIPS() {
    return (
    <>
    <DrawerList />

     <Box
        className="bg-opacity-80 relative flex flex-col justify-center items-center min-h-screen text-white"
        sx={{
          backgroundImage: 'url("/graywebsitevibes.png")', // Adjust your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          variant="h6"
          className="text-red-500 mb-2 text-center"
        >
          Hi.
        </Typography>

        <Typography
          variant="h1"
          className="text-5xl font-bold text-center mb-4 text-blue-800"
        >
          We are PeakPulse
        </Typography>
        <Typography
          variant="h2"
          className="text-3xl font-bold text-center mb-6 text-pink-800"
        >
          A Gym Management AS A Software Services.
        </Typography>

 
        <Typography
          variant="body1"
          className="text-center text-red-700 mb-8"
        >
        Get Membership in our gym website system.
        </Typography>

    
          <Button
          variant="contained"
          className="bg-sky-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
        >
          Get My Guide
        </Button>
        
        </Box>



      <Box className="py-16 bg-gray-100 text-center">
        <Typography variant="h3" className="text-4xl font-bold mb-8">
          Benefits of Membership
        </Typography>

        <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
      
          <Card className="shadow-lg rounded-lg">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4">
                Get 20% Discount on Services
              </Typography>
              <Typography className="mb-6">
                By becoming a member, you can enjoy a 20% discount on all our services
              </Typography>
              <Button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Become a Member
              </Button>
            </CardContent>
          </Card>

       
          <Card className="shadow-lg rounded-lg">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4">
                Noticeable
              </Typography>
              <Typography className="mb-6">
                As a member, you will get notice a lot by the gym owner or trainer
              </Typography>
              <Button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Become a Member
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg rounded-lg">
            <CardContent>
              <Typography variant="h5" className="font-bold mb-4">
                Get some best of the services.
              </Typography>
              <Typography className="mb-6">
                This will help you a lot to know more about the gym.
              </Typography>
              <Button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Become a Member
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
   <Footer />
 </>
);
}


