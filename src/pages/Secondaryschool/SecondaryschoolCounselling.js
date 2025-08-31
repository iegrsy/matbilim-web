import React from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './SecondaryschoolCounselling.css'; // Home.css dosyasını dahil ediyoruz
import mainImageFirst from '../../assets/counsellingFirst.png'; // Resmin doğru yolu
import mainImageSecond from '../../assets/counsellingSecond.png'; // Resmin doğru yolu
import mainImageThird from '../../assets/counsellingThird.png'; // Resmin doğru yolu
import mainImageFourth from '../../assets/counsellingFourth.png'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function SecondaryschoolCounselling() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (

    <div>

      <div className="empty-space"></div>
      <div className="empty-space_init"></div>
      <section data-type="component-text">

        <section className="container pt-5 pb-5">
          <section className="corporate-section">
            <div className="text-content">
              <h2>{t('what_is_counselling_header')}</h2>
              <p>{t('what_is_counselling_1')}</p>
              <p>{t('what_is_counselling_2')}</p>
              <p>{t('what_is_counselling_3')}</p>
            </div>
            <div className="image-content">
              <img src={mainImageFourth} alt="First" className="img-fluid corporate-image" />
            </div>
          </section>
          <section className="corporate-section alt-background">
            <div className="image-content">
              <img src={mainImageSecond} alt="Second" className="img-fluid corporate-image" />
            </div>
            <div className="text-content">
              <h2>{t('individual_consultancy')}</h2>
              <p>{t('individual_consultancy_main')}</p>
            </div>
          </section>

          <section className="corporate-section">
            <div className="text-content">
              <h2>{t('information_studies_for_parents')}</h2>
              <p>{t('information_studies_for_parents_main')}</p>
              <h2>{t('peer_support_programs')}</h2>
              <p>{t('peer_support_programs_main')}</p>
              <h2>{t('crisis_consultancy')}</h2>
              <p>{t('crisis_consultancy_main')}</p>
            </div>
            <div className="image-content">
              <img src={mainImageThird} alt="Third" className="img-fluid corporate-image" />
            </div>
          </section>
          <section className="corporate-section alt-background">
            <div className="image-content">
              <img src={mainImageFirst} alt="Fourth" className="img-fluid corporate-image" />
            </div>
            <div className="text-content">
              <p>{t('counselling_footer')}</p>

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

export default SecondaryschoolCounselling;
