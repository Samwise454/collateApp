// App.jsx
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './components/Nav';
    import Home from './components/Home';
    import Dashboard from './components/Dashboard';
    import Poll from './components/Poll';
    import Lga from './components/Lga';
    import Party from './components/Party';
    import Prediction from './components/Prediction';
    import Ward from './components/Ward';
    import Footer from './components/Footer';

    function App() {
      return (
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Poll" element={<Poll />} />
          <Route path="/Lga" element={<Lga />} />
          <Route path="/Party" element={<Party />} />
          <Route path="/Prediction" element={<Prediction />} />
          <Route path="/Ward" element={<Ward />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      );
    }

    export default App;