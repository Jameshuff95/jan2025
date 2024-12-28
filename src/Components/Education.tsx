import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
const Education: React.FC = () => {
  const schools = [
    {
      id: 1,
      name: 'Capella University - Online',
      degree: 'B.S. Web Development',
      start: 'start 1',
      end: 'End 1',
    },
    {
      id: 2,
      name: 'Southern New Hampshire University - Online',
      degree: 'B.S. Software Engineering',
      start: 'start 2',
      end: 'End 2',
    },
  ];
  return (
    <Card style={{ minHeight: '25rem' }}>
      <Card.Title style={{ color: 'nav-text' }}>Education</Card.Title>
      <Carousel>
        {schools.map((school) => (
          <Carousel.Item key={school.id}>
            <Card.Text>{school.degree}</Card.Text>
            <Card.Text>{school.name}</Card.Text>
            <Card.Text>
              {school.start} - {school.end}
            </Card.Text>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default Education;
