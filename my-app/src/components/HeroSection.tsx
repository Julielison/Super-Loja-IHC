import React from 'react';
import logo from '@assets/images/camera-home.png';

const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="content">
        <h2>Lorem ipsum dolor</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Diam enim diam quisque at.</p>
        <button>Lorem</button>
      </div>
      <div className="image">
        <img src={logo} alt="Produto em destaque" />
      </div>
    </section>
  );
};

export default HeroSection;
