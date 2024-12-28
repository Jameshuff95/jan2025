import React, { useState, useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import Menu from './Modal'; // Adjust the import path as necessary
import { useLocation } from 'react-router-dom';

import '../index.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
  currentPage: string;
}

const Navigation: React.FC<ThemeProps> = ({ theme, toggleTheme }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPageName = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/portfolio':
        return 'Portfolio';
      default:
        return '';
    }
  };

  const [currentPage, setCurrentPage] = useState(
    getPageName(location.pathname)
  );

  useEffect(() => {
    setCurrentPage(getPageName(location.pathname));
  }, [location.pathname]);

  return (
    <>
      <Nav id="nav" className={theme === 'dark' ? 'dark' : 'light'}>
        <i
          id="theme"
          onClick={toggleTheme}
          className={theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'}
        />
        <Card.Title id="page-title">{currentPage}</Card.Title>
        <i id="menu-btn" className="bi bi-list" onClick={handleShow} />
      </Nav>
      <Menu show={show} handleClose={handleClose} />
    </>
  );
};

export default Navigation;
