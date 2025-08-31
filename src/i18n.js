import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Dil dosyalarını yüklemek için
  .use(LanguageDetector) // Tarayıcı dilini otomatik algılar
  .use(initReactI18next) // react-i18next'e geçiş
  .init({
    lng: 'tr',
    fallbackLng: 'tr', // Varsayılan dil
    debug: true,
    interpolation: {
      escapeValue: false, // React zaten XSS korumasına sahip
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
