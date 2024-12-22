import React, { useState } from 'react';
import { Nav, NavLink, Modal, Button, Col } from 'react-bootstrap';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

const Navigation: React.FC<ThemeProps> = ({ theme, toggleTheme }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Nav id="nav" className={theme === 'dark' ? 'dark' : 'light'}>
      <i
        id="theme"
        onClick={toggleTheme}
        className={theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'}
      />
      <i id="menu-btn" className="bi bi-list" style={{}} onClick={handleShow} />

      <Modal id="menu" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Menu</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Nav>
  );
};

export default Navigation;
