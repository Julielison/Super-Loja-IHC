import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#cards">Produtos</a></li>
        <li><a href="#featured">Destaques</a></li>
        <li><a href="#support">Atendimento</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
