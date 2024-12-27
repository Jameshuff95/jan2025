import React, { useState } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import '../App.css';
import '../index.css';

import Image1 from '../assets/portfolio-image-1.png';
import Image2 from '../assets/portfolio-image-2.png';
import Image3 from '../assets/portfolio-image-3.png';

import Footer from '../Components/Footer';

interface Option {
  id: number;
  option: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  type: string; // Corrected 'value' to 'type'
  img: string;
  alt: string;
  technology: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const options: Option[] = [
    {
      id: 1,
      value: 'all',
      option: 'All',
    },
    {
      id: 2,
      value: 'type1',
      option: 'Type 1',
    },
    {
      id: 3,
      value: 'type2',
      option: 'Type 2',
    },
    {
      id: 4,
      value: 'type3',
      option: 'Type 3',
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Title 1',
      type: 'type1',
      img: Image1,
      alt: 'alt 1',
      technology: 'Technology a, Technology b, Technology c',
      description: 'This is description #1.',
    },
    {
      id: 2,
      title: 'Title 2',
      type: 'type2',
      img: Image2,
      alt: 'alt 2',
      technology: 'Technology a, Technology b, Technology c',
      description: 'This is description #2.',
    },
    {
      id: 3,
      title: 'Title 3',
      type: 'type3',
      img: Image3,
      alt: 'alt 3',
      technology: 'Technology a, Technology b, Technology c',
      description: 'This is description #3.',
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === 'all') {
      // Show all projects
      setFilteredProjects(projects);
    } else {
      // Filter projects based on selected category
      const filtered = projects.filter((project) => {
        return project.type === selectedCategory;
      });
      setFilteredProjects(filtered);
    }
  };

  return (
    <Container>
      <Row
        style={{
          width: '95%',
          margin: '0 auto',
          justifyContent: 'space-evenly',
        }}
      >
        <Card.Text style={{ color: 'var(--nav-text)', fontSize: '2.5rem' }}>
          Filter:
        </Card.Text>
        <select
          style={{
            width: '75%',
            fontSize: '2.5rem',
            outline: '0',
            borderRadius: '10px',
            padding: '1%',
            background: 'var(--background)',
            color: 'var(--card-text)',
          }}
          onChange={filter}
        >
          {options.map((option) => (
            <option
              key={option.id}
              value={option.value}
              style={{
                fontSize: '3.5rem',
                width: '3rem',
              }}
            >
              {option.option}
            </option>
          ))}
        </select>
      </Row>
      {filteredProjects.map((project) => (
        <Card key={project.id}>
          <Col style={{ alignItems: 'center', gap: '1rem' }}>
            <Card.Subtitle>{project.title}</Card.Subtitle>
            <Card.Img
              src={project.img}
              alt={project.alt}
              style={{ width: '75%' }}
            />
            <Card.Text style={{ textAlign: 'center' }}>
              {project.technology}
            </Card.Text>
            <Card.Text
              style={{
                marginTop: '0',
                textAlign: 'left',
                width: '100%',
                height: '5rem',
              }}
            >
              {project.description}
            </Card.Text>
          </Col>
        </Card>
      ))}
      <Footer />
    </Container>
  );
};

export default Portfolio;
