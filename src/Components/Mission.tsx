import React from 'react';
import { Card } from 'react-bootstrap';

import '../App.css';
import '../index.css';

const Mission: React.FC = () => {
  return (
    <Card>
      <Card.Title className="container-title">My Mission</Card.Title>
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Text>
          My mission is to create innovative and impactful solutions that blend
          creativity with technology.
        </Card.Text>
        <Card.Text>
          I am dedicated to leveraging my skills and experience in web
          development to deliver high-quality, user-centric projects that exceed
          expectations.
        </Card.Text>
        <Card.Text>
          I believe in continuous learning and adaptability, striving to push
          the boundaries of what's possible while maintaining a commitment to
          excellence and integrity.
        </Card.Text>
        <Card.Text>
          My goal is to collaborate with like-minded individuals and
          organizations to bring visionary ideas to life, making a positive and
          meaningful difference in the digital landscape.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Mission;
