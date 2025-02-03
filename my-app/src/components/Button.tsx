import React from 'react';

// Tipo das propriedades do botão
interface ButtonProps {
  text: string;         // Texto do botão
  onClick: () => void;  // Função que será chamada ao clicar no botão
  className?: string;   // Classe CSS opcional para personalização
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button
      className={`btn ${className}`} // A classe CSS pode ser personalizada
      onClick={onClick}              // Ação de clique
    >
      {text}  {/* Texto do botão */}
    </button>
  );
};

export default Button;
