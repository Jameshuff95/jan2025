import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    // prettier-ignore
    <Container id="footer">
      <Row style={{ justifyContent: 'space-evenly', height: '20%' }}>
        <i className="bi bi-github" />
        <i className="bi bi-stack-overflow" />
        <i className="bi bi-linkedin" />
        <i className="bi bi-envelope" />
      </Row>
      <Row id="footer-links-container" style={{ height: '70%' }}>
        <Col className="footer-col">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
        </Col>
        <Col className="footer-col">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
        </Col>
        <Col className="footer-col">
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', height: '10%' }}>
        <small>&copy; 2024 Your Company. All Rights Reserved.</small>
      </Row>
    </Container>
  );
};

export default Footer;
