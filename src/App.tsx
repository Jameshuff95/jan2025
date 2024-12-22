import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';

import Navigation from './Components/Nav.tsx';
import Footer from './Components/Footer.tsx';

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
