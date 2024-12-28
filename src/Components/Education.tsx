import React from 'react';
import { Card, Col } from 'react-bootstrap';
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
    <>
      <Col style={{ gap: '1rem' }}>
        {schools.map((school) => (
          <Card key={school.id} style={{ textAlign: 'left' }}>
            <Card.Text>{school.degree}</Card.Text>
            <Card.Text>{school.name}</Card.Text>
            <Card.Text>
              {school.start} - {school.end}
            </Card.Text>
          </Card>
        ))}
      </Col>
    </>
  );
};

export default Education;
