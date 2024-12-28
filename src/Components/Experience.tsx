import React from 'react';
import { Card } from 'react-bootstrap';
const Experience: React.FC = () => {
  return (
    <Card>
      <Card.Title style={{ color: 'nav-text' }}>Experience</Card.Title>

      <Card.Body className="d-flex flex-column" style={{ gap: '1rem' }}>
        <Card.Text>
          With over 2 years of experience in the web development industry, I
          have developed a robust skill set and a keen eye for detail.
        </Card.Text>
        <Card.Text>
          I have had the privilege of working with diverse clients and on
          various projects, from [mention a specific type of project, e.g., web
          applications, graphic design campaigns, etc.], to [another type of
          project, e.g., mobile apps, branding initiatives, etc.].
        </Card.Text>
        <Card.Text>
          My expertise lies in MERN stack programming, and I am passionate about
          leveraging these skills to create innovative solutions that address
          client needs and exceed expectations.
        </Card.Text>
        <Card.Text>
          I thrive in dynamic environments and enjoy collaborating with
          cross-functional teams to bring ideas to life.
        </Card.Text>
        <Card.Text>
          My commitment to excellence and my drive for innovation have been the
          cornerstone of my professional journey.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Experience;
