/*
import React from 'react';
import { Button, Card, Carousel, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const FeaturedWork: React.FC = () => {
  const featuredProjects = [
    // Tech 1
    {
      title: 'Project 1',
      technology: 'Tech 1',
      img: Project1,
      imgAlt: 'image alt 1',
      description: 'Description 1',
    },
    // Tech 2
    {
      title: 'Project 2',
      technology: 'Tech 2',
      img: Project2,
      imgAlt: 'image alt 2',
      description: 'Description 2',
    },
    // Tech 3
    {
      title: 'Project 3',
      technology: 'Tech 3',
      img: Project3,
      imgAlt: 'image alt 3',
      description: 'Description 3',
    },
  ];

  const [project, setProject] = useState(0);

  useEffect(() => {
    // this sets the interval for each project to be displayed
    const interval = setInterval(() => {
      setProject((prevProject) => (prevProject + 1) % featuredProjects.length);
    }, 5000);
    // reset the timer
    return () => clearInterval(interval);
  }, []);

  return (
    
  );
};

export default FeaturedWork;
*/
