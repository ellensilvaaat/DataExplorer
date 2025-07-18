// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentYear} Explorador de Dados. Desenvolvido por Ellen Silva.
      </p>
    </footer>
  );
}

export default Footer;