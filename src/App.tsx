import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navigation from './Components/Nav.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Contact from './pages/Contact.tsx';

import './App.css';
import './index.css';

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: string = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const getPageName = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About Me';
      case '/contact':
        return 'Contact Me';
      case '/portfolio':
        return 'Portfolio';
      default:
        return '';
    }
  };

  // Use window.location.pathname to get the current path
  const currentPage = getPageName(window.location.pathname);

  const pages = [
    {
      id: '0',
      path: '/',
      element: <Home />,
      title: 'Home',
    },
    {
      id: '1',
      path: '/about',
      element: <About />,
      title: 'About Me',
    },
    {
      id: '2',
      path: '/contact',
      element: <Contact />,
      title: 'Contact Me',
    },
    {
      id: '3',
      path: '/portfolio',
      element: <Portfolio />,
      title: 'My Portfolio',
    },
  ];

  const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
      />
      <Routes>
        {pages.map((page) => (
          <Route key={page.id} path={page.path} element={page.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
