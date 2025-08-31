import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // react-slick slider kütüphanesi
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './Secondaryschool.css'; // Home.css dosyasını dahil ediyoruz
import slider1 from '../../assets/secondaryschool_main.png';
import slider1_Mobile from '../../assets/secondaryschool_main-Mobile.png';
import secondaryschool_sub_main from '../../assets/secondaryschool_sub_main.png';
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function Secondaryschool() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ekran boyutunu kontrol eden bir fonksiyon
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil için 768px sınırını kullanıyoruz
    };

    // İlk yükleme sırasında kontrol et
    handleResize();
    // Ekran boyutu değişikliklerini dinle
    window.addEventListener('resize', handleResize);

    // Temizlik işlemi
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slider ayarları
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true
  };
  return (

    <div>

      <Slider {...settings} className="slider-container">
        <div>
        <img src={isMobile ? slider1_Mobile : slider1} alt="Slide 1" className="img-fluid" />
        </div>
      </Slider>
      <section data-type="component-text">

      <section className="container pt-5 pb-5">
  <div className="row">
    {/* Sol: Yazı İçeriği */}
    <div className="col-lg-6 col-sm-12 mb-5">
      <h2 className="text-center mb-4">{t('middle_school.intro')}</h2>

      {/* 5-6. Sınıflar */}
      <div className="mb-4">
        <h4 className="fw-bold text-primary">{t('middle_school.grades_5_6_title')}</h4>
        <p>{t('middle_school.grades_5_6_content')}</p>
        <ul>
          {t('middle_school.grades_5_6_bullets', { returnObjects: true }).map((item, index) => (
            <li key={`grades_5_6_${index}`}>{item}</li>
          ))}
        </ul>
        <p>{t('middle_school.grades_5_6_followup')}</p>
      </div>

      {/* 7. Sınıf */}
      <div className="mb-4">
        <h4 className="fw-bold text-primary">{t('middle_school.grade_7_title')}</h4>
        <ul>
          {t('middle_school.grade_7_bullets', { returnObjects: true }).map((item, index) => (
            <li key={`grade_7_${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 8. Sınıf */}
      <div className="mb-4">
        <h4 className="fw-bold text-primary">{t('middle_school.grade_8_title')}</h4>
        <ul>
          {t('middle_school.grade_8_bullets', { returnObjects: true }).map((item, index) => (
            <li key={`grade_8_${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Dijital Takip */}
      <div className="mb-4">
        <h4 className="fw-bold text-primary">{t('middle_school.digital_title')}</h4>
        <ul>
          {t('middle_school.digital_bullets', { returnObjects: true }).map((item, index) => (
            <li key={`digital_${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Kapanış */}
      <p className="mt-4"><strong>{t('middle_school.conclusion')}</strong></p>
    </div>

    {/* Sağ: Görsel */}
    <div className="col-lg-6 col-sm-12">
      <img src={secondaryschool_sub_main} alt="MatBilim Logo" className="img-fluid" />
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

export default Secondaryschool;
