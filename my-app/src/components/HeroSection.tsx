import React from 'react';
import logo from '@assets/images/camera-home.png';
import Button from './Button';  // Importando o componente Button

const HeroSection: React.FC = () => {
  // Função que será chamada quando o botão for clicado
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <section id="hero-section" className="hero-section">
      <div className="content">
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Diam enim diam quisque at.</p>
        
        {/* Substituindo o botão tradicional pelo componente Button */}
        <Button text="Confira!" onClick={handleClick} className="button-more" />
      </div>
      <div className="image">
        <img src={logo} alt="Produto em destaque" />
      </div>
    </section>
  );
};

export default HeroSection;
