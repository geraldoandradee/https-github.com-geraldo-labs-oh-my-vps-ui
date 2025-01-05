import { Outlet, Link } from 'react-router-dom';
    import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';

    function AppLayout() {
      console.log('AppLayout rendered'); // Debugging log
      return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                VPS Management
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit" component={Link} to="/app/dashboard">
                  Dashboard
                </Button>
                <Button color="inherit" component={Link} to="/app/servers">
                  Servers
                </Button>
                <Button color="inherit" component={Link} to="/app/clusters">
                  Clusters
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Outlet />
          </Container>
        </div>
      );
    }

    export default AppLayout;
