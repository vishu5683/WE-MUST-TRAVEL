import { Container, Grid, Typography, Card, CardContent, Avatar, Box } from '@mui/material';

export default function AboutUs() {
  return (
    <Container sx={{ mb: 6, mt: 6 }}>
      {/* Founder Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/images/hemant.jpeg"
            alt="Hemant - Founder"
            sx={{
              width: '100%',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
            Hemant, Founder of We Must Travel
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555' }}>
            With over 15+ years of industry experience, Hemant has dedicated his life to making travel more affordable, exciting, and seamless for everyone. His vision and commitment have made We Must Travel a leading tourism company.
          </Typography>
          {/* Additional details about Hemant and company */}
        </Grid>
      </Grid>

      {/* Company Introduction */}
      <Box sx={{ mt: 8, p: 4, backgroundColor: '#f9f9f9', borderRadius: '16px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
          About We Must Travel
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#555' }}>
          WE MUST TRAVEL is a leading tourism company based in Delhi (India) providing holistic travel management services to its clients. We specialize in planning travel-related services for Asia, Europe & Oceania countries, bringing our in-depth knowledge and firsthand travel experiences to help our clients make their dream holidays come true.
        </Typography>
        {/* Additional paragraphs about the company... */}
      </Box>

      {/* Mission Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#555' }}>
          Our mission is to make sure travel becomes more affordable, exciting, and seamless for everyone. We aim to represent, lead, and serve the travel industry with sincerity and deep commitment.
        </Typography>
        {/* Additional mission statements... */}
      </Box>

      {/* Team Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: '#333' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: 'Riya Sharma', role: 'Social Media Manager', img: '/images/riya.jpeg' },
            { name: 'Priyanshu Sharma', role: 'Travel Consultant', img: '/images/priyanshu.jpeg' },
            { name: 'Abhishek Kumar', role: 'Head – Sales & Marketing', img: '/images/abhi.webp' },
          ].map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '16px', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar src={member.img} sx={{ width: 150, height: 150, mb: 2, mx: 'auto', border: '4px solid #ff5722' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
