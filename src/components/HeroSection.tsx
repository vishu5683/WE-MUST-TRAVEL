"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let currentVideo = 0;
    const videos = [
      '/videos/banner1.mp4',
      '/videos/banner6.mp4',
      '/videos/banner5.mp4',
    ];

    const playNextVideo = () => {
      currentVideo = (currentVideo + 1) % videos.length;
      if (videoElement) {
        videoElement.src = videos[currentVideo];
        videoElement.play();
      }
    };

    videoElement?.addEventListener('ended', playNextVideo);

    return () => {
      videoElement?.removeEventListener('ended', playNextVideo);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '8vh', // Slightly move content up
      }}
    >
      <video
        ref={videoRef}
        src="/videos/banner1.mp4"
        autoPlay
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          textAlign: 'center',
          color: '#fff',
          marginTop: '-10vh', // Move text content further up
          padding: { xs: '0 16px', sm: '0 32px' }, // Padding for mobile and larger screens
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '8vw', sm: '7vw', md: '4vw' }, // Reduced font sizes
            fontWeight: 'bold',
            marginBottom: '16px',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)', // Text shadow for better visibility
            transition: 'text-shadow 0.3s ease-in-out',
            '&:hover': {
              textShadow: '4px 4px 12px rgba(255, 255, 255, 0.8)', // Glow effect on hover
            },
          }}
        >
          WE MUST TRAVEL
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '4vw', sm: '3vw', md: '2vw' }, // Reduced font sizes
            marginBottom: '5vh',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)',
          }}
        >
          Plan your trip with us and explore the world with unmatched packages!
        </Typography>
        <Button
          variant="contained"
          href="https://www.instagram.com/wemusttravel365/"
          component={motion.a}
          whileHover={{ scale: 1.1 }} // Animation on hover
          whileTap={{ scale: 0.95 }} // Animation on tap/click
          sx={{
            fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Reduced button text size
            padding: { xs: '6px 15px', sm: '8px 20px', md: '10px 25px' }, // Adjusted padding
            color: 'rgb(21, 74, 74)',
            backgroundColor: 'white',
            borderRadius: '20px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgb(200, 200, 200)', // Slightly darker on hover
            },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Start Your Journey <ArrowForward sx={{ marginLeft: '8px' }} />
        </Button>
      </Box>
    </motion.div>
  );
}
