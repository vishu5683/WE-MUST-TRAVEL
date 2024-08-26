import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const CallToAction: React.FC = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: 'hsl(214, 57%, 51%)', // bright-navy-blue
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
        textAlign: { xs: 'center', md: 'left' },
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: 'calc(100% - 225px)' },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              mb: 2,
              color: 'hsl(0, 0%, 100%)', // white
              opacity: 0.85, // Slightly dimmed white for better readability
            }}
          >
            Your Journey Begins Here
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: 'hsl(0, 0%, 100%)', // white
              lineHeight: 1.2,
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)', // Text shadow for improved readability
            }}
          >
            Ready for an Unforgettable Adventure? Let’s Make It Happen!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'hsl(0, 0%, 100%)' }}>
            Discover breathtaking destinations, immerse yourself in new cultures, and create memories that will last a lifetime. Our team is here to make your dream trip a reality.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          sx={{
            py: 1.5,
            px: 4,
            color: 'hsl(0, 0%, 100%)', // white
            borderColor: 'hsl(0, 0%, 100%)', // white
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Lightened hover effect
              borderColor: 'hsl(0, 0%, 100%)', // white
            },
            fontSize: '1.2rem',
            borderRadius: '100px',
          }}
        >
          Get in Touch !
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
