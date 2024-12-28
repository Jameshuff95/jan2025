import React from 'react';
import { Container, Card } from 'react-bootstrap';

import '../App.css';
import '../index.css';

import Achievements from '../Components/Achievements';
import Certifications from '../Components/Certifications';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Interests from '../Components/Interests';
import Footer from '../Components/Footer';

const About: React.FC = () => {
  return (
    <Container style={{ fontSize: '2rem', textAlign: 'center' }}>
      <Card.Title>Achievments</Card.Title>
      <Achievements />
      <Card.Title className="card-title-alt">Education</Card.Title>
      <Education />
      <Card.Title className="card-title-alt">Certifications</Card.Title>
      <Certifications />
      <Card.Title className="card-title-alt">Experience</Card.Title>
      <Experience />
      <Card.Title className="card-title-alt">Interests</Card.Title>
      <Interests />
      <Footer />
    </Container>
  );
};

export default About;
