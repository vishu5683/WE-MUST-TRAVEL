import React from 'react';
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material';
import Image from 'next/image';

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
      <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#0d47a1' }}>
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
          <Card
            key={index}
            sx={{
              width: { xs: '90%', sm: '300px' },
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{ position: 'relative', height: '400px' }}>
              <Image
                src={location.image}
                alt={`${location.place}, ${location.country}`}
                layout="fill"
                objectFit="cover"
                quality={50}
                priority
                style={{ borderRadius: '20px' }}
              />
            </Box>
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                color: 'white',
                background: 'rgba(0, 0, 0, 0.6)',
                padding: '10px',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {location.country}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '16px' }}>
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
