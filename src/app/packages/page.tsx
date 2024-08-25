"use client";
import React, { useState } from 'react';
import { Container, Grid, Pagination, Box, Typography, Paper } from '@mui/material';
import PackageCard from '../../components/PackageCard';
import SearchBar from '../../components/SearchBar';

const packagesData = [
  { id: 1, title: 'Sri Lanka Tour', description: 'Explore the beauty of Sri Lanka.', price: 500, image: '/images/travel/pic1.jpg' },
  { id: 2, title: 'Bali Getaway', description: 'Enjoy the serene beaches of Bali.', price: 700, image: '/images/travel/pic2.jpg' },
  { id: 3, title: 'Paris Romance', description: 'Experience the romance in Paris.', price: 1200, image: '/images/travel/pic3.jpg' },
  { id: 4, title: 'France Adventure', description: 'Discover the charm of France.', price: 1100, image: '/images/travel/pic4.jpg' },
  { id: 5, title: 'India Heritage', description: 'Explore the rich heritage of India.', price: 300, image: '/images/travel/pic5.jpg' },
  { id: 6, title: 'Nepal Expedition', description: 'Adventure through Nepal.', price: 400, image: '/images/travel/pic6.jpg' },
  { id: 7, title: 'Thailand Escape', description: 'Unwind in beautiful Thailand.', price: 600, image: '/images/travel/pic7.jpg' },
  { id: 8, title: 'Japan Highlights', description: 'Experience the culture of Japan.', price: 1300, image: '/images/travel/pic8.jpg' },
  { id: 9, title: 'Australia Discovery', description: 'Discover the wonders of Australia.', price: 1400, image: '/images/travel/pic9.jpg' },
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
    <Container sx={{ padding: '20px 16px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.8rem', sm: '2.4rem' }, // Responsive font size
          fontWeight: 'bold',                       // Make the text bold
          color: 'primary.main',                    // Use theme color
          paddingTop: '20px',                       // Add padding at the top
          marginBottom: '30px',                     // Add margin at the bottom for spacing
          textTransform: 'uppercase',               // Capitalize all letters for a premium feel
        }}
      >
        Our Premium Packages
      </Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid container spacing={4} justifyContent="center">
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
          sx={{
            '& .MuiPaginationItem-root': {
              padding: '8px 12px',
              fontSize: '1rem',
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default PackagesPage;
