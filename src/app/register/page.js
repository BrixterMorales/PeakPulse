import React from "react";
import { Box, TextField, Button, FormControlLabel, Checkbox, Typography } from "@mui/material";

import Footer from '@/app/components/footer/page';
export default function register() {
  return (
    <>
    <div className="flex h-screen">
    {/* Left Image Section */}
    <div className="w-1/2 h-full">
      <img
        src="/graywebsitevibes.png"
        alt="Ocean view"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Right Form Section */}
    <div className="w-1/2 flex items-center justify-center bg-white">
      <Box className="w-full max-w-lg p-8 bg-gray-800 shadow-lg rounded-lg h-[600px] flex flex-col">
        <div className="flex justify-center mb-6">
          <img src="/peakpulselogo1.png" className="h-16" />
        </div>

        <Typography variant="h4" className="text-white font-bold mb-6 text-center">
          Registration Form
        </Typography>

        {/* Registration Form */}
        <form className="space-y-4 overflow-y-auto max-h-[450px]">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            className="mb-4"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />

          <Typography variant="h6" className="text-white font-semibold mt-4">
            Other Questions
          </Typography>

          <TextField
            label="Allergies"
            variant="outlined"
            fullWidth
            className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Height"
            variant="outlined"
            fullWidth
            c className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Weight"
            variant="outlined"
            fullWidth
            className="mb-4 text-white"
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
        </form>

        <div className="flex-grow" />

        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={
            <Typography className="text-gray-300">
              I agree to the{' '}
              <span className="text-blue-500 cursor-pointer">Terms and Conditions</span>
            </Typography>
          }
        />

        <Button
          variant="contained"
          fullWidth
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4"
        >
          REGISTER
        </Button>
      </Box>
    </div>
  </div>
  <Footer />

</>
);
}