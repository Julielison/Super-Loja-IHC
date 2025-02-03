import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className='footer-main'>
      <div>SOBRE A LOJA</div>
      <div>ATENDIMENTO</div>
      <div>PAGAMENTOS E SEGURANÇA</div>
      <div>ACOMPANHE NOSSO TRABALHO</div>
      </section>
      <p>&copy; {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
