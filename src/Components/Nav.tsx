import React, { useState, useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import Menu from './Modal'; // Adjust the import path as necessary
import { useLocation } from 'react-router-dom';

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
        return 'About Me';
      case '/contact':
        return 'Contact Me';
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
      <Nav
        id="nav"
        className={theme === 'dark' ? 'dark' : 'light'}
        style={{ justifyContent: 'space-between' }}
      >
        <i
          id="theme"
          onClick={toggleTheme}
          className={theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'}
        />
        <Card.Title style={{ fontSize: '5rem', color: 'var(--nav-text)' }}>
          {currentPage}
        </Card.Title>
        <i id="menu-btn" className="bi bi-list" onClick={handleShow} />
      </Nav>
      <Menu show={show} handleClose={handleClose} />
    </>
  );
};

export default Navigation;
