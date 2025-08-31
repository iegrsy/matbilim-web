import React from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './HighschoolEleventh.css'; // Home.css dosyasını dahil ediyoruz
import mainImage from '../../assets/11_MAIN_IMAGE.png'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function HighschoolEleventh() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (

    <div>

      <div className="empty-space"></div>
      <div className="empty-space_init"></div>
      <section className="pt-2 pb-2 news">
        <div class="btn-toolbar d-flex justify-content-lg-around" role="toolbar" >
          <div class="btn-group button-width" role="group" aria-label="Third group">
            <button type="button" class="btn btn-purple-moon btn-rounded" onClick={() => window.open(process.env.PUBLIC_URL + '/pdfs/11. SINIF OKUL PDF-2.pdf', '_blank')}>{t('camp_and_season')}</button>
          </div>
          <div class="btn-group button-width" role="group">
            <button type="button" class="btn btn-purple-moon btn-rounded" onClick={() => window.open(process.env.PUBLIC_URL + '/pdfs/11. SINIF OKUL PDF-3.pdf', '_blank')}>{t('academic_calendar')}</button>
          </div>
          <div class="btn-group button-width" role="group">
            <button type="button" class="btn btn-purple-moon btn-rounded" onClick={() => window.open(process.env.PUBLIC_URL + '/pdfs/11. SINIF OKUL PDF-4.pdf', '_blank')}>{t('calendar')}</button>
          </div>
          <div class="btn-group button-width" role="group">
            <button type="button" class="btn btn-purple-moon btn-rounded" onClick={() => window.open(process.env.PUBLIC_URL + '/pdfs/11. SINIF OKUL PDF-5.pdf', '_blank')}>{t('homework_system')}</button>
          </div>
          <div class="btn-group button-width" role="group">
            <button type="button" class="btn btn-purple-moon btn-rounded" onClick={() => window.open(process.env.PUBLIC_URL + '/pdfs/11. SINIF OKUL PDF-6.pdf', '_blank')}>{t('all_programs')}</button>
          </div>

        </div>
      </section>
      <section data-type="component-text">

        <section className="container pt-5 pb-5">
          {/* <section className="corporate-section"> */}
          <div className="row">
            <div className="col-lg-6 col-sm-12 mb-5">
              <h1 className="pb-3 text-center">{t('eleventhgrade')}</h1>
              <h2>{t('highschool_sub')}</h2>
              <div className="text-list">
                <p>{t('highschool_eleventh_main_1')}</p>
                <p>{t('highschool_eleventh_main_2')}</p>
                <p>{t('highschool_eleventh_main_3')}</p>
                <p>{t('highschool_eleventh_main_4')}</p>
                <p>{t('highschool_eleventh_main_5')}</p>
                <p>{t('highschool_eleventh_main_6')}</p>
                <p>{t('highschool_eleventh_main_7')}</p>
                <p>{t('highschool_eleventh_main_8')}</p>
                <p>{t('highschool_eleventh_main_9')}</p>
              </div>
            </div>


            <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={mainImage} alt="MatBilim Logo" className="img-fluid mx-auto d-block full-width-image" />
            </div>
          </div>
        </section>
        {/* <section className="corporate-section alt-background">
            <div className="image-content">
              <img src={founderImage} alt="Founder" className="img-fluid corporate-image" />
            </div>
            <div className="text-content">
              <h2>{t('from_our_founder')}</h2>
              <p>{t('founder_message')}</p>
            </div>
          </section>

          <section className="corporate-section">
            <div className="text-content">
              <h2>{t('principles_algorithm')}</h2>
              <b><p>{t('principles_loud')}</p></b>
              <b><p>{t('principles_loud_en')}</p></b>
              <p>{t('principles_text')}</p>
            </div>
            <div className="image-content">
              <img src={mainImage} alt="Main" className="img-fluid corporate-image" />
            </div>
          </section> */}
        {/* </section> */}
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

export default HighschoolEleventh;
