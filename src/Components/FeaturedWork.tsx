import React from 'react';
import { Button, Card, Carousel, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const FeaturedWork: React.FC = () => {
  const featuredProjects = [
    // Tech 1
    {
      title: 'Project 1',
      technology: 'Tech 1',
      img: Project1,
      imgAlt: 'image alt 1',
      description: 'Description 1',
    },
    // Tech 2
    {
      title: 'Project 2',
      technology: 'Tech 2',
      img: Project2,
      imgAlt: 'image alt 2',
      description: 'Description 2',
    },
    // Tech 3
    {
      title: 'Project 3',
      technology: 'Tech 3',
      img: Project3,
      imgAlt: 'image alt 3',
      description: 'Description 3',
    },
  ];

  const [project, setProject] = useState(0);

  useEffect(() => {
    // this sets the interval for each project to be displayed
    const interval = setInterval(() => {
      setProject((prevProject) => (prevProject + 1) % featuredProjects.length);
    }, 5000);
    // reset the timer
    return () => clearInterval(interval);
  }, []);

  return (
    <Row>
      <Card>
        <Card.Title>
          Driven by Curiosity
          <br />
          Empowered by MERN:
        </Card.Title>
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Text>
            Hello! I'm James, a passionate self-taught web developer with a
            strong focus on the MERN stack (MongoDB, Express.js, React,
            Node.js).
          </Card.Text>
          <Card.Text>
            My journey into the world of web development started with a thirst
            for knowledge and an insatiable curiosity.
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
      </Card>
    </Row>
  );
};

export default FeaturedWork;
