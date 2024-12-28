import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

import '../index.css';
import '../App.css';
interface Achievement {
  id: number;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Developed a Personal Portfolio Website',
    description:
      'Created a professional and visually appealing personal portfolio website using HTML, CSS, and JavaScript. Showcased various projects, skills, and experience, effectively demonstrating my capabilities to potential employers.',
  },
  {
    id: 2,
    title: 'Managing GitHub Repositories',
    description:
      'Maintained several active repositories on GitHub, contributing to open-source projects and collaborating with other developers. Implemented version control practices, resolved issues, and regularly updated documentation to ensure project clarity and continuity.',
  },
  {
    id: 3,
    title: 'Obtained Certifications',
    description:
      'Earned industry-recognized certifications from platforms like Coursera and Udemy, covering front-end and back-end technologies. Demonstrated commitment to continuous learning and staying current with the latest web development trends and practices.',
  },
];

const Achievements: React.FC = () => {
  return (
    <Card style={{ height: '57vh' }}>
      <Card.Title>Achievements</Card.Title>
      <Carousel>
        {achievements.map((achievement) => (
          <Carousel.Item key={achievement.id} style={{}}>
            <Card.Subtitle>{achievement.title}</Card.Subtitle>
            <Card.Text style={{ padding: '1rem' }}>
              {achievement.description}
            </Card.Text>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  );
};

export default Achievements;
