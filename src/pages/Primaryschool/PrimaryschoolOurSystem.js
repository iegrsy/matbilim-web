import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // react-slick slider kütüphanesi
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './PrimaryschoolOurSystem.css'; // Home.css dosyasını dahil ediyoruz
import slider1 from '../../assets/primary_main.jpg';
import slider1_Mobile from '../../assets/primary_main-Mobile.png';
import mainImage from '../../assets/oursystem_main.png'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function PrimaryschoolOurSystem() {
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
            <div className="col-lg-6 col-sm-12 mb-5">
              <h2 className="pb-3 text-center">{t('our_system')}</h2>
              <p>{t('primaryschool_oursystem_main_1')}</p>
              <p>{t('primaryschool_oursystem_main_2')}</p>
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

export default PrimaryschoolOurSystem;
