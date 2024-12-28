import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';

import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

interface Project {
  id: number;
  title: string;
  technology: string;
  img: string;
  imgAlt: string;
  description: string;
}

const FeaturedWork: React.FC = () => {
  const featuredProjects: Project[] = [
    // Tech 1
    {
      id: 1,
      title: 'Project 1',
      technology: 'tech a, tech b, tech c',
      img: Project1,
      imgAlt: 'image alt 1',
      description: 'This is a longer example description for better sizing.',
    },
    // Tech 2
    {
      id: 2,
      title: 'Project 2',
      technology: 'tech a, tech b, tech c',
      img: Project2,
      imgAlt: 'image alt 2',
      description: 'This is a longer example description for better sizing.',
    },
    // Tech 3
    {
      id: 3,
      title: 'Project 3',
      technology: 'tech a, tech b, tech c',
      img: Project3,
      imgAlt: 'image alt 3',
      description: 'This is a longer example description for better sizing.',
    },
  ];

  return (
    <Card style={{ padding: '0' }}>
      <Card.Title>Featured Work</Card.Title>
      <Carousel>
        {featuredProjects.map((project) => (
          <Carousel.Item key={project.id}>
            <Card.Img src={project.img} alt={project.imgAlt} />
            <Card.Title>{project.title}</Card.Title>
            <Card.Subtitle>{project.technology}</Card.Subtitle>
            <Card.Text style={{ minHeight: '10rem' }}>
              {project.description}
            </Card.Text>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default FeaturedWork;
