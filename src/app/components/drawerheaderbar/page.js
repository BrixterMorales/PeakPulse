import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Assessment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function Drawerlist() {
                    const [open, setOpen] = React.useState(false);

                    const toggleDrawer = (newOpen) => () => {
                    setOpen(newOpen);
                    };

                    const DrawerList = (
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                        <List>
                        {[
                            { text: 'Gym Profiling', icon: <SportsGymnasticsIcon /> },
                            { text: 'Trainer', icon: <PersonIcon /> },
                            { text: 'Services and Promotion', icon: <LocalOfferIcon /> },
                            { text: 'Calendar', icon: <EventIcon /> },
                            { text: 'Reports', icon: <ReportIcon /> }
                        ].map(({ text, icon }) => (
                            <ListItem key={text} disablePadding>
                            <ListItemButton className="p-4 hover:bg-blue-300 cursor-pointer">
                                <ListItemIcon>
                                {React.cloneElement(icon, { style: { color: '#030712' } })}
                                </ListItemIcon>
                                <ListItemText
                                primary={
                                    <Typography
                                    variant="body1"
                                    style={{ fontWeight: 'bold', color: '#111827' }}
                                    >
                                    {text}
                                    </Typography>
                                }
                                />
                            </ListItemButton>
                            </ListItem>
                        ))}
                        </List>
                    </Box>
                    );

                    return (
                    <>
                    <Box className="flex-grow">
                    <AppBar
                        position="static"
                        className="bg-gray-900 border-t-4 border-gray-900 relative"
                    >
                        <Toolbar className="flex justify-center items-center relative">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                            <img
                                src="/peakpulselogo1.png"
                                alt="PeakPulse Logo"
                                className="h-10 w-10"
                            />
                            <Typography
                                variant="h6"
                                component="div"
                                className="text-white font-bold"
                            >
                                PeakPulse
                            </Typography>
                            </div>

                            <div className="flex space-x-6">
                            <Typography
                                variant="body1"
                                className="text-white uppercase hover:text-blue-300 cursor-pointer"
                            >
                                Learn More
                            </Typography>
                            <Typography
                                variant="body1"
                                className="text-white uppercase hover:text-blue-300 cursor-pointer"
                            >
                                About
                            </Typography>
                            <Typography
                                variant="body1"
                                className="text-white uppercase hover:text-blue-300 cursor-pointer"
                            >
                                Memberships
                            </Typography>
                            </div>

                            <Button className="bg-yellow-500 text-black font-bold hover:bg-yellow-600">
                            Contact Us
                            </Button>
                        </div>
                        </Toolbar>
                        <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        className="absolute bottom-2 right-4"
                        >
                        <MenuIcon />
                        </IconButton>
                    </AppBar>

                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    </Box>
                </>
            );
            };
