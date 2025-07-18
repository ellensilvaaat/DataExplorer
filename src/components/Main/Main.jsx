// src/components/Main/Main.jsx
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Main.css';

function Main({ onSearch }) { // Recebe onSearch como prop
  return (
    <section className="main">
      <h1 className="main__title">Bem-vindo ao Explorador de Dados</h1>
      <p className="main__description">
        Este aplicativo demonstra a integração de um projeto React com uma API de terceiros.
        Explore os dados ou aprenda mais sobre o projeto.
      </p>
      <SearchForm onSearch={onSearch} /> {/* Passa a função onSearch para o SearchForm */}
    </section>
  );
}

export default Main;