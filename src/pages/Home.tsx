import React from 'react';
import { Card, Container } from 'react-bootstrap';

import '../App.css';
import '../index.css';

const Home: React.FC = () => {
  return (
    <Container>
      <Card>Home</Card>
      <Card>Home 2</Card>
      <Card>Home 3</Card>
      <Card>Home 4</Card>
      <Card>Home 5</Card>
    </Container>
  );
};

export default Home;
