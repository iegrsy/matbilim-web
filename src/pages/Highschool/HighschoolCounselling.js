import React from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Slider stil dosyaları
import './HighschoolCounselling.css'; // Home.css dosyasını dahil ediyoruz
import mainImage from '../../assets/counsellin_main.png'; // Resmin doğru yolu
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter';
function HighschoolCounselling() {
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
              <h2 className="pb-3 text-center">{t('counselling')}</h2>
              <h3 className='color-blue'><strong>{t('counselling_title')}</strong></h3>
              <p>{t('counselling_main_1')} {t('counselling_main_2')} {t('counselling_main_3')} {t('counselling_main_4')} {t('counselling_main_5')}</p>

            </div>

            <div className="col-lg-6 col-sm-12">
              <img src={mainImage} alt="MatBilim Logo" className="img-fluid" />
            </div>
          </div>
          <h4 className='color-blue'>{t('counselling_sub_header')}</h4>
          <li><b>{t('counselling_li_1')}: </b>{t('counselling_text_1')}</li>
          <li><b>{t('counselling_li_2')}: </b>{t('counselling_text_2')}</li>
          <li><b>{t('counselling_li_3')}: </b>{t('counselling_text_3')}</li>
          <li><b>{t('counselling_li_4')}: </b>{t('counselling_text_4')}</li>
          <li><b>{t('counselling_li_5')}: </b>{t('counselling_text_5')}</li>
          <li><b>{t('counselling_li_6')}: </b>{t('counselling_text_6')}</li>
          <li><b>{t('counselling_li_7')}: </b>{t('counselling_text_7')}</li>
          <li><b>{t('counselling_li_8')}: </b>{t('counselling_text_8')}</li>
          <li><b>{t('counselling_li_9')}: </b>{t('counselling_text_9')}</li>
          <li><b>{t('counselling_li_10')}: </b>{t('counselling_text_10')}</li>

          <h4 className='color-red'>{t('counselling_post_header')}</h4>
          <p>{t('counselling_post_1')}</p>
          <p>{t('counselling_post_2')}</p>
          <p>{t('counselling_post_3')} {t('counselling_post_4')} {t('counselling_post_5')}</p>
          <p>{t('counselling_post_6')} {t('counselling_post_7')} {t('counselling_post_8')}</p>
          <p>{t('counselling_post_9')} {t('counselling_post_10')}</p>
          <p>{t('counselling_post_11')} {t('counselling_post_12')}</p>
          <p>{t('counselling_post_13')}</p>
          <li><b>{t('counselling_post_14_header')} </b>{t('counselling_post_14')}</li>
          <li><b>{t('counselling_post_15_header')} </b>{t('counselling_post_15')}</li>
          <li><b>{t('counselling_post_16_header')} </b>{t('counselling_post_16')}</li>
          <p>{t('counselling_post_17')} {t('counselling_post_18')}</p>
          <p>{t('counselling_post_19')}</p>
          <p>{t('counselling_post_20')}</p>
          <p>{t('counselling_post_21')}</p>
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

export default HighschoolCounselling;
