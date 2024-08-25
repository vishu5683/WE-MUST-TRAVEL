"use client";  // Add this line at the top

import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid } from '@mui/material';

const packagesData = [
  {
    id: 1,
    title: 'Luxury Stay in Bali',
    price: 1200,
    discount: 10,
    itinerary: ['Day 1: Arrival', 'Day 2: Sightseeing', 'Day 3: Beach Day', 'Day 4: Departure'],
    image: '/images/travel/pic1.jpg',
  },
  {
    id: 2,
    title: 'Romantic Paris Getaway',
    price: 2000,
    discount: 15,
    itinerary: ['Day 1: Eiffel Tower', 'Day 2: Louvre Museum', 'Day 3: Seine River Cruise', 'Day 4: Departure'],
    image: '/images/travel/pic2.jpg',
  },
  // Add more packages here with images from pic3.jpg to pic9.jpg
];

export default function PackagesPage() {
  const [packages, setPackages] = useState(packagesData);

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-6 text-center font-bold">
        Explore Our Exclusive 4-Star Packages
      </Typography>

      <Grid container spacing={4}>
        {packages.map((pkg) => (
          <Grid item xs={12} md={6} key={pkg.id}>
            <Card className="flex flex-col md:flex-row rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardMedia
                component="img"
                image={pkg.image}
                alt={pkg.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
              <CardContent className="w-full md:w-1/2 flex flex-col justify-between">
                <Box>
                  <Typography variant="h6" component="div" className="font-semibold">
                    {pkg.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mt-2">
                    Price: ${pkg.price} <span className="line-through ml-2 text-gray-500">${pkg.price + (pkg.price * pkg.discount) / 100}</span>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="mt-2">
                    {pkg.itinerary.join(' • ')}
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" className="mt-4 self-start">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
