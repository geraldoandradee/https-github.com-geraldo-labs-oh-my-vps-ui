import { Typography, Container } from '@mui/material';

    function About() {
      return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography>
            We are a team dedicated to simplifying VPS management.
          </Typography>
        </Container>
      );
    }

    export default About;
