import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Fade, Link, IconButton } from '@mui/material';

import GoogleIcon from '@mui/icons-material/Google';
import { teal, grey } from '@mui/material/colors';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    id: 1,
    name: "Sandeep Mishra",
    review: "I recently visited Nepal with 'We Must Travel,' and the trip was simply excellent. The hospitality provided by your team was outstanding. The hotels arranged were very comfortable, and the cabs for sightseeing were spacious and luxurious. I also believe I received the best package, considering the level of customization and cost. I look forward to planning more trips with you!",
    image: "/images/clientPics/c1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Gurleen Singh",
    review: "Our trip to Bali with 'We Must Travel' was amazing. Every detail was meticulously planned, and the team went above and beyond to ensure our comfort. The hotel had breathtaking views, and the sightseeing tours were fantastic. Truly a top-notch experience!",
    image: "/images/clientPics/c2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Ritik ",
    review: "We had an unforgettable experience in Switzerland, thanks to 'We Must Travel.' The accommodations were luxurious, and the itinerary was well thought out. The team’s attention to detail made all the difference. Highly recommended!",
    image: "/images/clientPics/c3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Vishal Kumar",
    review: "From the moment we arrived in Thailand, everything was perfect. The 'We Must Travel' team ensured that every part of our journey was smooth and enjoyable. The hotels were fantastic, and the excursions were a lot of fun. A perfect vacation!",
    image: "/images/clientPics/c4.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Chandan Sharma",
    review: "Our trip to Japan with 'We Must Travel' was an absolute delight. The service was impeccable, and the entire experience was seamlessly organized. We were particularly impressed by the cultural tours and the quality of the hotels.",
    image: "/images/clientPics/c5.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Tarun Sharma",
    review: "Our trip to Japan with 'We Must Travel' was an absolute delight. The service was impeccable, and the entire experience was seamlessly organized. We were particularly impressed by the cultural tours and the quality of the hotels.",
    image: "/images/clientPics/c5.jpg",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <Box
      id="customer-reviews"
      sx={{
        background: `linear-gradient(to bottom, ${teal[50]}, ${grey[100]})`,
        py: 8,
        scrollBehavior: 'smooth',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: teal[800],
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            animation: 'fadeIn 1.2s ease-in-out',
          }}
        >
          What Our Customers Say
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: grey[600],
            mb: 6,
            animation: 'fadeIn 1.5s ease-in-out',
          }}
        >
          Hear from our satisfied travelers
        </Typography>

        <Grid container spacing={4}>
          {reviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
              <ReviewCard
                name={review.name}
                review={review.review}
                image={review.image}
                rating={review.rating}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6,
            mb: 2,
            animation: 'fadeIn 1.8s ease-in-out',
          }}
        >
          <Link
            href="https://www.google.com/search?q=we+must+travel"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              backgroundColor: teal[700],
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              px: 3,
              py: 1.5,
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: teal[800],
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <GoogleIcon sx={{ mr: 1 }} />
            Check more reviews on Google
          </Link>
        </Box>
      </Container>
    </Box>
  );
}