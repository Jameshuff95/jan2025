import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <Container id="footer" style={{ paddingTop: '2%' }}>
      <Col style={{ height: '100%', width: '100%' }}>
        <Col style={{ width: '100%', height: '100%' }}>
          <Card.Title style={{ textAlign: 'center' }}>Quick Links</Card.Title>
          <Row style={{ height: '70%' }}>
            <ListGroup
              style={{
                height: '100%',
                display: 'flex',
              }}
            >
              <ListGroupItem
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '60%',
                  justifyContent: 'space-evenly',
                  padding: '0 5%',
                }}
              >
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/about" className="footer-link">
                  About
                </Link>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
                <Link to="/portfolio" className="footer-link">
                  Portfolio
                </Link>
              </ListGroupItem>
              <Col
                style={{
                  width: '40%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <i className="bi bi-github" />
                <i className="bi bi-stack-overflow" />
                <i className="bi bi-linkedin" />
                <i className="bi bi-envelope" />
              </Col>
            </ListGroup>
          </Row>

          <Row
            style={{
              height: '20%',
              textAlign: 'center',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <small>&copy; 2024 Your Company. All Rights Reserved.</small>
          </Row>
        </Col>
      </Col>
    </Container>
  );
};

export default Footer;
