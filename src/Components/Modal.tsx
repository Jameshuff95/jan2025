import React from 'react';
import { Modal, Col, Row, NavLink, Button } from 'react-bootstrap';

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
          }}
        >
          <Modal.Title>Menu</Modal.Title>
        </Row>
      </Modal.Header>
      <Modal.Body>
        <Col style={{ height: '75vh' }}>
          {links.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              style={{
                justifyContent: 'flex-start',
              }}
              className="font-3rem p-lr-1rem"
            >
              {link.text}
            </NavLink>
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
              padding: '.5rem',
              width: '25%',
              borderRadius: '10px',
              fontSize: '2rem',
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
