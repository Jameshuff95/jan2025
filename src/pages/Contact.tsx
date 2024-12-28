import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';

import '../App.css';
import '../index.css';

import Footer from '../Components/Footer';

const Contact: React.FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container>
      <Card>
        <Card.Body
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Card.Title>Contact</Card.Title>
          <Card.Title className="container-title"></Card.Title>
          <Card.Subtitle>
            Send me an email and lets build something great! 👇
          </Card.Subtitle>
          <Form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              borderRadius: '5px',
              gap: '1rem',
              height: '60vh',
            }}
          >
            <Form.Group
              controlId="name"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                maxLength={25}
                style={{
                  borderRadius: '12.5px',
                  height: '2rem',
                  padding: '2%',
                  width: '45%',
                  fontSize: '1.75rem',
                }}
              />

              <Form.Control
                type="text"
                placeholder="Last Name"
                maxLength={25}
                style={{
                  width: '45%',
                  borderRadius: '12.5px',
                  height: '2rem',
                  padding: '2%',
                  fontSize: '1.75rem',
                }}
              />
            </Form.Group>

            <Form.Control
              id="message-input"
              as="textarea"
              maxLength={250}
              placeholder="250 character maximum..."
              style={{
                borderRadius: '12.5px',
                height: '20rem',
                padding: '2%',
                fontSize: '1.75rem',
              }}
            ></Form.Control>
            <Button
              type="submit"
              style={{
                width: '100%',
                height: '8rem',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12.5px',
                fontSize: '3.75rem',
                background: 'var(--card-text)',
                color: 'var(--background)',
              }}
            >
              Send Email
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Footer />
    </Container>
  );
};

export default Contact;
