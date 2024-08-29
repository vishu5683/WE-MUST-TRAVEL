"use client";

import { Box, Typography, Grid } from '@mui/material';
import { Flight, DirectionsBus, Bed, EmojiPeople } from '@mui/icons-material'; // Imported EmojiPeople icon for Happy Clients

export default function ServicesSection() {
  return (
    <Box sx={{ padding: '50px 0', textAlign: 'center' }}>
      {/* Section Heading */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '30px', md: '40px' }, // Responsive font size
          fontWeight: 650,
          marginTop: '10px',
          marginBottom: '10px',
          lineHeight: 2,
        }}
      >
        We have the best services available for you!
      </Typography>

      {/* Services Grid */}
      <Grid
        container
        spacing={3}
        sx={{
          marginTop: '20px',
          paddingLeft: { xs: '10px', md: '30px' }, // Responsive padding
          paddingRight: { xs: '10px', md: '30px' },
          marginBottom: '10px',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        {/* Flight Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Box className="container-box">
            <Flight sx={{ fontSize: 100 }} />
            <Typography variant="h4" sx={{ fontSize: '20px', marginBottom: '5px', fontWeight: 550 }}>
              Flight Services
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px', color: '#808080' }}>
              Arrival and Departure
            </Typography>
          </Box>
        </Grid>

        {/* Happy Clients */}
        <Grid item xs={12} sm={6} md={3}>
          <Box className="container-box">
            <EmojiPeople sx={{ fontSize: 100 }} />
            <Typography variant="h4" sx={{ fontSize: '20px', marginBottom: '5px', fontWeight: 550 }}>
              Happy Clients
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px', color: '#808080' }}>
              Satisfaction Guaranteed
            </Typography>
          </Box>
        </Grid>

        {/* Travel Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Box className="container-box">
            <DirectionsBus sx={{ fontSize: 100 }} />
            <Typography variant="h4" sx={{ fontSize: '20px', marginBottom: '5px', fontWeight: 550 }}>
              Travel Services
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px', color: '#808080' }}>
              Pick-up/Drop
            </Typography>
          </Box>
        </Grid>

        {/* Hotel Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Box className="container-box">
            <Bed sx={{ fontSize: 100 }} />
            <Typography variant="h4" sx={{ fontSize: '20px', marginBottom: '5px', fontWeight: 550 }}>
              Hotel Services
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px', color: '#808080' }}>
              Accommodation
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
