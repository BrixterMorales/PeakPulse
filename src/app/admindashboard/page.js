"use client";
import React from 'react';
import DrawerAdmin from '@/app/components/drawerheaderforadmin/page';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
export default function admindashboard() {
return(
    <>
    <DrawerAdmin/>
    <Box component="main" className="p-4 bg-gray-100 min-h-screen">

 
        <Grid container spacing={4}>
      
          <Grid item xs={12} sm={6} md={3}>
            <Paper className="p-4 bg-white rounded-lg shadow-md">
              <Typography variant="h6" className="font-bold text-gray-700">
                Total Users
              </Typography>
              <Typography variant="h4" className="text-sky-500 font-bold">
                1,234
              </Typography>
            </Paper>
          </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Paper className="p-4 bg-white rounded-lg shadow-md">
                <Typography variant="h6" className="font-bold text-gray-700">
                  Active Gyms
                </Typography>
                <Typography variant="h4" className="text-pink-500 font-bold">
                  67
                </Typography>
              </Paper>
            </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper className="p-4 bg-white rounded-lg shadow-md">
              <Typography variant="h6" className="font-bold text-gray-700">
                Active Trainers
              </Typography>
              <Typography variant="h4" className="text-yellow-500 font-bold">
                89
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper className="p-4 bg-white rounded-lg shadow-md">
              <Typography variant="h6" className="font-bold text-gray-700">
                Total Revenue
              </Typography>
              <Typography variant="h4" className="text-green-500 font-bold">
                $12,340
              </Typography>
            </Paper>
          </Grid>

                    <Grid item xs={12}>
            <Paper className="p-4 bg-white rounded-lg shadow-md">
              <Typography variant="h6" className="font-bold text-gray-700 mb-4">
                Revenue Growth (Static Example)
              </Typography>
              <Box className="h-64 w-full flex items-center justify-center">
               
                <img
                  src="/chart1.png"  
                  alt="Revenue Growth Chart"
                  className="object-contain h-full w-full"
                />
              </Box>
            </Paper>
          </Grid>

        
          <Grid item xs={12} md={6}>
            <Paper className="p-4 bg-white rounded-lg shadow-md">
              <Typography variant="h6" className="font-bold text-gray-700 mb-4">
                Recent Admin Activities
              </Typography>
              <Typography className="text-gray-600">
                - John Doe registered for Gym A
              </Typography>
              <Typography className="text-gray-600">
                - Sarah Lee added Gym B to the platform
              </Typography>
              <Typography className="text-gray-600">
                - Monthly report for August generated
              </Typography>
              <Typography className="text-gray-600">
                - New promotion added for Gym C
              </Typography>
            </Paper>
          </Grid>

         
          <Grid item xs={12} md={6}>
            <Paper className="p-4 bg-white rounded-lg shadow-md">
              <Typography variant="h6" className="font-bold text-gray-700 mb-4">
                Recent Trainer Activities
              </Typography>
              <Typography className="text-gray-600">
                - Trainer A conducted a session at Gym X
              </Typography>
              <Typography className="text-gray-600">
                - Trainer B updated their profile
              </Typography>
              <Typography className="text-gray-600">
                - Trainer C added a new service to Gym Y
              </Typography>
              <Typography className="text-gray-600">
                - Trainer D received 5-star feedback
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}