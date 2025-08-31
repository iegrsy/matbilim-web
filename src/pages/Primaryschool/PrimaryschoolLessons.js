import React from 'react';
import Slider from 'react-slick'; // react-slick slider kütüphanesi
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './PrimaryschoolLessons.css'; // Home.css dosyasını dahil ediyoruz
import slider1 from '../../assets/primary_main.jpg';
import mainImage from '../../assets/main_image.jpg'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function PrimaryschoolLessons() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,  // Elle kaydırmayı kapatır
    swipe: false      // Dokunmatik kaydırmayı kapatır
  };
  return (

    <div>

      <Slider {...settings} className="slider-container">
        <div>
          <img src={slider1} alt="Slide 1" className="img-fluid" />
        </div>
      </Slider>
      <section data-type="component-text">

        <section className="container pt-5 pb-5">

          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">
              <h1 className="pb-3 text-center">{t('lessons')}</h1>
              <p><strong>{t('home_line_1')}</strong></p>
              <p><strong>{t('home_sub_header')}</strong></p>
              <p>{t('home_line_2')}</p>
              <p>{t('home_line_3')}</p>
              <p>{t('home_line_3')}</p>
              <p>{t('home_line_3')}</p>
              <p>{t('home_line_3')}</p>
              <p>{t('home_line_3')}</p>
            </div>

            <div className="col-lg-6 col-sm-12">
              <img src={mainImage} alt="MatBilim Logo" className="img-fluid" />
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

export default PrimaryschoolLessons;
