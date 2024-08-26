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
  Backdrop,
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
    }, 500);
  };

  return (
    <Fade in={!loading} timeout={1000}>
      <Box sx={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <VideoBackground src="/videos/login-bg.mp4" />
        <Backdrop
          open={true}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  maxWidth: 450,
                  margin: 'auto',
                  padding: 4,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 30%, rgba(240,240,240,0.7) 90%)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                  borderRadius: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 700, fontFamily: "'Roboto Slab', serif" }}
                  >
                    Explore with We Must Travel
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: 18 }}>
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
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ccc',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
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
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ccc',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      background: 'linear-gradient(90deg, rgba(33,150,243,1) 0%, rgba(3,169,244,1) 100%)',
                      color: '#fff',
                      '&:hover': {
                        background: 'linear-gradient(90deg, rgba(3,169,244,1) 0%, rgba(33,150,243,1) 100%)',
                      },
                      padding: 1.75,
                      borderRadius: 2,
                      fontSize: 18,
                      transition: 'transform 0.2s ease-in-out',
                      '&:active': {
                        transform: 'scale(0.98)',
                      },
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
