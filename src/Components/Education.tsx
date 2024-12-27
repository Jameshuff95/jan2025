import React from 'react';
import { Card } from 'react-bootstrap';
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
      {schools.map((school) => (
        <Card key={school.id}>
          <Card.Title>{school.degree}</Card.Title>
          <Card.Text>{school.name}</Card.Text>
          <Card.Text>
            {school.start} - {school.end}
          </Card.Text>
        </Card>
      ))}
    </>
  );
};

export default Education;
