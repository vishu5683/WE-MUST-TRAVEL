"use client";
import React, { useState } from 'react';
import { Container, Grid, Pagination, Box, Typography } from '@mui/material';
import PackageCard from '../../components/PackageCard';
import SearchBar from '../../components/SearchBar';

const packagesData = [
  { id: 1, title: 'Sri Lanka Tour', description: 'Explore the beauty of Sri Lanka.', price: 500, image: '/images/travel/pic1.jpg', duration: '7 Days', highlights: 'Wildlife, Beaches, Culture' },
  { id: 2, title: 'Bali Getaway', description: 'Enjoy the serene beaches of Bali.', price: 700, image: '/images/travel/pic2.jpg', duration: '5 Days', highlights: 'Beaches, Temples, Nightlife' },
  { id: 3, title: 'Paris Romance', description: 'Experience the romance in Paris.', price: 1200, image: '/images/travel/pic3.jpg', duration: '4 Days', highlights: 'Eiffel Tower, Museums, Cafes' },
  { id: 4, title: 'France Adventure', description: 'Discover the charm of France.', price: 1100, image: '/images/travel/pic4.jpg', duration: '8 Days', highlights: 'Wine, History, Architecture' },
  { id: 5, title: 'India Heritage', description: 'Explore the rich heritage of India.', price: 300, image: '/images/travel/pic5.jpg', duration: '10 Days', highlights: 'Temples, Culture, Food' },
  { id: 6, title: 'Nepal Expedition', description: 'Adventure through Nepal.', price: 400, image: '/images/travel/pic6.jpg', duration: '6 Days', highlights: 'Mountains, Trekking, Culture' },
  { id: 7, title: 'Thailand Escape', description: 'Unwind in beautiful Thailand.', price: 600, image: '/images/travel/pic7.jpg', duration: '7 Days', highlights: 'Beaches, Food, Nightlife' },
  { id: 8, title: 'Japan Highlights', description: 'Experience the culture of Japan.', price: 1300, image: '/images/travel/pic8.jpg', duration: '10 Days', highlights: 'Tradition, Technology, Nature' },
  { id: 9, title: 'Australia Discovery', description: 'Discover the wonders of Australia.', price: 1400, image: '/images/travel/pic9.jpg', duration: '14 Days', highlights: 'Wildlife, Beaches, Cities' },
];

const ITEMS_PER_PAGE = 3;

const PackagesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPackages = packagesData.filter(pkg =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedPackages = filteredPackages.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Container sx={{ padding: '40px 16px', maxWidth: 'lg' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.4rem' },
          fontWeight: 'bold',
          color: 'primary.main',
          paddingTop: '20px',
          marginBottom: '40px',
          textTransform: 'uppercase',
        }}
      >
        Our Premium Packages
      </Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid container spacing={4}>
        {paginatedPackages.map(pkg => (
          <Grid item key={pkg.id} xs={12} sm={6} md={4}>
            <PackageCard {...pkg} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(filteredPackages.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </Box>
    </Container>
  );
};

export default PackagesPage;
