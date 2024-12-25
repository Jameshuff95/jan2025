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
      <Modal.Body>
        <Col
          style={{
            height: '85vh',
            justifyContent: 'space-between',
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
                height: '15%',
                padding: '2% 5%',
                fontSize: '4rem',
              }}
            >
              {link.text}
            </Link>
          ))}
          <hr />
          <Row
            style={{
              justifyContent: 'flex-end',
              height: '15vh',
            }}
          >
            <Button
              variant="danger"
              onClick={handleClose}
              style={{
                background: 'red',
                color: 'white',
                cursor: 'pointer',
                margin: '0 3rem 2rem 0',
                padding: '2rem .75rem',
                width: '40%',
                border: '1px solid var(--card-text)',
                borderRadius: '10px',
                fontSize: '3.5rem',
              }}
            >
              Close
            </Button>
          </Row>
        </Col>
      </Modal.Body>
    </Modal>
  );
};

export default Menu;
