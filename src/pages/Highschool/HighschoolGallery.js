import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FixedFooter from '../../components/FixedFooter'; // FixedFooter bileşeni
function HighschoolGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const gallery = importAll(
    require.context('../../gallery/high', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div>
      <div className="empty-space_init"></div>
      <div className="empty-space"></div>
      <section data-type="component-text">
        <section className="container pt-5 pb-5">
          <div className="grid-container">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="teacher-card"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className="modal" onClick={() => setSelectedImage(null)}>
              <img src={selectedImage} alt="Selected" />
            </div>
          )}
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

export default HighschoolGallery;
