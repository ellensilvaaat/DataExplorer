// src/components/App/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PageWithApiData from '../PageWithApiData/PageWithApiData';
import Modal from '../Modal/Modal';
import { getTopStoryIds, getItemDetails } from '../../utils/Api';
import './App.css'; // Opcional: pode estar vazio

const ITEMS_TO_LOAD_PER_CLICK = 3;
const INITIAL_FETCH_COUNT_FOR_IDS = 100;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [displayedDataItems, setDisplayedDataItems] = useState([]);
  const [allFilteredDataItems, setAllFilteredDataItems] = useState([]);

  const [searchError, setSearchError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');


  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsModalOpen(false);
    setDisplayedDataItems([]);
    setAllFilteredDataItems([]);
    setSearchError(null);
    setIsSearching(false);
    setCurrentQuery('');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); // <-- CORRIGIDO AQUI!

  const executeSearch = useCallback(async (query = '') => {
    setIsSearching(true);
    setSearchError(null);
    setDisplayedDataItems([]);
    setAllFilteredDataItems([]);
    setCurrentQuery(query);
    setCurrentPage('data-page'); // Define a página para 'data-page'

    try {
      const ids = await getTopStoryIds();
      const allFetchedDetails = await Promise.all(ids.map(id => getItemDetails(id)));
      const filteredAndValidItems = allFetchedDetails.filter(item =>
        item !== null && item.title && item.url &&
        (query.trim() === '' || item.title.toLowerCase().includes(query.toLowerCase()))
      );

      setAllFilteredDataItems(filteredAndValidItems);
      setDisplayedDataItems(filteredAndValidItems.slice(0, ITEMS_TO_LOAD_PER_CLICK));

      if (filteredAndValidItems.length === 0 && query.trim() !== '') {
          setSearchError("Nada encontrado para sua pesquisa. Tente outro termo.");
      } else if (filteredAndValidItems.length === 0 && query.trim() === '') {
          setSearchError("Não foi possível carregar as notícias mais recentes.");
      }

    } catch (err) {
      setSearchError("Não foi possível carregar ou pesquisar os dados. Por favor, tente novamente.");
    } finally {
      setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    if (currentPage === 'data-page' && displayedDataItems.length === 0 && !isSearching && !searchError && allFilteredDataItems.length === 0) {
      executeSearch('');
    }
  }, [currentPage, displayedDataItems.length, isSearching, searchError, allFilteredDataItems.length, executeSearch]);


  const handleLoadMoreResults = useCallback(() => {
    setIsSearching(true);
    setSearchError(null);

    const currentDisplayedCount = displayedDataItems.length;
    const nextItems = allFilteredDataItems.slice(currentDisplayedCount, currentDisplayedCount + ITEMS_TO_LOAD_PER_CLICK);

    setDisplayedDataItems(prevItems => [...prevItems, ...nextItems]);
    setIsSearching(false);
  }, [displayedDataItems, allFilteredDataItems]);


  const hasMoreResultsToLoad = allFilteredDataItems.length > displayedDataItems.length;

  return (
    <div className="page">
      <Header navigateTo={navigateTo} openModal={openModal} />

      <main className="content">
        {currentPage === 'home' && <Main onSearch={executeSearch} />}
        {currentPage === 'data-page' && (
          <PageWithApiData
            isLoading={isSearching}
            dataItems={displayedDataItems}
            error={searchError}
            onShowMore={handleLoadMoreResults}
            hasMore={hasMoreResultsToLoad}
          />
        )}
        {currentPage === 'about' && <About />}
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Exemplo de Modal">
        <p>Este é um modal de exemplo. Ele será usado para exibir formulários ou outras informações interativas.</p>
        <button type="button" onClick={closeModal}>Fechar Modal</button>
      </Modal>
    </div>
  );
}

export default App;