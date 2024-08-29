import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: '32px',
        backgroundColor: 'rgb(21, 74, 74)',
        color: '#fff',
        marginTop: 'auto',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
      }}
    >
      <Grid container justifyContent="space-around" alignItems="flex-start" spacing={4}>
        {/* Terms & Policies Section */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: { xs: '80px', sm: '60px' }, // Adjust underline width for mobile
                height: '3px',
                backgroundColor: '#e0e0e0',
                position: 'absolute',
                bottom: '-10px',
                left: { xs: '50%', sm: 0 }, // Center underline on mobile
                transform: { xs: 'translateX(-50%)', sm: 'none' },
              },
            }}
          >
            Terms & Policies
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
  <li>
    <Link href="/policies/terms" sx={{ color: '#ccc', textDecoration: 'none', display: 'block', padding: '8px 0', '&:hover': { color: '#fff' } }}>
      Terms & Conditions
    </Link>
  </li>
  <li>
    <Link href="/policies/refunds" sx={{ color: '#ccc', textDecoration: 'none', display: 'block', padding: '8px 0', '&:hover': { color: '#fff' } }}>
      Refunds/Cancellations
    </Link>
  </li>
  <li>
    <Link href="/policies/privacy" sx={{ color: '#ccc', textDecoration: 'none', display: 'block', padding: '8px 0', '&:hover': { color: '#fff' } }}>
      Privacy Policy
    </Link>
  </li>
  <li>
    <Link href="/policies/career" sx={{ color: '#ccc', textDecoration: 'none', display: 'block', padding: '8px 0', '&:hover': { color: '#fff' } }}>
      Career
    </Link>
  </li>
</Box>

        </Grid>

        {/* Connect Section */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: { xs: '80px', sm: '60px' }, // Adjust underline width for mobile
                height: '3px',
                backgroundColor: '#e0e0e0',
                position: 'absolute',
                bottom: '-10px',
                left: { xs: '50%', sm: 0 }, // Center underline on mobile
                transform: { xs: 'translateX(-50%)', sm: 'none' },
              },
            }}
          >
            Connect
          </Typography>
          <Box display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }} flexWrap="wrap" gap={2}>
            <IconButton
              component="a"
              href="https://www.facebook.com/wemusttravel"
              target="_blank"
              sx={{
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: 50,
                height: 50,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <Facebook fontSize="medium" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/channel/UCKeNkeFx1ufOEMkEX_aFdFA?view_as=subscriber"
              target="_blank"
              sx={{
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: 50,
                height: 50,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <YouTube fontSize="medium" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/wemusttravel365/"
              target="_blank"
              sx={{
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: 50,
                height: 50,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <Instagram fontSize="medium" />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/wemusttravel365"
              target="_blank"
              sx={{
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: 50,
                height: 50,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <Twitter fontSize="medium" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/hemantiger/"
              target="_blank"
              sx={{
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: 50,
                height: 50,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <LinkedIn fontSize="medium" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          paddingTop: '16px',
        }}
      >
        <Typography variant="body2" sx={{ color: '#ccc' }}>
          &copy; 2024 All rights reserved by wemusttravel.in
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px', color: '#ccc' }}>
          Website developed by: Vishu Sharma
        </Typography>
      </Box>
    </Box>
  );
}
