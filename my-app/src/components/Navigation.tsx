import React from 'react';
import helpIcon from '@assets/icons/help.svg';
import cartIcon from '@assets/icons/shopping-cart.svg';
import userIcon from '@assets/icons/user.svg';

interface NavItemProps {
  iconSrc: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ iconSrc, label }) => {
  return (
    <button className="nav-item">
      <img src={iconSrc} alt={label} className="nav-icon" />
      {label}
    </button>
  );
};

const Navigation: React.FC = () => {
  return (
    <>
    <input
      type="text"
      placeholder="Buscar produtos..."
      aria-label="Buscar produtos"
      className="nav-input" />
      <nav className="nav">
        <NavItem iconSrc={helpIcon} label="Ajuda" />
        <NavItem iconSrc={userIcon} label="Login" />
        <NavItem iconSrc={cartIcon} label="Carrinho" />
      </nav></>
  );
};

export default Navigation;
