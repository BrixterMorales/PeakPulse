"use client";
import * as React from 'react';
import DrawerList from '@/app/components/drawerheaderbar/page';
import Footer from '@/app/components/footer/page';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Pagination  from '@mui/material/Pagination';
export default function servicepromo() {
    return (
        <>
     < DrawerList />
                <Box
                className="relative flex flex-col min-h-screen text-white"
                sx={{
                    backgroundColor: '#FFFFFF', 
                }}
            >
               
                <Box
                    className="flex flex-col items-center py-24 px-8 " 
                    style={{
                        backgroundImage: "url('bannerpeak.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: '400px', 
                    }}
                >
               
                </Box>
          
        <Typography variant="h2" className="text-black text-4xl font-bold mb-5 mt-4 text-center">
            SERVICES AND PROMOTION
        </Typography>
        
                <Box className="flex justify-center py-8 bg-white">
            <img
                src="beerusads.png"
                alt="Promotion"
                className="max-w-full h-auto"
                style={{ maxWidth: '700px', height: 'auto', aspectRatio: '16/9' }} 
            />
            <div className="flex flex-col justify-center ml-4">
                <Box className="w-96 h-48 bg-gray-300 mb-2"> 
                    <img 
                        src="kamagawaads.png" 
                        alt="Image 1" 
                        className="w-full h-full object-cover"
                    />
                </Box>
                <Box className="w-96 h-48 bg-gray-300"> 
                    <img 
                        src="fitqdiscounts.png" 
                        alt="Image 2" 
                        className="w-full h-full object-cover"
                    />
                </Box>
            </div>
        </Box>

    
        <Box className="py-16 px-8">
          <Box className="flex justify-center items-center mb-8">
            <Typography
              variant="h4"
              className="text-black font-semibold"
            >
              Discounts Right Now
            </Typography>
          </Box>
          <Box className="flex flex-wrap justify-center gap-4"> {/* Add flexbox for layout */}
    <Box className="bg-white rounded-lg overflow-hidden shadow-lg w-48"> {/* Set a fixed width */}
        <img
            src="/Energy.png"
            className="w-full h-32 object-cover"
        />
        <Typography variant="body1" className="text-center py-1 text-black font-bold"> {/* Adjust padding */}
            Energy Booster
        </Typography>
        <Typography variant="body1" className="text-center py-0 text-black">
            Product
        </Typography>
        <Typography className="text-center text-red-500 font-semibold">
            20% OFF
        </Typography> 
        <Box className="flex justify-center mb-2"> {/* Adjust margin */}
            <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                View
            </Button>
        </Box>
    </Box>

    <Box className="bg-white rounded-lg overflow-hidden shadow-lg w-48">
        <img
            src="/kamogawa.png"
            alt="Dancer"
            className="w-full h-32 object-cover"
        />
        <Typography variant="body1" className="text-center py-1 text-black font-bold">
            Kamogawa
        </Typography>
        <Typography variant="body1" className="text-center py-0 text-black">
            Trainer
        </Typography>
        <Typography className="text-center text-red-500 font-semibold">
            15% OFF
        </Typography>
        <Box className="flex justify-center mb-2"> 
            <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                View
            </Button>
        </Box>
    </Box>

    <Box className="bg-white rounded-lg overflow-hidden shadow-lg w-48">
        <img
            src="/fitquestgym.png"
            className="w-full h-32 object-cover"
        />
        <Typography variant="body1" className="text-center py-1 text-black font-bold">
            FitQuestGym
        </Typography>
        <Typography variant="body1" className="text-center py-0 text-black">
            Gym
        </Typography>
        <Typography className="text-center text-red-500 font-semibold">
            30% OFF
        </Typography> 
        <Box className="flex justify-center mb-2"> 
            <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                View
            </Button>
        </Box>
    </Box>

    <Box className="bg-white rounded-lg overflow-hidden shadow-lg w-48">
        <img
            src="/collagen.png"
            alt="Band"
            className="w-full h-32 object-cover"
        />
        <Typography variant="body1" className="text-center py-1 text-black font-bold">
            Collagen Fat Burner
        </Typography>
        <Typography variant="body1" className="text-center py-0 text-black">
            Product
        </Typography>
        <Typography className="text-center text-red-500 font-semibold">
            20% OFF
        </Typography> 
        <Box className="flex justify-center mb-2"> 
            <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                View
            </Button>
        </Box>
    </Box>
    <Box className="bg-white rounded-lg overflow-hidden shadow-lg w-48">
        <img
            src="/whis.png"
            alt="Band"
            className="w-full h-32 object-cover"
        />
        <Typography variant="body1" className="text-center py-1 text-black font-bold">
            Whis
        </Typography>
        <Typography variant="body1" className="text-center py-0 text-black">
            Trainer
        </Typography>
        <Typography className="text-center text-red-500 font-semibold">
            50% OFF
        </Typography> 
        <Box className="flex justify-center mb-2"> 
            <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                View
            </Button>
        </Box>
    </Box>
    <Box className="bg-white rounded-lg overflow-hidden shadow-lg w-48">
        <img
            src="/beerusgym.png"
            alt="Band"
            className="w-full h-32 object-cover"
        />
        <Typography variant="body1" className="text-center py-1 text-black font-bold">
          Beerus Gym
        </Typography>
        <Typography variant="body1" className="text-center py-0 text-black">
            Gym
        </Typography>
        <Typography className="text-center text-red-500 font-semibold">
            10% OFF
        </Typography> 
        <Box className="flex justify-center mb-2"> 
            <Button variant="outlined" style={{ color: '#007bff', borderColor: '#007bff' }}>
                View
            </Button>
        </Box>
    </Box>
</Box>
          
         <Box className="mt-6 flex justify-center">
                            <Pagination count={3} color="primary" />
                        </Box>
                        </Box>
       
          </Box>
          < Footer /> 
</>
);
}

