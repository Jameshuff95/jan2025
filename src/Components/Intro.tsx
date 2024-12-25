import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Intro: React.FC = () => {
  return (
    <Col>
      <Card.Title>
        Driven by Curiosity
        <br />
        Empowered by MERN:
      </Card.Title>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Text>
          Hello! I'm James, a passionate self-taught web developer with a strong
          focus on the MERN stack (MongoDB, Express.js, React, Node.js).
        </Card.Text>
        <Card.Text>
          My journey into the world of web development started with a thirst for
          knowledge and an insatiable curiosity.
        </Card.Text>
        <Card.Text>
          Through rigorous self-study and hands-on practice, I have honed my
          skills in building dynamic, responsive web applications.
        </Card.Text>
        <Card.Text>
          I thrive in environments where creativity and problem-solving are at
          the forefront, and I'm eager to contribute to innovative teams and
          projects.
        </Card.Text>
        <Card.Text>Let's create something amazing together!</Card.Text>
      </Card.Body>
    </Col>
  );
};

export default Intro;
