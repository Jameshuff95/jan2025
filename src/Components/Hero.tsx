import React from 'react';
import { Card, Col, Figure, FigureImage, FigureCaption } from 'react-bootstrap';
import Me from '../assets/me.png';

const Hero: React.FC = () => {
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
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '2rem',
                height: '100%',
              }}
            >
              <Card.Text style={{ width: '100%', textAlign: 'center' }}>
                <i className="bi bi-check" />
                Web Developer
              </Card.Text>

              <Card.Text style={{ width: '100%', textAlign: 'center' }}>
                <i className="bi bi-check" />
                Problem Solver
              </Card.Text>

              <Card.Text style={{ width: '100%', textAlign: 'center' }}>
                <i className="bi bi-check" />
                Student
              </Card.Text>
            </FigureCaption>
          </Col>
        </Figure>
      </Card.Body>
    </Card>
  );
};

export default Hero;
