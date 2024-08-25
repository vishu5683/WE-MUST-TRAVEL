import React from 'react';
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';

const Locations = () => {
  const locations = [
    { country: 'INDIA', place: 'Kashmir', image: '/images/travel/pic1.jpg' },
    { country: 'TURKEY', place: 'Istanbul', image: '/images/travel/pic2.jpg' },
    { country: 'BALI', place: 'Ubud', image: '/images/travel/pic3.jpg' },
    { country: 'SINGAPORE', place: 'Sentosa', image: '/images/travel/pic4.jpg' },
    { country: 'MALDIVES', place: 'Male', image: '/images/travel/pic5.jpg' },
    { country: 'DUBAI', place: 'Burj Khalifa', image: '/images/travel/pic6.jpg' },
    { country: 'AUSTRALIA', place: 'Sydney', image: '/images/travel/pic7.jpg' },
    { country: 'AUSTRALIA', place: 'Great Barrier Reef', image: '/images/travel/pic8.jpg' },
  ];

  return (
    <Box sx={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        OUR LOCATIONS
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {locations.map((location, index) => (
          <Card key={index} sx={{ width: '300px', borderRadius: '27px', position: 'relative' }}>
            <CardMedia
              component="img"
              image={location.image}
              alt={`${location.place}, ${location.country}`}
              sx={{ borderRadius: '27px', height: '400px', objectFit: 'cover' }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                color: 'white',
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '0 0 0 27px',
                padding: '10px',
                width: '100%',
              }}
            >
              <Typography variant="h4" sx={{ fontSize: '25px', fontWeight: '500' }}>
                {location.country}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '20px' }}>
                {location.place}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Locations;
