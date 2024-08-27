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
      <div className="travel-inquiry-section" style={{ padding: '2rem', backgroundColor: '#001f3f' }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
          }}
        >
          Plan Your Travel
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Search Destination*"
              placeholder="Enter Destination"
              variant="outlined"
              fullWidth
              InputProps={{
                style: { backgroundColor: '#ffffff', borderRadius: '8px' },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Pax Number*"
              placeholder="No. of People"
              variant="outlined"
              fullWidth
              InputProps={{
                style: { backgroundColor: '#ffffff', borderRadius: '8px' },
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
                    style: { backgroundColor: '#ffffff', borderRadius: '8px' },
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
                    style: { backgroundColor: '#ffffff', borderRadius: '8px' },
                  },
                },
              }}
            />
          </Grid>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: '#007bff',
              color: '#ffffff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              fontSize: '1rem',
            }}
          >
            Submit Query
          </Button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default TravelInquiryForm;
