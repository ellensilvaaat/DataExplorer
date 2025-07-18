// src/components/Header/Header.jsx
import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ navigateTo, openModal }) {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo" onClick={() => navigateTo('home')}>
          Explorador de Dados
        </a>
        <Navigation navigateTo={navigateTo} openModal={openModal} />
      </div>
    </header>
  );
}

export default Header;