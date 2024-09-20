import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#f8f8f8',
                padding: '16px',
                textAlign: 'center',
                marginTop: 'auto',
            }}
        >
            <Typography variant="body1" color="textSecondary">
                © {new Date().getFullYear()} Peak Pulse. All rights reserved.
            </Typography>
            <Box sx={{ marginTop: '8px' }}>
                <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <InstagramIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
