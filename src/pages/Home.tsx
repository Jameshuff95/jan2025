import React from 'react';
import { Card, Container, Row, Figure, FigureImage } from 'react-bootstrap';
import '../App.css';
import '../index.css';
import Me from '../assets/me.png';

import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row>
            <Figure>
              <FigureImage
                style={{
                  width: '100%',
                  borderRadius: '50%',
                }}
                src={Me}
                alt="A picture of James Huff"
              />
            </Figure>
          </Row>
          <Card.Title>Hello, my name is James.</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
            I am a passionate web developer with a background in retail and
            sales.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body></Card.Body>
      </Card>
      <Footer />
    </Container>
  );
};

export default Home;
