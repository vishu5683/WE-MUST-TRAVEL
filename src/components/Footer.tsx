import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, GitHub } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ padding: '24px', backgroundColor: 'rgb(21, 74, 74)', color: '#fff', marginTop: 'auto' }}>
      <Grid container justifyContent="space-around" alignItems="center" spacing={4}>
        {/* Terms & Policies Section */}
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              marginTop: '30px',
              fontSize: '20px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '30px',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: 'white',
                position: 'absolute',
                bottom: '-10px',
                left: 0,
              },
            }}
          >
            Terms & Policies
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Link href="/terms" sx={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/refunds" sx={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                Refunds/Cancellations
              </Link>
            </li>
            <li>
              <Link href="/privacy" sx={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/career" sx={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '4px 0' }}>
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
              marginTop: '5px', // Adjust this value to move the text slightly upward
              fontSize: '20px',
              fontWeight: 600,
              color: 'white',
              marginBottom: '25px', // Adjust the space between text and the line
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: 'white',
                position: 'absolute',
                bottom: '-5px',
                left: 0,
              },
            }}
          >
            Connect
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
            <IconButton
              component="a"
              href="https://www.facebook.com/wemusttravel"
              target="_blank"
              sx={{ color: '#fff', fontSize: '40px', height: '45px', width: '45px' }}
            >
              <Facebook fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.youtube.com/channel/UCKeNkeFx1ufOEMkEX_aFdFA?view_as=subscriber"
              target="_blank"
              sx={{ color: '#fff', fontSize: '40px', height: '45px', width: '45px' }}
            >
              <YouTube fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/wemusttravel365/"
              target="_blank"
              sx={{ color: '#fff', fontSize: '40px', height: '45px', width: '45px' }}
            >
              <Instagram fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/wemusttravel365"
              target="_blank"
              sx={{ color: '#fff', fontSize: '40px', height: '45px', width: '45px' }}
            >
              <Twitter fontSize="inherit" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/hemantiger/"
              target="_blank"
              sx={{ color: '#fff', fontSize: '40px', height: '45px', width: '45px' }}
            >
              <LinkedIn fontSize="inherit" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ textAlign: 'center', marginTop: '24px', borderTop: '1px solid #444', paddingTop: '16px' }}>
        <Typography variant="body2">&copy; 2024 All rights reserved by wemusttravel.in</Typography>
        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          Website developed by: Vishu Sharma
        </Typography>
      </Box>
    </Box>
  );
}
