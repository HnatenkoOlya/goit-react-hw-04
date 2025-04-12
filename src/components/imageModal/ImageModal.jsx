import React, { useEffect } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'

Modal.setAppElement('#root'); 

export default function ImageModal({ isOpen, onRequestClose, imageUrl, imageAlt }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}>
      <img src={imageUrl} alt={imageAlt} className={css.modalImage} />
    </Modal>
  );
}