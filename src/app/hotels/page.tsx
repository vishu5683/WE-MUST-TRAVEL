"use client";
import React, { useState } from 'react';
import { Container, Grid, Pagination, Box, Typography, Modal, Button } from '@mui/material';
import HotelCard from '../../components/HotelCard';
import SearchBar from '../../components/SearchBar';

type Hotel = {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  description?: string;
};

const hotelsData = [
  { id: 1, name: 'The Oberoi, Mumbai', location: 'Mumbai, Maharashtra', price: 12000, image: '/images/hotels/hotel1.jpg' },
  { id: 2, name: 'Taj Mahal Palace, Mumbai', location: 'Mumbai, Maharashtra', price: 15000, image: '/images/hotels/hotel2.jpg' },
  { id: 3, name: 'ITC Grand Chola, Chennai', location: 'Chennai, Tamil Nadu', price: 10000, image: '/images/hotels/hotel3.jpg' },
  { id: 4, name: 'The Leela Palace, New Delhi', location: 'New Delhi', price: 14000, image: '/images/hotels/hotel4.jpg' },
  { id: 5, name: 'The Oberoi Udaivilas, Udaipur', location: 'Udaipur, Rajasthan', price: 20000, image: '/images/hotels/hotel5.jpg' },
  { id: 6, name: 'The Taj Lake Palace, Udaipur', location: 'Udaipur, Rajasthan', price: 18000, image: '/images/hotels/hotel6.jpg' },
  { id: 7, name: 'The Leela Kovalam, Kerala', location: 'Kovalam, Kerala', price: 16000, image: '/images/hotels/hotel7.jpg' },
  { id: 8, name: 'The Oberoi Rajvilas, Jaipur', location: 'Jaipur, Rajasthan', price: 19000, image: '/images/hotels/hotel8.jpg' },
  { id: 9, name: 'Taj Falaknuma Palace, Hyderabad', location: 'Hyderabad, Telangana', price: 21000, image: '/images/hotels/hotel9.jpg' },
  { id: 10, name: 'The Leela Palace, Bengaluru', location: 'Bengaluru, Karnataka', price: 13000, image: '/images/hotels/hotel10.jpg' },
  { id: 11, name: 'The Oberoi, Mumbai', location: 'Mumbai, Maharashtra', price: 12500, image: '/images/hotels/hotel1.jpg' },
  { id: 12, name: 'Taj Mahal Palace, Mumbai', location: 'Mumbai, Maharashtra', price: 15500, image: '/images/hotels/hotel2.jpg' },
  { id: 13, name: 'ITC Grand Chola, Chennai', location: 'Chennai, Tamil Nadu', price: 10500, image: '/images/hotels/hotel3.jpg' },
  { id: 14, name: 'The Leela Palace, New Delhi', location: 'New Delhi', price: 14500, image: '/images/hotels/hotel4.jpg' },
  { id: 15, name: 'The Oberoi Udaivilas, Udaipur', location: 'Udaipur, Rajasthan', price: 20500, image: '/images/hotels/hotel5.jpg' },
  { id: 16, name: 'The Taj Lake Palace, Udaipur', location: 'Udaipur, Rajasthan', price: 18500, image: '/images/hotels/hotel6.jpg' },
  { id: 17, name: 'The Leela Kovalam, Kerala', location: 'Kovalam, Kerala', price: 16500, image: '/images/hotels/hotel7.jpg' },
  { id: 18, name: 'The Oberoi Rajvilas, Jaipur', location: 'Jaipur, Rajasthan', price: 19500, image: '/images/hotels/hotel8.jpg' },
  { id: 19, name: 'Taj Falaknuma Palace, Hyderabad', location: 'Hyderabad, Telangana', price: 21500, image: '/images/hotels/hotel9.jpg' },
  { id: 20, name: 'The Leela Palace, Bengaluru', location: 'Bengaluru, Karnataka', price: 13500, image: '/images/hotels/hotel10.jpg' },
  { id: 21, name: 'The Oberoi, Mumbai', location: 'Mumbai, Maharashtra', price: 13000, image: '/images/hotels/hotel1.jpg' },
  { id: 22, name: 'Taj Mahal Palace, Mumbai', location: 'Mumbai, Maharashtra', price: 16000, image: '/images/hotels/hotel2.jpg' },
  { id: 23, name: 'ITC Grand Chola, Chennai', location: 'Chennai, Tamil Nadu', price: 11000, image: '/images/hotels/hotel3.jpg' },
  { id: 24, name: 'The Leela Palace, New Delhi', location: 'New Delhi', price: 15000, image: '/images/hotels/hotel4.jpg' },
  { id: 25, name: 'The Oberoi Udaivilas, Udaipur', location: 'Udaipur, Rajasthan', price: 21000, image: '/images/hotels/hotel5.jpg' },
  { id: 26, name: 'The Taj Lake Palace, Udaipur', location: 'Udaipur, Rajasthan', price: 19000, image: '/images/hotels/hotel6.jpg' },
  { id: 27, name: 'The Leela Kovalam, Kerala', location: 'Kovalam, Kerala', price: 17000, image: '/images/hotels/hotel7.jpg' },
  { id: 28, name: 'The Oberoi Rajvilas, Jaipur', location: 'Jaipur, Rajasthan', price: 20000, image: '/images/hotels/hotel8.jpg' },
  { id: 29, name: 'Taj Falaknuma Palace, Hyderabad', location: 'Hyderabad, Telangana', price: 22000, image: '/images/hotels/hotel9.jpg' },
  { id: 30, name: 'The Leela Palace, Bengaluru', location: 'Bengaluru, Karnataka', price: 14000, image: '/images/hotels/hotel10.jpg' },
];

const ITEMS_PER_PAGE = 6;

const HotelsPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const filteredHotels = hotelsData.filter(hotel =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedHotels = filteredHotels.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container sx={{ paddingBottom: '2rem', marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#3f51b5' }}>
        Premium 5-Star Hotels
      </Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Box display="flex" justifyContent="center" my={2}>
        <Typography variant="body1">
          Showing {paginatedHotels.length} of {filteredHotels.length} hotels
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {paginatedHotels.map(hotel => (
          <Grid item key={hotel.id} xs={12} sm={6} md={4}>
            <HotelCard
              id={hotel.id}
              name={hotel.name}
              location={hotel.location}
              price={hotel.price}
              image={hotel.image}
            />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(filteredHotels.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      {selectedHotel && (
        <Modal open={!!selectedHotel} onClose={() => setSelectedHotel(null)}>
          <Box sx={{ ...modalStyle }}>
            <Typography variant="h6" component="h2">
              {selectedHotel.name}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {selectedHotel.description ? selectedHotel.description : 'No description available'}
            </Typography>
            <Button onClick={() => setSelectedHotel(null)} sx={{ mt: 3 }} variant="contained">
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Container>
  );
};

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default HotelsPage;
