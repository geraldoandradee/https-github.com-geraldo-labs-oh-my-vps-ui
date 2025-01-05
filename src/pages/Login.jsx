import { Box, Typography, TextField, Button, Container } from '@mui/material';

    function Login() {
      return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 3 }}
            >
              Sign In
            </Button>
          </Box>
        </Container>
      );
    }

    export default Login;
