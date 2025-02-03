import React from 'react';
import emailIcon from '@assets/icons/email.svg';
import yt from '@assets/icons/yt.svg';
import ig from '@assets/icons/insta.svg';
import send from '@assets/icons/send.svg';
import face from '@assets/icons/facebook.svg';
import x from '@assets/icons/x-2.svg';







const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <section className='footer-main'>
        <div className='loja block-footer'>
          <div className='text-footer title-footer'>SOBRE A LOJA</div>
          <div>
            <p>Quem somos</p>
            <p>Trabalhe conosco</p>
            <p>Política de privacidade</p>
            <p>Termos de uso</p>
          </div>
        </div>
        <div className='container block-footer'>
          <div className='atendimento title-footer'>ATENDIMENTO</div>
          <div className='sub-container'> 
            <div className='atendimentos'>
              <p>Trocas de devoluções</p>
              <p>Rastreamento de pedido</p>
              <p>Central de ajuda (FAQ)</p>
              <p>Fale conosco</p>
            </div>
            <div className='horarios'>
              <p>Horário de atendimento:</p>
              <p>2ª a 6ª - 08:00 às 20:00</p>
              <p>Sábado - 09:00 às 15:00</p>
              <p>Horário de Brasília</p>
            </div>
          </div>
        </div>
        <div className='block-footer'>
          <div className='title-footer'>PAGAMENTOS E SEGURANÇA</div>
          <div>
            <p>Métodos de pagamento</p>
            <p>Certificados de Segurança</p>
          </div>
        </div>
        <div className='block-footer'>
          <div className='title-footer'>NOSSAS REDES</div>
          <div className='redes'>
            <img src={yt} alt="youtube" className='footer-icon'/>
            <img src={ig} alt="instagram" className='footer-icon'/>
            <img src={x} alt="x" className='footer-icon'/>
            <img src={face} alt="facebook" className='footer-icon'/>
          </div>
        </div>
      </section>
      <div className='email'>

        <div className='email-text'>
          <img src={emailIcon} alt="email" className='email-icon footer-icon'/>
          <p>Receba ofertas por e-mail</p>
        </div>
        <input type="text" placeholder='Digite seu nome...'/>
        <input type="text" placeholder='email@exemplo.com'/>
        <button className='button-email'>
          Receber Novidades
          <img src="" alt="" />
        </button>

      </div>
      <p className='copy'>&copy; {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
