import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './Components/Nav.tsx';
import Footer from './Components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';

import './App.css';
import './index.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: string = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Router>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
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
