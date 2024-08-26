"use client";

import { Container, Grid, Typography, Card, CardContent, Avatar, Box, IconButton } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from 'chart.js';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

export default function AboutUs() {
  const pieData = {
    labels: ['Honeymoon Couples', 'Family Trips', 'Solo Travelers', 'Friends Group'],
    datasets: [
      {
        data: [60, 20, 10, 10],
        backgroundColor: ['#ff5722', '#2196f3', '#4caf50', '#ffc107'],
        hoverBackgroundColor: ['#e64a19', '#1976d2', '#388e3c', '#ffa000'],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <Container sx={{ mb: 6, mt: 6 }}>
      {/* Founder Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/images/hemant.jpeg"
            alt="Hemant - Founder"
            sx={{
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
            Hemant, Founder of We Must Travel
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555' }}>
            With over 15+ years of industry experience, Hemant has dedicated his life to making travel more affordable, exciting, and seamless for everyone. His vision and commitment have made We Must Travel a leading tourism company.
          </Typography>
        </Grid>
      </Grid>

      {/* Company Introduction */}
      <Box sx={{ mt: 8, p: 4, backgroundColor: '#f9f9f9', borderRadius: '16px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
          About We Must Travel
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#555' }}>
          WE MUST TRAVEL is a leading tourism company based in Delhi (India) providing holistic travel management services to its clients. We specialize in planning travel-related services for Asia, Europe & Oceania countries, bringing our in-depth knowledge and firsthand travel experiences to help our clients make their dream holidays come true.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#555' }}>
          Our mission is to make sure travel becomes more affordable, exciting, and seamless for everyone. We aim to represent, lead, and serve the travel industry with sincerity and deep commitment.
        </Typography>
      </Box>

      {/* Team Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: 'Riya Sharma', role: 'Social Media Manager', img: '/images/riya.jpeg' },
            { name: 'Priyanshu Sharma', role: 'Travel Consultant', img: '/images/priyanshu.jpeg' },
            { name: 'Abhishek Kumar', role: 'Head – Sales & Marketing', img: '/images/abhi.webp' },
          ].map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar src={member.img} sx={{ width: 150, height: 150, mb: 2, mx: 'auto', border: '4px solid #ff5722' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Details */}
      <Box sx={{ mt: 8, p: 4, backgroundColor: '#f9f9f9', borderRadius: '16px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
          <EmailIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> office@wemusttravel.in
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
          <PhoneIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> +91 9871340295, +91 8448140752
        </Typography>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 3 }}>
        <IconButton href="https://facebook.com" target="_blank" sx={{ width: 40, height: 40, color: '#4267B2' }}>
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://youtube.com" target="_blank" sx={{ width: 40, height: 40, color: '#FF0000' }}>
          <YouTubeIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://wa.me/91844140752" target="_blank" sx={{ width: 40, height: 40, color: '#25D366' }}>
          <WhatsAppIcon fontSize="large" />
        </IconButton>
      </Box>


    </Container>
  );
}
