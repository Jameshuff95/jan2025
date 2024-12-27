import React from 'react';
import { Card, Row } from 'react-bootstrap';

import '../index.css';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <Row
      id="footer"
      style={{
        height: '10rem',
        color: 'var(--nav-text)',
      }}
    >
      <Row
        style={{
          justifyContent: 'space-evenly',
          height: '20%',
          fontSize: '3.5rem',
        }}
      >
        <i className="bi bi-github" style={{ color: '#fff' }} />
        <i className="bi bi-stack-overflow" style={{ color: 'orange' }} />
        <i className="bi bi-linkedin" style={{ color: 'blue' }} />
        <i className="bi bi-envelope" style={{ color: 'red' }} />
      </Row>
      <Row
        style={{ justifyContent: 'center', height: '10%', fontSize: '2rem' }}
      >
        <Card.Text style={{ textAlign: 'center', color: 'var(--nav-bg' }}>
          &copy; 2024 Your Company. All Rights Reserved.
        </Card.Text>
      </Row>
    </Row>
  );
};

export default Footer;
