import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // react-slick slider kütüphanesi
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './Home.css'; // Home.css dosyasını dahil ediyoruz
import sliderMain from '../assets/AnitKabir.jpg';
import slider1 from '../assets/Slider1.png';
import slider3 from '../assets/slider3.gif';
import slider5 from '../assets/Slider5.jpeg';
import slider6 from '../assets/Slider6.png';
import slider7 from '../assets/Slider7.png';
import slider8 from '../assets/Slider8.gif';
import slider9 from '../assets/Slider9.png';
import slider10 from '../assets/Slider10.png';
import slider11 from '../assets/matbilim-basarilar-siralama-yatay.jpg';
import slider12 from '../assets/matbilim-basarilar-yatay.jpg';

import slider1_Mobile from '../assets/Slider1-Mobile.png';
import slider3_Mobile from '../assets/slider3-Mobile.png';
import slider5_Mobile from '../assets/Slider5-Mobile.png';
import slider6_Mobile from '../assets/Slider6-Mobile.png';
import slider7_Mobile from '../assets/Slider7-Mobile.png';
import slider8_Mobile from '../assets/Slider8-Mobile.gif';
import slider9_Mobile from '../assets/Slider9-Mobile.png';
import slider11_Mobile from '../assets/matbilim-basarilar-siralama-story.jpg';
import slider12_Mobile from '../assets/matbilim-basarilar-story.jpg';

import popupImage from '../assets/matbilim-sinav-yatay.jpg';
import mainImageSolo from '../assets/main_image_solo.png'; // Resmin doğru yolu
import WhatsApp from '../components/WhatsApp';
function Home() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(true); // Popup açık mı kontrolü
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

  useEffect(() => {
    // 15 saniye sonra popup'ı kapat
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 15000);

    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  const closePopup = () => {
    setShowPopup(false); // Popup'ı kapat
  };
  
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
      <div className="App">
        {/* Popup */}
        {showPopup && (
          <div className="popup-container-home">
            <div className="popup-content-home">
              <button className="popup-close-home" onClick={closePopup}>
                ×
              </button>
              <a href="/scholarship">
                <img src={popupImage} alt="Popup Görseli" className="popup-image-home" />
              </a>
            </div>
          </div>
        )}
        <WhatsApp />
      </div>
      {/* Slider */}
      <Slider {...settings} className="slider-container">

        <div>
          <img src={sliderMain} alt="Anıtkabir" className="img-fluid" />
        </div>
        <div>
          <img src={isMobile ? slider1_Mobile : slider1} alt="Slide 1" className="img-fluid" />
        </div>
        <div>
          <img src={slider10} alt="Slider 10" className="img-fluid" />
        </div>
        <div>
          <a href="/achievement">
            <img src={isMobile ? slider3_Mobile : slider3} alt="Slide 3" className="img-fluid" />
          </a>
        </div>
        <div>
          <img src={isMobile ? slider5_Mobile : slider5} alt="Slide 5" className="img-fluid" />
        </div>
        <div>
          <img src={isMobile ? slider6_Mobile : slider6} alt="Slide 6" className="img-fluid" />
        </div>
        <div>
          <img src={isMobile ? slider7_Mobile : slider7} alt="Slide 7" className="img-fluid" />
        </div>
        <div>
        <img src={isMobile ? slider8_Mobile : slider8} alt="Slide 8" className="img-fluid" />
        </div>
        <div>
          <img src={isMobile ? slider9_Mobile : slider9} alt="Slide 9" className="img-fluid" />
        </div>
        <div>
          <img src={isMobile ? slider11_Mobile : slider11} alt="Slide 11" className="img-fluid" />
        </div>
        <div>
          <img src={isMobile ? slider12_Mobile : slider12} alt="Slide 12" className="img-fluid" />
        </div>
      </Slider>

      {/* Başlık ve Mesaj */}
      <section data-type="component-text">
        <section className="container pt-5 pb-5">

          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">

              <p>{t('main_text_1')}</p>
              <p>{t('main_text_2')}</p>
              <p>{t('main_text_3')}</p>
              <p>{t('main_text_4')}</p>
              <p>{t('main_text_5')}</p>
              <p>{t('main_text_6')}</p>
            </div>

            <div className="col-lg-6 col-sm-12">
              <div className="full-width-image-container">
                <img src={mainImageSolo} alt="MatBilim Logo" className="full-width-image" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
