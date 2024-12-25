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
      </Modal.Header>
      <Modal.Body>
        <Col style={{ height: '75vh', justifyContent: 'space-evenly' }}>
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
                height: '20%',
                padding: '2% 5%',
                fontSize: '4rem',
              }}
            >
              {link.text}
            </Link>
          ))}
        </Col>
        <hr />
      </Modal.Body>
      <Modal.Footer>
        <Row
          style={{
            height: '7vh',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              background: 'red',
              color: 'white',
              cursor: 'pointer',
              margin: '0 1rem 0 0',
              padding: '.75rem',
              width: '35%',
              borderRadius: '10px',
              fontSize: '3rem',
            }}
          >
            Close
          </Button>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default Menu;
