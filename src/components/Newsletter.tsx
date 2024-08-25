import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Newsletter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '12px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '25px' }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '28px', md: '36px' },
            marginBottom: '12px',
            fontWeight: 'bold',
            color: '#0d47a1',
          }}
        >
          Join Our Newsletter
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', color: '#5c6bc0', maxWidth: '500px', margin: '0 auto' }}
        >
          Subscribe now and receive exclusive offers, updates, and the latest news delivered right to your inbox!
        </Typography>
      </Box>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '600px',
          gap: { xs: '15px', sm: '10px' },
        }}
      >
        <TextField
          type="email"
          name="emailid"
          placeholder="Enter your email"
          required
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#0d47a1' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: '100%',
            backgroundColor: 'white',
            borderRadius: '25px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            '& input': {
              fontSize: '16px',
              padding: '12px 16px',
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#0d47a1',
            color: 'white',
            borderRadius: '25px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              backgroundColor: '#ffffff',
              color: '#0d47a1',
              border: '2px solid #0d47a1',
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
