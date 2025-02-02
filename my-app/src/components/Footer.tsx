import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
