// src/components/SearchForm/SearchForm.jsx
import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    } else {
      onSearch('');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Digite sua pesquisa aqui..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit" className="search-form__button">
        Pesquisar
      </button>
    </form>
  );
}

export default SearchForm;