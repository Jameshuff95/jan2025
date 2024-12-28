import React from 'react';
import { Card } from 'react-bootstrap';

import '../App.css';
import '../index.css';

const Intro: React.FC = () => {
  return (
    <Card>
      <Card.Title>
        Driven by Curiosity
        <br />
        Empowered by MERN:
      </Card.Title>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Text>
          I have a strong focus on the MERN stack (MongoDB, Express.js, React,
          Node.js).
        </Card.Text>
        <Card.Text>
          I thrive in environments where creativity and problem-solving are at
          the forefront, and I'm eager to contribute to innovative teams and
          projects.
        </Card.Text>
        <Card.Text>Let's create something amazing together!</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Intro;
