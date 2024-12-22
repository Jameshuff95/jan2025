import React from 'react';
import { useState, useEffect } from 'react';
import { Nav, NavLink } from 'react-bootstrap';

const Navigation: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');

  const toggleTheme = () => {
    const newTheme: string = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    console.log(theme);
  };

  useEffect(() => {
    const themeBtn = document.getElementById('theme');
    themeBtn?.addEventListener('click', toggleTheme);
    return () => {
      themeBtn?.removeEventListener('click', toggleTheme);
    };
  }, [theme]);

  return (
    <Nav id="nav">
      <i
        id="theme"
        className={theme === 'dark' ? 'bi bi-moon' : 'bi bi-sun-fill'}
      />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
    </Nav>
  );
};

export default Navigation;
