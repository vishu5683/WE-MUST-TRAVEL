import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

interface PackageCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  highlights: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, description, price, image, duration, highlights }) => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        },
        maxWidth: 350,
        margin: 'auto',
      }}
    >
      <CardMedia
        component="img"
        height="220"
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
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            marginBottom: '12px',
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '12px' }}>
          {description}
        </Typography>
        <Box sx={{ marginBottom: '12px' }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Duration:</strong> {duration}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Highlights:</strong> {highlights}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="primary"
          sx={{
            marginTop: '16px',
            fontWeight: 'bold',
            fontSize: '1.2rem',
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
