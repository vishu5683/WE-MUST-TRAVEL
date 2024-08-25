"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let currentVideo = 0;
    const videos = [
      '/videos/banner1.mp4',
      '/videos/banner2.mp4',
      '/videos/banner3.mp4'
    ];

    const playNextVideo = () => {
      currentVideo = (currentVideo + 1) % videos.length;
      videoElement.src = videos[currentVideo];
      videoElement.play();
    };

    videoElement.addEventListener('ended', playNextVideo);

    return () => {
      videoElement.removeEventListener('ended', playNextVideo);
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
        paddingTop: '10vh', // Move content slightly up
      }}
    >
      <video
        ref={videoRef}
        src="/videos/banner1.mp4"
        autoPlay
        muted
        loop
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
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: '10vh', fontWeight: 'bold', marginBottom: '16px' }}
        >
          WE MUST TRAVEL
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '4vh', marginBottom: '5vh' }}>
          Plan your trip with us and travel around the world with the most affordable packages!
        </Typography>
        <Button
          variant="contained"
        
          href="https://www.instagram.com/wemusttravel365/"
          sx={{
            fontSize: '25px',
            padding: '10px 30px',
            color: 'rgb(21, 74, 74)',
            backgroundColor: 'white',
            borderRadius: '20px',
            textDecoration: 'none',
            transition: 'ease 0.30s',
            '&:hover': {
              backgroundColor: 'rgb(200, 200, 200)', // Slightly darker on hover
            },
          }}
        >
          Get Your Booking
        </Button>
      </Box>
    </motion.div>
  );
}
