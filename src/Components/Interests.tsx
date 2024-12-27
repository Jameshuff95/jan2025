import React from 'react';
import { Card } from 'react-bootstrap';

interface Interest {
  id: number;
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    id: 1,
    title: 'Hobby 1',
    description: 'Hobby Description 1',
  },
  {
    id: 2,
    title: 'Hobby 2',
    description: 'Hobby Description 2',
  },
  {
    id: 3,
    title: 'Hobby 3',
    description: 'Hobby Description 3',
  },
];

const Interests: React.FC = () => {
  return (
    <>
      {interests.map((interest) => (
        <Card key={interest.id}>
          <Card.Subtitle>{interest.title}</Card.Subtitle>
          <Card.Text style={{ textAlign: 'left' }}>
            {interest.description}
          </Card.Text>
        </Card>
      ))}
    </>
  );
};

export default Interests;
