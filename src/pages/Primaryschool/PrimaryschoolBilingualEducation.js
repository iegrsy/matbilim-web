import React from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './PrimaryschoolBilingualEducation.css'; // Home.css dosyasını dahil ediyoruz
import mainImage from '../../assets/bilingual.gif'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function PrimaryschoolBilingualEducation() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (

    <div>

      <div className="empty-space"></div>
      <div className="empty-space_init"></div>
      <section data-type="component-text">

        <section className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">
              <h2 className="pb-3 text-center">{t('bilingual_education')}</h2>
              <p><strong>{t('primaryschool_bilingual_education_header')}</strong></p>
              <p>{t('primaryschool_bilingual_education_main_1')}</p>
              <p>{t('primaryschool_bilingual_education_main_2')}</p>
              <p>{t('primaryschool_bilingual_education_main_3')}</p>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={mainImage} alt="MatBilim Logo" className="img-fluid mx-auto d-block full-width-image" />
            </div>
          </div>
        </section>
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
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/our_system')}>{t('our_system')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/bilingual_education')}>{t('bilingual_education')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/clubs')}>{t('clubs')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/counselling')}>{t('counselling')}</button>
          </div>
          <div className="btn-group button-width" role="group">
            <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/gallery')}>{t('gallery')}</button>
          </div>
        </div>
      </div>
    </div>

    {/* Masaüstü görünüm */}
    <div className="d-none d-lg-flex btn-toolbar justify-content-lg-around" role="toolbar">
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/our_system')}>{t('our_system')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/bilingual_education')}>{t('bilingual_education')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/clubs')}>{t('clubs')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/counselling')}>{t('counselling')}</button>
      </div>
      <div className="btn-group button-width" role="group">
        <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/primaryschool/gallery')}>{t('gallery')}</button>
      </div>
    </div>
  </section>
</FixedFooter>


    </div>
  );
}

export default PrimaryschoolBilingualEducation;
