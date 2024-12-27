import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Cert1 from '../assets/cert1.png';
import Cert2 from '../assets/cert2.png';
import Cert3 from '../assets/cert3.png';

interface Certification {
  id: number;
  title: string;
  img: string;
  alt: string;
}
const certifications: Certification[] = [
  {
    id: 1,
    title: 'certification 1',
    img: Cert1,
    alt: 'image alt 1',
  },
  {
    id: 2,
    title: 'certification 2',
    img: Cert2,
    alt: 'image alt 2',
  },
  {
    id: 3,
    title: 'certification 3',
    img: Cert3,
    alt: 'image alt 3',
  },
];
const Certifications: React.FC = () => {
  return (
    <>
      {certifications.map((certification) => (
        <Card key={certification.id}>
          <Col style={{ alignItems: 'center', gap: '1rem' }}>
            <Card.Subtitle>{certification.title}</Card.Subtitle>
            <Card.Img
              src={certification.img}
              alt={certification.alt}
              style={{ width: '90%', height: '20rem', borderRadius: '12.5px' }}
            />
            <Button
              style={{
                background: 'var(--card-text)',
                color: 'var(--background)',
                cursor: 'pointer',
                width: '70%',
                borderRadius: '10px',
                fontSize: '2rem',
                padding: '1rem',
              }}
            >
              Click to view pdf
            </Button>
          </Col>
        </Card>
      ))}
    </>
  );
};

export default Certifications;
