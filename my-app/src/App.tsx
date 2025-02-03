import React from 'react';
import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import './styles.css';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
