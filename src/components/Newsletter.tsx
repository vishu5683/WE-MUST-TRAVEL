import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Newsletter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" sx={{ fontSize: { xs: '32px', md: '38px' }, marginBottom: '10px' }}>
          Newsletter
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '20px', color: '#4c4c4c' }}>
          Subscribe to get offers and latest updates every week!
        </Typography>
      </Box>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '600px',
          gap: '10px',
        }}
      >
        <TextField
          type="email"
          name="emailid"
          placeholder="E-mail"
          required
          variant="outlined"
          sx={{
            width: '100%',
            backgroundColor: 'white', // Set background color to white
            borderRadius: '20px',
            '& input': {
              fontSize: '17px',
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
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
            backgroundColor: 'rgb(21, 74, 74)',
            color: 'white',
            borderRadius: '20px',
            padding: '14px 30px',
            fontSize: '17px',
            fontWeight: 450,
            '&:hover': {
              backgroundColor: 'white',
              color: 'rgb(21, 74, 74)',
              border: '2px solid rgb(21, 74, 74)',
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
