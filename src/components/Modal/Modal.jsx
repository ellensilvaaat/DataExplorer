// src/components/Modal/Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children, title }) {
  // Efeito para fechar o modal com a tecla ESC
  useEffect(() => {
    // console.log("Modal useEffect: isOpen", isOpen); // Debug: verificar se o effect roda
    if (!isOpen) return; // Se o modal não estiver aberto, não adiciona o listener

    const handleEscClose = (e) => {
      // console.log("Modal handleEscClose: Key pressed", e.key); // Debug: ver qual tecla foi pressionada
      if (e.key === 'Escape') {
        onClose(); // Chama a função onClose passada via prop
      }
    };

    // Adiciona o listener de evento ao documento quando o modal está aberto
    document.addEventListener('keydown', handleEscClose);

    // Função de limpeza: remove o listener quando o componente é desmontado ou isOpen muda para false
    return () => {
      // console.log("Modal useEffect: Cleaning up keydown listener"); // Debug: confirmar limpeza
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]); // Dependências: re-executa o efeito se isOpen ou onClose mudar

  // Função para fechar o modal clicando no overlay (fundo escuro)
  const handleOverlayClick = (e) => {
    // console.log("Modal handleOverlayClick: Click target", e.target, "Current target", e.currentTarget); // Debug: onde o clique ocorreu
    if (e.target === e.currentTarget) { // Verifica se o clique foi diretamente no overlay
      onClose(); // Chama a função onClose passada via prop
    }
  };

  // Adiciona a classe 'modal_opened' para a animação CSS quando isOpen é true
  const modalClassName = `modal ${isOpen ? 'modal_opened' : ''}`;

  // Não renderiza o modal se isOpen for false
  if (!isOpen) {
    // console.log("Modal: Not rendering, isOpen is false"); // Debug: confirmar não renderização
    return null;
  }

  return (
    <div className={modalClassName} onClick={handleOverlayClick}>
      <div className="modal__container">
        {/* Botão de fechar 'X' no canto */}
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose} // Chama a função onClose
          aria-label="Fechar"
        ></button>
        <h2 className="modal__title">{title}</h2>
        <div className="modal__content">
          {children} {/* O conteúdo do modal (parágrafo e botão "Fechar Modal" vêm aqui) */}
        </div>
      </div>
    </div>
  );
}

export default Modal;