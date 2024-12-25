import React from 'react';
import { Card, Container } from 'react-bootstrap';

import '../App.css';
import '../index.css';

import Footer from '../Components/Footer';

const Contact: React.FC = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
};

export default Contact;
