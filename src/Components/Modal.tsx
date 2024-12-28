import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../index.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ModalProps {
  show: boolean;
  handleClose: () => void;
}

const Menu: React.FC<ModalProps> = ({ show, handleClose }) => {
  const links = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
    {
      href: '/portfolio',
      text: 'Portfolio',
    },
  ];

  return (
    <Modal id="menu" show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            onClick={handleClose}
            style={{
              textDecoration: 'none',
              color: 'var(--card-text)',
              cursor: 'pointer',
            }}
          >
            {link.text}
          </Link>
        ))}
      </Modal.Body>
      <Modal.Footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '15vh',
          padding: '0 2rem 0 0',
        }}
      >
        <Button
          variant="danger"
          onClick={handleClose}
          style={{
            background: 'red',
            color: 'white',
            cursor: 'pointer',
            width: '40%',
            height: '60%',
            border: '1px solid var(--card-text)',
            borderRadius: '10px',
            fontSize: '3.5rem',
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Menu;
