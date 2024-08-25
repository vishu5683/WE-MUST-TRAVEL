import React from 'react';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';

export default function FlightsPage() {
  return (
    <Container sx={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#3f51b5' }}>
          Flights
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          We are currently working on bringing you the best deals for flight tickets.
        </Typography>
        <Typography variant="body1" component="p">
          For inquiries or to book your flights, please contact us.
        </Typography>
      </Box>

      <Box textAlign="center" mb={6}>
        <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" component="p">
            Email: <a href="mailto:office@wemusttravel.in">office@wemusttravel.in</a>
          </Typography>
          <Typography variant="body1" component="p" mt={1}>
            Phone: <a href="tel:+919871340295">+91 9871340295</a>, <a href="tel:+918448140752">+91 8448140752</a>
          </Typography>
        </Paper>
      </Box>

      <Box textAlign="center">
        <Typography variant="body2" component="p" color="textSecondary">
          We will soon have exciting offers on flight tickets. Stay tuned!
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '2rem' }}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
