import React from 'react';
import { Card, CardContent, Avatar, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { teal, grey } from '@mui/material/colors';

interface ReviewCardProps {
  name: string;
  review: string;
  image: string;
  rating: number;
}

export default function ReviewCard({ name, review, image, rating }: ReviewCardProps) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Avatar
        src={image}
        alt={name}
        sx={{
          width: 80,
          height: 80,
          mb: 2,
          border: `2px solid ${teal[500]}`,
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: teal[900] }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: grey[700], mt: 1 }}>
          {review}
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              sx={{ color: i < rating ? teal[700] : grey[400] }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
