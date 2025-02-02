import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="" className="logo-link">SUPERLOJA</a>
      <Navigation />
    </header>
  );
};

export default Header;
