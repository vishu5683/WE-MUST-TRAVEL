import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

interface HotelCardProps {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
}

const HotelCard: React.FC<HotelCardProps> = ({ name, location, price, image }) => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            marginBottom: '8px',
          }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{
            marginTop: '16px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          ₹{price} per night
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <Button
          size="medium"
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Book Now
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="primary"
          sx={{
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default HotelCard;
