import { Routes, Route, Navigate } from 'react-router-dom';
    import Home from './pages/Home';
    import Pricing from './pages/Pricing';
    import About from './pages/About';
    import Login from './pages/Login';
    import AppLayout from './layouts/AppLayout';
    import Dashboard from './pages/app/Dashboard';
    import Servers from './pages/app/Servers';
    import Clusters from './pages/app/Clusters';

    function App() {
      console.log('App rendered'); // Debugging log
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="servers" element={<Servers />} />
            <Route path="clusters" element={<Clusters />} />
          </Route>
        </Routes>
      );
    }

    export default App;
