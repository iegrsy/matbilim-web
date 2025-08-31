/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Corporate.css'; // Stil dosyası
import mainImage from '../assets/algoritm_of_prencipes.jpeg';
import aboutus1 from '../assets/aboutus1.jpeg';
import founderImage from '../assets/founder.jpeg';

function Corporate() {
  const { t } = useTranslation();

  return (
    <div className="corporate-container">
      <div className="empty-space"></div>
      <div className="empty-space_init"></div>
      <section className="corporate-section">
        <div className="text-content">
          <h2>{t('about_us')}</h2>
          <p>{t('about_us_text_1')}</p>
          <p>{t('about_us_text_2')}</p>
        </div>
        <div className="image-content">
          <img src={aboutus1} alt="Main Image" className="img-fluid corporate-image" />
        </div>
      </section>

      {/* Kurucumuzdan Bölümü */}
      <section className="corporate-section alt-background">
        <div className="image-content">
          <img src={founderImage} alt="Founder" className="img-fluid corporate-image" />
        </div>
        <div className="text-content">
          <h2>{t('from_our_founder')}</h2>

          <p>{t('ataturk_salutation')}</p>
          <p>{t('honor_and_pride')}</p>
          <p>{t('student_success')}</p>
          <p>{t('teachers_tears')}</p>
          <p>{t('national_days_in_students')}</p>
          <p>{t('devotion_and_determination')}</p>
          <p>{t('respect_and_gratitude')}</p>
          <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
            <p>{t('founder_signature_1')}</p>
            <p>{t('founder_signature_2')}</p>
          </div>
        </div>
      </section>


      {/* Prensipler Algoritması Bölümü */}
      <section className="corporate-section">
        <div className="text-content">
          <h2>{t('Misyonumuz ve Vizyonumuz')}</h2>
          <b><p>{t('principles_loud')}</p></b>
          <p>{t('principles_text')}</p>
        </div>
        <div className="image-content">
          <img src={mainImage} alt="Main Image" className="img-fluid corporate-image" />
        </div>
      </section>
    </div>
  );
}

export default Corporate;
