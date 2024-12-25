import React from 'react';
import { Modal, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Row
          className="font-3rem p-lr-1rem"
          style={{
            height: '10vh',
            width: '95%',
            justifyContent: 'center',
            fontSize: '3rem',
          }}
        >
          <Modal.Title style={{ color: 'var(--card-text)', fontSize: '5rem' }}>
            Menu
          </Modal.Title>
        </Row>
        <hr />
      </Modal.Header>
      <Modal.Body style={{ height: '70vh' }}>
        <Col
          style={{
            justifyContent: 'space-around',
            height: '100%',
          }}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              onClick={handleClose}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'var(--card-text)',
                padding: '2% 5%',
                fontSize: '4rem',
              }}
            >
              {link.text}
            </Link>
          ))}
        </Col>
      </Modal.Body>
      <hr />

      <Modal.Footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '12vh',
          padding: '0 1rem 0 0',
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
            height: '75%',
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
