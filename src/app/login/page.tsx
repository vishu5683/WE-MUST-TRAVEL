"use client";  // Add this at the top to mark it as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for App Router
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
  Fade,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VideoBackground from '../../components/VideoBackground';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // Simulate a login delay for the transition effect
    setTimeout(() => {
      router.push('/profile');
    }, 2000);
  };

  return (
    <Fade in={!loading} timeout={1000}>
      <Box sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center' }}>
        <VideoBackground src="/videos/login-bg.mp4" />

        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  maxWidth: 400,
                  margin: 'auto',
                  padding: 4,
                  background: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h4" align="center" gutterBottom>
                    Explore with We Must Travel
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                    Please login to manage your account.
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Username"
                    margin="normal"
                    defaultValue="admin"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                    defaultValue="admin@123"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      backgroundColor: 'primary.main',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                      padding: 1.5,
                      borderRadius: 1,
                    }}
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
}
