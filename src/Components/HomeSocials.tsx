import React from 'react';
import { Card, Col } from 'react-bootstrap';

import '../App.css';
import '../index.css';

interface Link {
  id: number;
  name: string;
  icon: string;
  href: string;
  color: string;
  legend: string;
}

const HomeSocials: React.FC = () => {
  const links: Link[] = [
    // Github
    {
      id: 1,
      name: 'github',
      icon: 'bi bi-github',
      href: '#',
      color: 'var(--card-text)',
      legend: 'Github',
    },
    // LinkedIn
    {
      id: 2,
      name: 'linkedin',
      icon: 'bi bi-linkedin',
      href: '#',
      color: 'navy',
      legend: 'LinkedIn',
    },
    // Reddit
    {
      id: 3,
      name: 'reddit',
      icon: 'bi bi-reddit',
      href: '#',
      color: 'orangered',
      legend: 'Reddit',
    },
    // Stack Overflow
    {
      id: 4,
      name: 'stack-overflow',
      icon: 'bi bi-stack-overflow',
      href: '#',
      color: 'orange',
      legend: 'Stack Overflow',
    },
    // X
    {
      id: 5,
      name: 'x',
      icon: 'bi bi-twitter-x',
      href: '#',
      color: 'var(--card-text)',
      legend: 'X',
    },
    // Instagram
    {
      id: 6,
      name: 'instagram',
      icon: 'bi bi-instagram',
      href: '#',
      color: 'pink',
      legend: 'Instagram',
    },
  ];
  return (
    <Card>
      <Card.Title>Visit My Socials!</Card.Title>
      <Card.Body
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          padding: '1rem',
        }}
      >
        {links.map((link) => (
          <Col key={link.id}>
            <Col
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '100%',
                gap: '1rem',
                margin: '1rem',
                padding: '1rem 0',
              }}
            >
              <i
                className={link.icon}
                style={{ color: link.color, fontSize: '4rem' }}
              />
              <Card.Text style={{ padding: '0', margin: '0' }}>
                {link.legend}
              </Card.Text>
            </Col>
          </Col>
        ))}
      </Card.Body>
    </Card>
  );
};

export default HomeSocials;
