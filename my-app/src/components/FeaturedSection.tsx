import React from 'react';
import ceu_azul from '@assets/images/ceu-azul.png';

const FeaturedSection: React.FC = () => {
  return (
    <section id="featured" className="featured-section">
      <div className="ceu-azul">
        <img src={ceu_azul} alt="ceu azul" />
      </div>
      <div className="content2">
          <h1>lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Diam enim diam quisque at.</p>

      </div>
    </section>
  );
};

export default FeaturedSection;
