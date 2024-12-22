import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    // prettier-ignore
    <Container id="footer">
      <Row>
        <Card.Title style={{ color: 'var(--nav-color' }}>Quick Links</Card.Title>
      </Row>
      <Row style={{ justifyContent: 'space-evenly' }}>
        <i className="bi bi-github" />
        <i className="bi bi-stack-overflow" />
        <i className="bi bi-linkedin" />
        <i className="bi bi-envelope" />
      </Row>
      <Row id="footer-links-container">
        <Col style={{width: '30%', gap: '1rem'}}>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
        </Col>
        <Col style={{width: '30%', gap: '1rem'}}>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
        </Col>
        <Col style={{width: '30%', gap: '1rem'}}>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <small>&copy; 2024 Your Company. All Rights Reserved.</small>
      </Row>
    </Container>
  );
};

export default Footer;
