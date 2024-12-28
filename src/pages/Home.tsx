import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer';
import Hero from '../Components/Hero.tsx';
import Mission from '../Components/Mission.tsx';
import HomeSocials from '../Components/HomeSocials.tsx';
import Intro from '../Components/Intro.tsx';
import FeaturedWork from '../Components/FeaturedWork.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Hero />
        <Intro />
        <Mission />
        <FeaturedWork />
        <HomeSocials />
      </Container>
      <Footer />
    </>
  );
};

export default Home;

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
