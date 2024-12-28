import React from 'react';
import { Card, Col, Figure, FigureImage, FigureCaption } from 'react-bootstrap';
import Me from '../assets/me.png';
import DownloadResume from './DownloadResume';

const Hero: React.FC = () => {
  return (
    <Card>
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
                  marginTop: '-10%',
                }}
              />
            </Col>
          </Figure>
          <FigureCaption>
            <Card.Text
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              I am a web developer inclined to prioritize functionality and
              simplicity, as they offer a more straightforward and effective
              approach.
            </Card.Text>
            <DownloadResume />
          </FigureCaption>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Hero;
