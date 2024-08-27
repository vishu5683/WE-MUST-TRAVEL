"use client";

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  Breadcrumbs,
  Link,
  LinearProgress,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, grey, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: grey[600],
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
      color: teal[800],
    },
    body1: {
      color: grey[700],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "#fff",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: "8px 24px",
          textTransform: "none",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: teal[700],
          },
        },
      },
    },
  },
});

export default function ProfilePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
        {/* Breadcrumb */}
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            marginBottom: "24px",
            padding: "12px 24px",
            backgroundColor: teal[50],
            borderRadius: "10px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Link underline="hover" color="inherit" href="/">
            <HomeIcon sx={{ mr: 0.5, color: teal[700] }} fontSize="inherit" />
            Home
          </Link>
          <Typography color={teal[900]} fontWeight="bold">
            Profile
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Left Side Card */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ position: "sticky", top: "20px" }}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="24px"
              >
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                    marginBottom: 2,
                    border: `4px solid ${amber[600]}`,
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                  alt="Priyanshu"
                  src="/images/priyanshu.jpeg"
                />
                <Typography variant="h6" gutterBottom>
                  Priyanshu
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PersonIcon />}
                  sx={{ mb: 2 }}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Right Side Card */}
          <Grid item xs={12} sm={8}>
            <Paper elevation={3}>
              <Box padding="24px">
                <Typography variant="h6" gutterBottom>
                  Complete your Profile
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{
                    height: "10px",
                    borderRadius: "5px",
                    mb: "20px",
                    backgroundColor: grey[300],
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: teal[700],
                    },
                  }}
                />
                <Typography variant="body1" sx={{ mb: "24px" }} gutterBottom>
                  Get the best out of We Must Travel by adding the remaining
                  details!
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ color: teal[700] }}>
                      Profile
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Basic info, for a faster booking experience
                    </Typography>
                    <Button variant="outlined" sx={{ mb: 2 }}>
                      Edit
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">NAME</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Priyanshu Sharma
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">BIRTHDAY</Typography>
                    <Button variant="text">+ Add</Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">GENDER</Typography>
                    <Button variant="text">+ Add</Button>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">MARITAL STATUS</Typography>
                    <Button variant="text">+ Add</Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ color: teal[700] }}>
                      Login Details
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Manage your mobile number, email address, and password
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">MOBILE NUMBER</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      +91 - 7351734476
                    </Typography>
                    <Typography variant="body2" sx={{ color: teal[700] }}>
                      Verified
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body1">EMAIL ID</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      priyanshu@example.com
                    </Typography>
                    <Typography variant="body2" sx={{ color: teal[700] }}>
                      Verified
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body1">PASSWORD</Typography>
                    <Typography variant="body1">******</Typography>
                    <Button variant="text" sx={{ mt: 1 }}>
                      Change Password?
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
