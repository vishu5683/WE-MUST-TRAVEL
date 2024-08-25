import { Container, Grid, Typography, Card, CardContent, Avatar, Box } from '@mui/material';

export default function AboutUs() {
  return (
    <Container sx={{ mb: 6 }}>
      {/* Founder Section */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/images/hemant.jpeg"
            alt="Hemant - Founder"
            sx={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: 4,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Hemant, Founder of We Must Travel
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            With over 15+ years of industry experience, Hemant has dedicated his life to making travel more affordable, exciting, and seamless for everyone. His vision and commitment have made We Must Travel a leading tourism company.
          </Typography>
          {/* Additional details about Hemant and company */}
        </Grid>
      </Grid>

      {/* Company Introduction */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          About We Must Travel
        </Typography>
        <Typography variant="body1" paragraph>
          WE MUST TRAVEL is a leading tourism company based in Delhi (India) providing holistic travel management services to its clients. We specialize in planning travel-related services for Asia, Europe & Oceania countries, bringing our in-depth knowledge and firsthand travel experiences to help our clients make their dream holidays come true.
        </Typography>
        {/* Additional paragraphs about the company... */}
      </Box>

      {/* Mission Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to make sure travel becomes more affordable, exciting, and seamless for everyone. We aim to represent, lead, and serve the travel industry with sincerity and deep commitment.
        </Typography>
        {/* Additional mission statements... */}
      </Box>

      {/* Team Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: 'Riya Sharma', role: 'Social Media Manager', img: '/images/riya.jpeg' },
            { name: 'Priyanshu Sharma', role: 'Travel Consultant', img: '/images/priyanshu.jpeg' },
            { name: 'Abhishek Kumar', role: 'Head – Sales & Marketing', img: '/images/abhi.webp' },
          ].map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ boxShadow: 4 }}>
                <CardContent>
                  <Avatar src={member.img} sx={{ width: 300, height: 300, mb: 2, mx: 'auto' }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
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
