import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box, Fade, Link, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GoogleIcon from '@mui/icons-material/Google';
import { teal, grey } from '@mui/material/colors';

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
        background: `linear-gradient(to bottom, ${grey[100]}, ${grey[200]})`,
        py: 8,
        scrollBehavior: 'smooth',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: teal[700], mb: 2 }}
        >
          What Our Customers Say
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: grey[600], mb: 6 }}
        >
          Hear from our satisfied travelers
        </Typography>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={review.id}>
              <Fade in timeout={index * 500}>
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
                    src={review.image}
                    alt={review.name}
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
                      {review.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: grey[700], mt: 1 }}>
                      {review.review}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: i < review.rating ? teal[700] : grey[400] }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 4,
            mb: 2,
          }}
        >
          <Link
            href="https://www.google.com/search?q=we+must+travel&sca_esv=c7a0e9feb6fce5cb&sca_upv=1&rlz=1C1YTUH_enIN1082IN1082&sxsrf=ADLYWIJ56CoOHpEpYrAvEBTthzj69dAG-A%3A1724739534903&ei=zm_NZrznNrTM1e8PtNTogAM&ved=0ahUKEwi8hru6w5SIAxU0ZvUHHTQqGjAQ4dUDCA8&uact=5&oq=we+must+travel&gs_lp=Egxnd3Mtd2l6LXNlcnAiDndlIG11c3QgdHJhdmVsMgoQIxiABBgnGIoFMgoQIxiABBgnGIoFMhMQLhiABBhDGMcBGIoFGI4FGK8BMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIiEC4YgAQYQxjHARiKBRiOBRivARiXBRjcBBjeBBjgBNgBAUjwFVDCCVjRE3ABeACQAQCYAegBoAGlA6oBBTAuMS4xuAEDyAEA-AEBmAIEoALnCMICDhAAGIAEGLADGIYDGIoFwgILEAAYgAQYsAMYogSYAwCIBgGQBgi6BgYIARABGBSSBwkxLjAuMi41LTGgB8UX&sclient=gws-wiz-serp#lrd=0x390ce1a20e94f69d:0x12ac4f9fcc835276,1,,,"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: teal[700],
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              '&:hover': {
                textDecoration: 'underline',
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
