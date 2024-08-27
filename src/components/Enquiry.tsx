"use client";
import React from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

const TravelInquiryForm: React.FC = () => {
  const [checkInDate, setCheckInDate] = React.useState<Dayjs | null>(null);
  const [checkOutDate, setCheckOutDate] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div
        className="travel-inquiry-section"
        style={{
          padding: '2rem',
          backgroundColor: '#001f3f',
          background: 'linear-gradient(135deg, #001f3f, #0056b3)',
          borderRadius: '15px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          margin: 'auto',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: '#ffffff',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem',
            letterSpacing: '0.08em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Plan Your Travel
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Search Destination*"
              placeholder="Enter Destination"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
              }}
              InputLabelProps={{
                style: { color: '#001f3f', fontWeight: 'bold' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Number Of Pax *"
              placeholder="No. of People"
              variant="outlined"
              fullWidth
              InputProps={{
                style: {
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                },
              }}
              InputLabelProps={{
                style: { color: '#001f3f', fontWeight: 'bold' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DatePicker
              label="Check-in Date*"
              value={checkInDate}
              onChange={(newValue: Dayjs | null) => setCheckInDate(newValue)}
              slotProps={{
                textField: {
                  placeholder: "dd-mm-yyyy",
                  fullWidth: true,
                  InputProps: {
                    style: {
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                  },
                  InputLabelProps: {
                    style: { color: '#001f3f', fontWeight: 'bold' },
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DatePicker
              label="Check-out Date*"
              value={checkOutDate}
              onChange={(newValue: Dayjs | null) => setCheckOutDate(newValue)}
              slotProps={{
                textField: {
                  placeholder: "dd-mm-yyyy",
                  fullWidth: true,
                  InputProps: {
                    style: {
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                  },
                  InputLabelProps: {
                    style: { color: '#001f3f', fontWeight: 'bold' },
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#007bff',
              color: '#ffffff',
              padding: '0.75rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.boxShadow =
                '0 8px 24px rgba(0, 123, 255, 0.4)')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.boxShadow =
                '0 4px 12px rgba(0, 123, 255, 0.3)')
            }
          >
            Submit Query
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TravelInquiryForm;
