import React from 'react';
import { Card, Col, Figure, FigureImage, FigureCaption } from 'react-bootstrap';
import Me from '../assets/me.png';

const Hero: React.FC = () => {
  return (
    <Card>
      <Card.Body className="flex-col-align-center">
        <Card.Title>Hello, my name is James.</Card.Title>
        <Col>
          <Figure style={{ marginRight: '2.5rem' }}>
            <Col className="flex-col-align-center">
              <FigureImage
                src={Me}
                alt="A picture of James Huff"
                style={{
                  borderRadius: '50%',
                  width: '75%',
                }}
              />
            </Col>
          </Figure>
          <FigureCaption>
            <Card.Text style={{ textAlign: 'center' }}>
              I am a web developer inclined to prioritize functionality and
              simplicity, as they offer a more straightforward and effective
              approach.
            </Card.Text>
          </FigureCaption>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Hero;
