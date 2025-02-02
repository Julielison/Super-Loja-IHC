import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Section id="secao1" title="Seção 1" content="Conteúdo da primeira seção." />
        <Section id="secao2" title="Seção 2" content="Conteúdo da segunda seção." />
        <Section id="secao3" title="Seção 3" content="Conteúdo da terceira seção." />
      </main>
      <Footer />
    </div>
  );
};

export default App;
