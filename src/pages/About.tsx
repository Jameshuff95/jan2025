import React from 'react';
import { Container, Card } from 'react-bootstrap';

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Achievements from '../Components/Achievements';
import Certifications from '../Components/Certifications';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Interests from '../Components/Interests';
import Footer from '../Components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Container style={{ textAlign: 'center' }}>
        <Achievements />
        <Education />
        <Certifications />
        <Experience />
        <Interests />
      </Container>
      <Footer />
    </>
  );
};

export default About;
