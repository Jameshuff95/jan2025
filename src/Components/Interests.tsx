import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

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
    <Card>
      <Card.Subtitle style={{ color: 'nav-text' }}>Interests</Card.Subtitle>
      <Carousel>
        {interests.map((interest) => (
          <Carousel.Item key={interest.id}>
            <Card.Subtitle>{interest.title}</Card.Subtitle>
            <Card.Text style={{ textAlign: 'left', minHeight: '15rem' }}>
              {interest.description}
            </Card.Text>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default Interests;
