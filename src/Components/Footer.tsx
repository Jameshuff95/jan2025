import React from 'react';
import { Card, Row } from 'react-bootstrap';

import '../index.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <Row id="footer">
      <Card.Text style={{ color: 'var(--nav-text' }}>
        &copy; 2025 James Huff. All Rights Reserved.
      </Card.Text>
    </Row>
  );
};

export default Footer;
