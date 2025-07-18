// src/components/PageWithApiData/PageWithApiData.jsx
import React from 'react';
import Preloader from '../Preloader/Preloader';
import './PageWithApiData.css';

function PageWithApiData({ isLoading, dataItems, error, onShowMore, hasMore }) {
  const hasNoResults = !isLoading && !error && dataItems.length === 0;

  return (
    <section className="data-page">
      <h2 className="data-page__title">Notícias do HackerNews</h2>

      {isLoading && <Preloader />}

      {error && (
        <p className="data-page__message data-page__message_type_error">
          {error}
        </p>
      )}

      {hasNoResults && (
        <p className="data-page__message">
          Nada encontrado. Tente uma pesquisa diferente.
        </p>
      )}

      {dataItems.length > 0 && (
        <div className="data-page__results">
          {dataItems.map((item) => (
            <div key={item.id} className="data-page__card">
              <h3 className="data-page__card-title">{item.title || 'Sem Título'}</h3>
              <p className="data-page__card-description">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="data-page__card-link">
                    {item.url.length > 50 ? item.url.substring(0, 50) + '...' : item.url}
                  </a>
                ) : 'Sem URL'}
              </p>
              <p className="data-page__card-info">
                {item.by && `Autor: ${item.by}`}
                {item.score && ` | Pontuação: ${item.score}`}
                {item.time && ` | Data: ${new Date(item.time * 1000).toLocaleDateString()}`}
              </p>
            </div>
          ))}
        </div>
      )}

      {!isLoading && hasMore && !error && (
        <button
          type="button"
          className="data-page__button-show-more"
          onClick={onShowMore}
        >
          Mostrar mais
        </button>
      )}
    </section>
  );
}

export default PageWithApiData;