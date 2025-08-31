import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css'; // Home.css dosyasını dahil ediyoruz
function Contact() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="empty-space_init"></div>
      <div className="empty-space"></div>
      <section className="container pt-5 pb-5">
        <h2>{t('contact')}</h2>
        <section className="corporate-section">

          <div className="image-content">
            <iframe
      className="map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.264451053543!2d32.70842507650554!3d39.89071108748596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339c14e2b43e3%3A0x13837b0cc0755295!2zTUFUIELEsEzEsE0gS09MRUrEsA!5e0!3m2!1str!2str!4v1733249676372!5m2!1str!2str"
      title="Google Maps"
    ></iframe>
          </div>


          <div className="text-content">
            <p class="fas fa-phone mt-3"></p> {t("preschool")}: <a href="tel:+905068891431">+90 506 889 14 31</a><br></br>
            <p class="fas fa-phone mt-3"></p> {t("primaryschool")}: <a href="tel:+905068891431">+90 506 889 14 31</a><br></br>
            <p class="fas fa-phone mt-3"></p> {t("secondaryschool")}: <a href="tel:+905068891431">+90 506 889 14 31</a><br></br>
            <p class="fas fa-phone mt-3"></p> {t("highschool")}: <a href="tel:+905068891430">+90 506 889 14 30</a><br></br>
            <p class="fas fa-phone mt-3"></p> {t("ib_scinece")}: <a href="tel:+905540206734">+90 554 020 67 35</a><br></br>
            <p class="fas fa-phone mt-3"></p> {t("accounting")}: <a href="tel:+905540096735">+90 554 009 67 35</a><br></br>
            <p class="fa fa-envelope mt-3"></p> <a href="mailto:info@matbilimkoleji.com">info@matbilimkoleji.com</a><br></br>
            <p class="fas fa-globe mt-3"></p> Mutlukent, 1920. Cadde No:57, 06800 Çankaya/Ankara
          </div>
        </section>

      </section>





    </div>
  );
}

export default Contact;
