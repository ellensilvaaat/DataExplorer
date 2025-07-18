// src/components/Preloader/Preloader.jsx
import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
      <p className="preloader__text">Carregando...</p>
    </div>
  );
}

export default Preloader;