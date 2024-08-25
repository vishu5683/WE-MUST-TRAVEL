import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

interface PackageCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, description, price, image }) => {
  return (
    <Card
      sx={{
        borderRadius: '16px',            // Rounded corners
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        transition: 'transform 0.3s ease-in-out',  // Smooth hover effect
        '&:hover': {
          transform: 'translateY(-8px)', // Slight lift on hover
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
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
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{
            marginTop: '16px',
            fontWeight: 'bold',
            fontSize: '1.2rem', // Larger price text for emphasis
          }}
        >
          ${price} per person
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

export default PackageCard;
