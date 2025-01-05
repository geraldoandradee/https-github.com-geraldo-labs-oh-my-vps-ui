import { Typography, Container } from '@mui/material';

    function Pricing() {
      return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Pricing
          </Typography>
          <Typography>
            Our pricing plans are designed to meet your needs.
          </Typography>
        </Container>
      );
    }

    export default Pricing;
