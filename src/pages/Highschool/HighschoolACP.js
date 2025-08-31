import React, { useState } from 'react'; // useState eklendi

import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './HighschoolACP.css'; // Home.css dosyasını dahil ediyoruz
import mainImage from '../../assets/Algoritma.png'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function HighschoolACP() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showAcpDetails, setShowAcpDetails] = useState(false);

  return (

    <div>

      <div className="empty-space"></div>
      <div className="empty-space_init"></div>
      <section data-type="component-text">

        <section className="container pt-5 pb-5">

          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">

            <h3><strong className="highlight-text">{t('acp_sub_1')}</strong></h3>
            <h3><strong className="highlight-text">{t('acp_sub_2')}</strong></h3>
            <h3><strong className="highlight-text">{t('acp_sub_3')}</strong></h3>
            <h3><strong className="highlight-text">{t('acp_sub_4')}</strong></h3>
            <h3><strong className="highlight-text">{t('acp_sub_5')}</strong></h3>

            {showAcpDetails && (
            <>
              <p>{t('acp_header')}</p>
              <ul>
                <li>{t('acp_main_1')}</li>
                <li>{t('acp_main_2')}</li>
                <li>{t('acp_main_3')}</li>
                <li>{t('acp_main_4')}</li>
              </ul>
            </>
          )}

              <div className="empty-space_init"></div>
              <div class="btn-group" role="group" aria-label="Third group">

              <div className="btn-group" role="group" aria-label="Third group">
                <button
                  type="button"
                  className="btn btn-purple-moon btn-rounded"
                  onClick={() => setShowAcpDetails(true)}
                >
                  {t('acp_button_1')}
                </button>

                <button
                  type="button"
                  className="btn btn-purple-moon btn-rounded"
                  onClick={() => setShowAcpDetails(true)}
                >
                  {t('acp_button_2')}
                </button>
              </div>

              </div>
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

export default HighschoolACP;
