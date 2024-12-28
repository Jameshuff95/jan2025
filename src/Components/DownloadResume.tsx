import React from 'react';
import { Button } from 'react-bootstrap';
import resumeFile from '../assets/Resume2025.pdf';

const DownloadResume: React.FC = () => {
  return (
    <>
      <Button
        variant="primary"
        style={{
          background: 'var(--card-text)',
          color: 'var(--background)',
          cursor: 'pointer',
          width: '90%',
          borderRadius: '12.5px',
          fontSize: '3rem',
          padding: '1rem',
          margin: '2rem',
        }}
      >
        <a
          href={resumeFile}
          download="Resume2025.pdf"
          style={{
            textDecoration: 'none',
            color: 'var(--background)',
          }}
        >
          Download Resume
        </a>
      </Button>
    </>
  );
};

export default DownloadResume;
