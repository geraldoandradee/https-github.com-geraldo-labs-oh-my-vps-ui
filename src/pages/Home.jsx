import { Box, Typography, Button, Container } from '@mui/material';

    function Home() {
      return (
        <Box>
          <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                VPS Management
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Simplify your VPS and k3s cluster management
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" size="large">
                  Get Started
                </Button>
              </Box>
            </Container>
          </Box>
        </Box>
      );
    }

    export default Home;
