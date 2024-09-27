"use client";
import React from "react";
import DrawerAdmin from '@/app/components/drawerheaderforadmin/page';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Pagination  from '@mui/material/Pagination';


export default function GymProfiling() {
  return (
    <>
    <DrawerAdmin/>
    <Box component="main" className="p-4 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="font-bold text-gray-800 mb-4">
        Gym Profiling
      </Typography>
      <Box className="flex justify-center mb-6">
                          <Pagination count={10} color="primary" />
                        </Box>
      <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
        <Box className="flex items-center">
          <img
            src="/mikeygym.png"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <Box className="ml-4">
            <Typography variant="h6" className="font-bold text-gray-700">
              GYM NI MIKEY
            </Typography>
            <Typography className="text-gray-600">Location: New York</Typography>
            <Typography className="text-gray-600 mb-4">
              Top-notch equipment and trainers.
            </Typography>
            <Button
              variant="contained"
              className="bg-sky-500 text-white w-full sm:w-auto"
            >
              Review Gym Profile
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography className="text-red-600 font-bold">
            Not Registered
          </Typography>
        </Box>
      </Box>

      <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
        <Box className="flex items-center">
          <img
            src="/garbsgym.png" 
            alt="Body Strength Gym"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <Box className="ml-4">
            <Typography variant="h6" className="font-bold text-gray-700">
              GARBS THE GYM
            </Typography>
            <Typography className="text-gray-600">
              Location: LILOAN
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Specialize sa pag tog og sayo.
            </Typography>
            <Button
              variant="contained"
              className="bg-sky-500 text-white w-full sm:w-auto"
            >
              Review Gym Profile
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography className="text-red-600 font-bold">
            Not Registered
          </Typography>
        </Box>
      </Box>


      <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
        <Box className="flex items-center">
          <img
            src="/takangytm.png" 
            width={150}
            height={150}
            className="rounded-lg"
          />
          <Box className="ml-4">
            <Typography variant="h6" className="font-bold text-gray-700">
              TAK AN GYM
            </Typography>
            <Typography className="text-gray-600">Location: Miami</Typography>
            <Typography className="text-gray-600 mb-4">
              STALKER GYM
            </Typography>
            <Button
              variant="contained"
              className="bg-sky-500 text-white w-full sm:w-auto"
            >
              Review Gym Profile
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography className="text-red-600 font-bold">
            Not Registered
          </Typography>
        </Box>
      </Box>

 
      <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
        <Box className="flex items-center">
          <img
            src="/tumulakgym.png" 
            width={150}
            height={150}
            className="rounded-lg"
          />
          <Box className="ml-4">
            <Typography variant="h6" className="font-bold text-gray-700">
             TumulakGym
            </Typography>
            <Typography className="text-gray-600">
              Location: San Francisco
            </Typography>
            <Typography className="text-gray-600 mb-4">
              Calm atmosphere with professional yoga instructors.
            </Typography>
            <Button
              variant="contained"
              className="bg-sky-500 text-white w-full sm:w-auto"
            >
              Review Gym Profile
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography className="text-red-600 font-bold">
            Not Registered
          </Typography>
        </Box>
      </Box>

     
      <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
        <Box className="flex items-center">
          <img
            src="/gymnimel.png" 
            alt="Peak Performance"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <Box className="ml-4">
            <Typography variant="h6" className="font-bold text-gray-700">
            GYM GYM NI MEL
            </Typography>
            <Typography className="text-gray-600">Location: Chicago</Typography>
            <Typography className="text-gray-600 mb-4">
              Perfect for athletes and performance-focused training.
            </Typography>
            <Button
              variant="contained"
              className="bg-sky-500 text-white w-full sm:w-auto"
            >
              Review Gym Profile
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography className="text-red-600 font-bold">
            Not Registered
          </Typography>
        </Box>
      </Box>
    </Box>
        </>
  );
}
