import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Menu from './Modal'; // Adjust the import path as necessary

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

const Navigation: React.FC<ThemeProps> = ({ theme, toggleTheme }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // prettier-ignore
  return (
    <>
      <Nav id="nav" className={theme === 'dark' ? 'dark' : 'light'} style={{ justifyContent: 'space-between' }} >
        <i id="theme" onClick={toggleTheme} className={theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'} />
        <i id="menu-btn" className="bi bi-list" style={{}} onClick={handleShow} />
      </Nav>
      <Menu show={show} handleClose={handleClose} />
    </>
  );
};

export default Navigation;
