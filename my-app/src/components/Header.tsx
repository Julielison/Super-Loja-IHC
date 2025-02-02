import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li><a href="#secao1">Seção 1</a></li>
          <li><a href="#secao2">Seção 2</a></li>
          <li><a href="#secao3">Seção 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
