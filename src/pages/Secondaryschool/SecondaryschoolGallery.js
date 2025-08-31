import React from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './SecondaryschoolGallery.css'; // Home.css dosyasını dahil ediyoruz
import soon from '../../assets/soon.png';
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function SecondaryschoolGallery() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (

    <div>

      <div className="empty-space_init"></div>
      <div className="empty-space"></div>
      <section className="container pt-5 pb-5 text-center">
        <h2>Burada güzel şeyler olacak. Çok Yakında!</h2>
        {/* Resmi gösteriyoruz */}
        <img src={soon} alt="Soon" className="centered-image" />
      </section>
      <FixedFooter>
  <section className="pt-2 pb-2 news">
    <div className="d-lg-none">
      {/* Mobil görünüm için dropdown */}
      <button
        className="btn btn-purple-moon btn-rounded w-100"
        data-bs-toggle="collapse"
        data-bs-target="#mobileMenu"
        aria-expanded="false"
        aria-controls="mobileMenu"
      >
        {t('menu')}
      </button>
      <div id="mobileMenu" className="collapse">
        <div className="btn-toolbar d-flex flex-column" role="toolbar">
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/preparation_program')}>{t('preparation_program')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/our_system')}>{t('our_system')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/foreign_language')}>{t('foreign_language')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/clubs')}>{t('clubs')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/counselling')}>{t('counselling')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/gallery')}>{t('gallery')}</button>
          </div>
        </div>
      </div>
    </div>

    {/* Masaüstü görünüm */}
    <div className="d-none d-lg-flex btn-toolbar justify-content-lg-around" role="toolbar">
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/preparation_program')}>{t('preparation_program')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/our_system')}>{t('our_system')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/foreign_language')}>{t('foreign_language')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/clubs')}>{t('clubs')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/counselling')}>{t('counselling')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/secondaryschool/gallery')}>{t('gallery')}</button>
      </div>
    </div>
  </section>
</FixedFooter>

    </div>
  );
}

export default SecondaryschoolGallery;
