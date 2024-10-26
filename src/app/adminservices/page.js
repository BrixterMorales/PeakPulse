"use client";
import React from "react";
import DrawerAdmin from '@/app/components/drawerheaderforadmin/page';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Pagination from '@mui/material/Pagination';

export default function ManageServicesAndPromotion() {
  return (
    <>
      <DrawerAdmin />
      <Box component="main" className="p-4 bg-gray-100 min-h-screen">
        <Typography variant="h4" className="font-bold text-gray-800 mb-4">
          Manage Services and Promotion
        </Typography>
        <Box className="flex justify-center mb-6">
          <Pagination count={10} color="primary" />
        </Box>
  
   <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/fitquestgym.png" 
              alt="Personal Training"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
                FitQuestGym
              </Typography>
              <Typography className="text-gray-600">
                Customized 1-on-1 sessions for personal fitness goals.
              </Typography>
              <Typography className="text-gray-600 mb-4">Location: New York</Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Review Service
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-green-600 font-bold">
              Active Promotion
            </Typography>
          </Box>
        </Box>

        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/kamogawa.png" 
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
                Kamogawa
              </Typography>
              <Typography className="text-gray-600">
                Kamogawa gym trainer.
              </Typography>
              <Typography className="text-gray-600 mb-4">Location: Liloan</Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Review Service
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-red-600 font-bold">
              Promotion Ended
            </Typography>
          </Box>
        </Box>

   
        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/na.png" 
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
              N/A
              </Typography>
              <Typography className="text-gray-600">
               N/A
              </Typography>
              <Typography className="text-gray-600 mb-4"></Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Review Service
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-red-600 font-bold">
            NONE
            </Typography>
          </Box>
        </Box>
        
        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/na.png"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
              N/A
              </Typography>
              <Typography className="text-gray-600">
               N/A
              </Typography>
              <Typography className="text-gray-600 mb-4"></Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Review Service
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-red-600 font-bold">
              NONE
            </Typography>
          </Box>
        </Box>

        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/na.png"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
                N/A
              </Typography>
              <Typography className="text-gray-600">
             N/A
              </Typography>
              <Typography className="text-gray-600 mb-4"></Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Review Service
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-red-600 font-bold">
             NONE
            </Typography>
          </Box>
        </Box>
      </Box>
     
      
        <Typography variant="h5" className="font-semibold text-gray-700 mb-2">
          Products
        </Typography>

      
        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/whey.png" 
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
               Whey
              </Typography>
              <Typography className="text-gray-600">
                High-quality whey protein to support muscle growth.
              </Typography>
              <Typography className="text-gray-600 mb-4">Stock: 50 units</Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Update Stock
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-red-600 font-bold">
              Low Stock
            </Typography>
          </Box>
        </Box>

    
        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/dumbbellset.png"  
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
                Dumbbell Set
              </Typography>
              <Typography className="text-gray-600">
                Adjustable weights for versatile workout routines.
              </Typography>
              <Typography className="text-gray-600 mb-4">Stock: 25 sets</Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Update Stock
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-green-600 font-bold">
              In Stock
            </Typography>
          </Box>
        </Box>

     
        <Box className="mb-8 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center">
          <Box className="flex items-center">
            <img
              src="/creatine.png"  
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Box className="ml-4">
              <Typography variant="h6" className="font-bold text-gray-700">
               Creatine
              </Typography>
              <Typography className="text-gray-600">
               good for muscles
              </Typography>
              <Typography className="text-gray-600 mb-4">Stock: 100 units</Typography>
              <Button
                variant="contained"
                color="primary"
                className="bg-sky-500 text-white w-full sm:w-auto"
              >
                Update Stock
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography className="text-green-600 font-bold">
              In Stock
            </Typography>
          </Box>
        </Box>
    </>
  );
}
