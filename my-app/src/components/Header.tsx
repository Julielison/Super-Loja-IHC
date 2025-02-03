import React from 'react';
import Services from './Services';

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="" className="logo-link">SUPERLOJA</a>
      <Services />
    </header>
  );
};

export default Header;
