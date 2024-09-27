"use client";
import React from "react";
import Box from "@mui/material/Box";
import DrawerList from '@/app/components/drawerheaderbar/page';
import Footer from '@/app/components/footer/page';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function AboutPage() {
  return (
    <>
    <DrawerList />
    <Container maxWidth="lg" className="mt-12">

      <Box className="text-center mb-12">
        <Typography variant="h2" className="font-bold text-gray-900">
          About Us
        </Typography>
        <Typography variant="body1" className="text-gray-600 mt-4">
          Learn more about our mission, values, and team.
        </Typography>
      </Box>


      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6 bg-gray-100">
            <Typography variant="h5" className="font-bold text-gray-900">
              Our Mission
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              Our mission is to provide an exceptional fitness experience by connecting individuals to the best gyms and trainers around the globe. We aim to inspire healthier lifestyles through accessible, high-quality resources.
            </Typography>
          </Paper>
        </Grid>

 
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-6 bg-gray-100">
            <Typography variant="h5" className="font-bold text-gray-900">
              Our Values
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-2">
              We believe in the power of community, growth, and well-being. We’re committed to helping you achieve your fitness goals through a supportive and inclusive environment.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box className="text-center mt-12">
        <Typography variant="h4" className="font-bold text-gray-900">
          Meet Our Team
        </Typography>
        <Typography variant="body1" className="text-gray-600 mt-2">
          Get to know the people behind our brand.
        </Typography>
      </Box>

      <Grid container spacing={4} className="mt-8 mb-8">
      
        <Grid item xs={12} sm={4}>
          <Box className="text-center">
            <img
              src="/Flight.png"
              className="rounded-full w-32 h-32 object-cover mx-auto"
            />
            <Typography variant="h6" className="font-bold text-gray-900 mt-4">
              Flight
            </Typography>
            <Typography variant="body2" className="text-black-600">
              CEO & Founder
            </Typography>
          </Box>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Box className="text-center">
            <img
              src="/kakashi.png"
              className="rounded-full w-32 h-32 object-cover mx-auto"
            />
            <Typography variant="h6" className="font-bold text-gray-900 mt-4">
              KAKASHI HITAKE
            </Typography>
            <Typography variant="body2" className="text-black-600">
              Head of Marketing
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box className="text-center">
            <img
              src="/yuji.png"
      
              className="rounded-full w-32 h-32 object-cover mx-auto"
            />
            <Typography variant="h6" className="font-bold text-gray-900 mt-4">
              YUJI ITARDORI
            </Typography>
            <Typography variant="body2" className="text-black-600">
              Lead Developer
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Footer />
    </>
  );
}