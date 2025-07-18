// src/components/Navigation/Navigation.jsx
import React from 'react';
import './Navigation.css';

function Navigation({ navigateTo, openModal }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link" onClick={() => navigateTo('home')}>
            Início
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link" onClick={() => navigateTo('data-page')}>
            Ver Dados
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link" onClick={() => navigateTo('about')}>
            Sobre
          </a>
        </li>
        <li className="navigation__item">
          <button type="button" className="navigation__button" onClick={openModal}>
            Abrir Modal
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;