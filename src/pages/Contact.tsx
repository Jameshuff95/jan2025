import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer';

const Contact: React.FC = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <>
      <Container>
        <Card
          style={{
            margin: '0 auto',
            height: '75vh',
          }}
        >
          <Card.Subtitle
            style={{ height: '20%', display: 'flex', alignItems: 'center' }}
          >
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
              height: '80%',
            }}
          >
            <Form.Group
              controlId="name"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <Form.Control
                type="text"
                placeholder="First Name"
                maxLength={25}
                style={{
                  borderRadius: '12.5px',
                  height: '4rem',
                  padding: '2%',
                  fontSize: '1.75rem',
                }}
              />
              <Form.Control
                type="text"
                placeholder="Last Name"
                maxLength={25}
                style={{
                  borderRadius: '12.5px',
                  height: '4rem',
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
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
