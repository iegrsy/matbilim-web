import React, { useState, useEffect } from 'react';
import './Achievement.css';

// Ulusal
import achievement1 from '../assets/GururTablosu/ulusal/1.jpg';
import achievement2 from '../assets/GururTablosu/ulusal/2.jpg';
import achievement3 from '../assets/GururTablosu/ulusal/3.jpg';
import achievement4 from '../assets/GururTablosu/ulusal/4.jpg';
import achievement5 from '../assets/GururTablosu/ulusal/5.jpg';
import achievement6 from '../assets/GururTablosu/ulusal/6.jpg';
import achievement7 from '../assets/GururTablosu/ulusal/7.jpg';
import achievement8 from '../assets/GururTablosu/ulusal/8.jpg';
import achievement9 from '../assets/GururTablosu/ulusal/9.jpg';
import achievement10 from '../assets/GururTablosu/ulusal/10.jpg';
import achievement11 from '../assets/GururTablosu/ulusal/11.jpg';
import achievement12 from '../assets/GururTablosu/ulusal/12.jpg';
import achievement13 from '../assets/GururTablosu/ulusal/13.jpg';
import achievement14 from '../assets/GururTablosu/ulusal/14.jpg';
import achievement15 from '../assets/GururTablosu/ulusal/15.jpg';
import achievement16 from '../assets/GururTablosu/ulusal/16.jpg';
import achievement17 from '../assets/GururTablosu/ulusal/17.jpg';
import achievement18 from '../assets/GururTablosu/ulusal/18.jpg';
import achievement19 from '../assets/GururTablosu/ulusal/19.jpg';
import achievement20 from '../assets/GururTablosu/ulusal/20.jpg';
import achievement21 from '../assets/GururTablosu/ulusal/21.jpg';
import achievement22 from '../assets/GururTablosu/ulusal/22.jpg';
import achievement23 from '../assets/GururTablosu/ulusal/23.jpg';
import achievement24 from '../assets/GururTablosu/ulusal/24.jpg';
import achievement25 from '../assets/GururTablosu/ulusal/25.jpg';

// Uluslararası
import achievement26 from '../assets/GururTablosu/uluslararası/27.jpg';
import achievement27 from '../assets/GururTablosu/uluslararası/28.jpg';
import achievement28 from '../assets/GururTablosu/uluslararası/29.jpg';
import achievement29 from '../assets/GururTablosu/uluslararası/30.jpg';
import achievement30 from '../assets/GururTablosu/uluslararası/31.jpg';

const nationalAchievements = [
  { src: achievement1, alt: 'Ulusal başarı 1' },
  { src: achievement2, alt: 'Ulusal başarı 2' },
  { src: achievement3, alt: 'Ulusal başarı 3' },
  { src: achievement4, alt: 'Ulusal başarı 4' },
  { src: achievement5, alt: 'Ulusal başarı 5' },
  { src: achievement6, alt: 'Ulusal başarı 6' },
  { src: achievement7, alt: 'Ulusal başarı 7' },
  { src: achievement8, alt: 'Ulusal başarı 8' },
  { src: achievement9, alt: 'Ulusal başarı 9' },
  { src: achievement10, alt: 'Ulusal başarı 10' },
  { src: achievement11, alt: 'Ulusal başarı 11' },
  { src: achievement12, alt: 'Ulusal başarı 12' },
  { src: achievement13, alt: 'Ulusal başarı 13' },
  { src: achievement14, alt: 'Ulusal başarı 14' },
  { src: achievement15, alt: 'Ulusal başarı 15' },
  { src: achievement16, alt: 'Ulusal başarı 16' },
  { src: achievement17, alt: 'Ulusal başarı 17' },
  { src: achievement18, alt: 'Ulusal başarı 18' },
  { src: achievement19, alt: 'Ulusal başarı 19' },
  { src: achievement20, alt: 'Ulusal başarı 20' },
  { src: achievement21, alt: 'Ulusal başarı 21' },
  { src: achievement22, alt: 'Ulusal başarı 22' },
  { src: achievement23, alt: 'Ulusal başarı 23' },
  { src: achievement24, alt: 'Ulusal başarı 24' },
  { src: achievement25, alt: 'Ulusal başarı 25' }
];

const internationalAchievements = [
  { src: achievement26, alt: 'Uluslararası başarı 1' },
  { src: achievement27, alt: 'Uluslararası başarı 2' },
  { src: achievement28, alt: 'Uluslararası başarı 3' },
  { src: achievement29, alt: 'Uluslararası başarı 4' },
  { src: achievement30, alt: 'Uluslararası başarı 5' }
];

function Achievement() {
  const [activeCategory, setActiveCategory] = useState('national'); // 'national' | 'international'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentList =
    activeCategory === 'national' ? nationalAchievements : internationalAchievements;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrev = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentList.length - 1 : prev - 1
    );
  }, [currentList.length]);

  const showNext = React.useCallback(() => {
    setCurrentIndex((prev) =>
      prev === currentList.length - 1 ? 0 : prev + 1
    );
  }, [currentList.length]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        showPrev();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isModalOpen, currentList.length, showNext, showPrev]);

  return (
    <div className="achievement-page">
      <div className="empty-space_init"></div>
      <div className="empty-space"></div>
      <section className="container pt-5 pb-5">
        <div className="achievement-category-toggle text-center">
          <button
            type="button"
            className={`achievement-category-button${
              activeCategory === 'national' ? ' is-active' : ''
            }`}
            onClick={() => {
              setActiveCategory('national');
              setCurrentIndex(0);
            }}
          >
            Ulusal
          </button>
          <button
            type="button"
            className={`achievement-category-button${
              activeCategory === 'international' ? ' is-active' : ''
            }`}
            onClick={() => {
              setActiveCategory('international');
              setCurrentIndex(0);
            }}
          >
            Uluslararası
          </button>
        </div>

        <div className="achievement-grid">
          {currentList.map((item, index) => (
            <button
              key={`${activeCategory}-${index}`}
              type="button"
              className="achievement-grid-item"
              onClick={() => openModal(index)}
              aria-label={`${activeCategory === 'national' ? 'Ulusal' : 'Uluslararası'} başarı ${index + 1} büyük görüntüle`}
            >
              <img src={item.src} alt={item.alt} />
            </button>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div
          className="achievement-modal-overlay"
          onClick={handleOverlayClick}
        >
          <div
            className="achievement-modal-content"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="achievement-modal-close"
              onClick={closeModal}
              aria-label="Görseli kapat"
            >
              ×
            </button>
            <button
              type="button"
              className="achievement-modal-nav achievement-modal-prev"
              onClick={showPrev}
              aria-label="Önceki görsel"
            >
              ‹
            </button>
            <img
              src={currentList[currentIndex].src}
              alt={currentList[currentIndex].alt}
              className="achievement-modal-image"
            />
            <button
              type="button"
              className="achievement-modal-nav achievement-modal-next"
              onClick={showNext}
              aria-label="Sonraki görsel"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Achievement;