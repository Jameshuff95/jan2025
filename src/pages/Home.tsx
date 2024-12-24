import React from 'react';
import {
  Card,
  Container,
  Col,
  Figure,
  FigureImage,
  FigureCaption,
} from 'react-bootstrap';
import '../App.css';
import '../index.css';
import Me from '../assets/me.png';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  /* 
  const phrases: { id: number; phrase: string }[] = [
    { id: 1, phrase: 'web developer' },
    { id: 2, phrase: 'student' },
    { id: 3, phrase: 'problem solver' },
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0].phrase);
  const [currentLetter, setCurrentLetter] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => {
        const currentIndex = phrases.findIndex((p)=> p.phrase === prevPhrase);
        const nextIndex = (currentIndex + 1) % phrases.length;

      })
    }, 2000)
  }, [])
    */
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            Hello, my name is James.
          </Card.Title>
          <Figure
            style={{
              margin: '0',
              border: '1px solid blue',
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
            <Col style={{ width: '50%', border: '1px solid white' }}>
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
      <Footer />
    </Container>
  );
};

export default Home;
