import React from 'react';
import { Card, Col, Figure, FigureImage, FigureCaption } from 'react-bootstrap';
import Me from '../assets/me.png';
import Intro from './Intro';

interface Title {
  id: number;
  text: string;
}

const Hero: React.FC = () => {
  const titles: Title[] = [
    {
      id: 1,
      text: 'Web Developer',
    },
    {
      id: 2,
      text: 'Problem Solver',
    },
    {
      id: 3,
      text: 'Student',
    },
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title>Hello, my name is James.</Card.Title>
        <Figure
          style={{
            margin: '0',
            display: 'flex',
            width: '100%',
            height: '100%',
          }}
        >
          <Col style={{ justifyContent: 'center', width: '50%' }}>
            <FigureImage
              src={Me}
              alt="A picture of James Huff"
              style={{
                borderRadius: '50%',
                marginTop: '-25%',
                padding: '2%',
              }}
            />
          </Col>

          <Col style={{ width: '50%' }}>
            <FigureCaption
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                fontSize: '2rem',
                height: '100%',
              }}
            >
              {titles.map((title) => (
                <Card.Text
                  key={title.id}
                  style={{
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <i className="bi bi-check" />
                  {title.text}
                </Card.Text>
              ))}
            </FigureCaption>
          </Col>
        </Figure>
        <Intro />
      </Card.Body>
    </Card>
  );
};

export default Hero;
