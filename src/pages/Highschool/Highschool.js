import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // react-slick slider kütüphanesi
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './Highschool.css'; // Home.css dosyasını dahil ediyoruz
import slider1 from '../../assets/highschool_main.png';
import slider1_Mobile from '../../assets/highschool_main-Mobile.png';
import highschool_main_sub_1 from '../../assets/highschool_main_sub_1.png'; // Resmin doğru yolu
import highschool_main_sub_2 from '../../assets/highschool_main_sub_2.png'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter'; // FixedFooter bileşeni
function Highschool() {
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
          <h1 className="pb-3 text-center">{t('highschool')}</h1>
          <section className="corporate-section">
            <div className="text-list">

              <p>{t('highschool_main_1')}</p>
              <p>{t('highschool_main_2')}</p>
              <p>{t('highschool_main_3')}</p>
              <p>{t('highschool_main_4')}</p>
              <p>{t('highschool_main_5')}</p>
              <p>{t('highschool_main_6')}</p>
            </div>
            <div className="image-content">
              <img src={highschool_main_sub_1} alt="Main" className="img-fluid corporate-image" />
            </div>
          </section>
          <section className="corporate-section alt-background">
            <div className="image-list">
              <img src={highschool_main_sub_2} alt="HighSchool_Image_2" className="img-fluid corporate-image" />
            </div>
            <div className="text-list">
              

              <p>{t('highschool_main_7')}</p>
              <p>{t('highschool_main_8')}</p>
              <p>{t('highschool_main_9')}</p>
              <p>{t('highschool_main_10')}</p>
              <p>{t('highschool_main_11')}</p>
            </div>
          </section>
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
                        <div class="btn-group button-width button-width" role="group" aria-label="Third group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/ninthgrade')}>{t('ninthgrade')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/tenthgrade')}>{t('tenthgrade')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/eleventhgrade')}>{t('eleventhgrade')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/twelfthgrade')}>{t('twelfthgrade')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/ACP')}>{t('acp')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/clubs')}>{t('clubs')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/counselling')}>{t('counselling')}</button>
                        </div>
                        <div class="btn-group button-width button-width" role="group">
                          <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/gallery')}>{t('gallery')}</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Masaüstü görünüm */}
                  <div className="d-none d-lg-flex btn-toolbar justify-content-lg-around" role="toolbar">
                    <div class="btn-group button-width button-width" role="group" aria-label="Third group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/ninthgrade')}>{t('ninthgrade')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/tenthgrade')}>{t('tenthgrade')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/eleventhgrade')}>{t('eleventhgrade')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/twelfthgrade')}>{t('twelfthgrade')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/ACP')}>{t('acp')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/clubs')}>{t('clubs')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/counselling')}>{t('counselling')}</button>
                    </div>
                    <div class="btn-group button-width button-width" role="group">
                      <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/gallery')}>{t('gallery')}</button>
                    </div>
                  </div>
                </section>
              </FixedFooter>
    </div>
  );
}

export default Highschool;



// <FixedFooter>
//   <section className="pt-2 pb-2 news">
//     <div class="btn-toolbar d-flex justify-content-lg-around" role="toolbar" >
//       <div class="btn-group button-width button-width" role="group" aria-label="Third group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/ninthgrade')}>{t('ninthgrade')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/tenthgrade')}>{t('tenthgrade')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/eleventhgrade')}>{t('eleventhgrade')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/twelfthgrade')}>{t('twelfthgrade')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/ACP')}>{t('acp')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/clubs')}>{t('clubs')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/counselling')}>{t('counselling')}</button>
//       </div>
//       <div class="btn-group button-width button-width" role="group">
//         <button type="button" class="btn btn-purple-moon btn-rounded " onClick={() => navigate('/highschool/gallery')}>{t('gallery')}</button>
//       </div>
//     </div>
//   </section>
// </FixedFooter>