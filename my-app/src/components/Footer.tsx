import React, { useState } from 'react';
import emailIcon from '@assets/icons/email.svg';
import yt from '@assets/icons/yt.svg';
import ig from '@assets/icons/insta.svg';
import send from '@assets/icons/send.svg';
import face from '@assets/icons/facebook.svg';
import x from '@assets/icons/x-2.svg';
import Alert from '@mui/material/Alert';



const Footer: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSendClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000); // Esconde o alert após 4 segundos
  };

  
  return (
    <footer className="footer">
      <section className='footer-main'>
        <div className='loja block-footer'>
          <div className='text-footer title-footer'>SOBRE A LOJA</div>
          <div className='links'>
            <a className="link-f" href="/quem-somos">Quem somos </a>
            <a className="link-f" href="/trabalhe-conosco">Trabalhe conosco</a>
            <a className="link-f" href="/politica-de-privacidade">Política de privacidade</a>
            <a className="link-f" href="/termos-de-uso">Termos de uso</a>
          </div>
        </div>
        <div className='container block-footer'>
          <div className='atendimento title-footer'>ATENDIMENTO</div>
          <div className='sub-container'> 
            <div className='atendimentos links'>
              <a className="link-f" href="/trocas-devolucoes">Trocas de devoluções</a>
              <a className="link-f" href="/rastreamento">Rastreamento de pedido</a>
              <a className="link-f" href="/central-de-ajuda">Central de ajuda (FAQ)</a>
              <a className="link-f" href="/fale-conosco">Fale conosco</a>
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
          <div className='links'>
            <a className="link-f" href="/metodos-de-pagamento">Métodos de pagamento</a>
            <a className="link-f" href="/certificados-de-seguranca">Certificados de Segurança</a>
          </div>
        </div>
        <div className='block-footer'>
          <div className='title-footer'>NOSSAS REDES</div>
          <div className='redes'>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={yt} alt="youtube" className='footer-icon'/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="instagram" className='footer-icon'/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={x} alt="x" className='footer-icon'/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={face} alt="facebook" className='footer-icon'/>
            </a>
          </div>
        </div>
      </section>

      {showAlert && (
        <Alert severity="success" sx={{ 
          position: "fixed", 
          top: 20, 
          right: 20, 
          zIndex: 1000,
        }}>
          E-mail cadastrado com sucesso!
        </Alert>
      )}


      <div className='email'>
        <div className='email-text'>
          <img src={emailIcon} alt="email" className='email-icon footer-icon'/>
          <p>Receba ofertas por e-mail</p>
        </div>
        <input type="text" placeholder='Digite seu nome...'/>
        <input type="text" placeholder='email@exemplo.com'/>
        <button className='button-email' onClick={handleSendClick}>
          <img src={send} alt="send" className='footer-icon send-icon'/>
        </button>
      </div>
      <p className='copy'>&copy; {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
