import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import Primaryschool from './pages/Primaryschool/Primaryschool';
import PrimaryschoolActivities from './pages/Primaryschool/PrimaryschoolActivities';
import PrimaryschoolOurSystem from './pages/Primaryschool/PrimaryschoolOurSystem';
import PrimaryschoolBilingualEducation from './pages/Primaryschool/PrimaryschoolBilingualEducation';
import PrimaryschoolLessons from './pages/Primaryschool/PrimaryschoolLessons';
import PrimaryschoolClubs from './pages/Primaryschool/PrimaryschoolClubs';
import PrimaryschoolCounselling from './pages/Primaryschool/PrimaryschoolCounselling';
import PrimaryschoolGallery from './pages/Primaryschool/PrimaryschoolGallery';
import Secondaryschool from './pages/Secondaryschool/Secondaryschool';
import SecondaryschoolPreparationProgram from './pages/Secondaryschool/SecondaryschoolPreparationProgram';
import SecondaryschoolOurSystem from './pages/Secondaryschool/SecondaryschoolOurSystem';
import SecondaryschoolForeignLanguage from './pages/Secondaryschool/SecondaryschoolForeignLanguage';
import SecondaryschoolLessons from './pages/Secondaryschool/SecondaryschoolLessons';
import SecondaryschoolClubs from './pages/Secondaryschool/SecondaryschoolClubs';
import SecondaryschoolCounselling from './pages/Secondaryschool/SecondaryschoolCounselling';
import SecondaryschoolGallery from './pages/Secondaryschool/SecondaryschoolGallery';
import Highschool from './pages/Highschool/Highschool';
import HighschoolNinth from './pages/Highschool/HighschoolNinth';
import HighschoolTenth from './pages/Highschool/HighschoolTenth';
import HighschoolEleventh from './pages/Highschool/HighschoolEleventh';
import HighschoolTwelfth from './pages/Highschool/HighschoolTwelfth';
import HighschoolACP from './pages/Highschool/HighschoolACP';
import HighschoolClubs from './pages/Highschool/HighschoolClubs';
import HighschoolCounselling from './pages/Highschool/HighschoolCounselling';
import HighschoolGallery from './pages/Highschool/HighschoolGallery';
import Staff from './pages/Staff';
import Gallery from './pages/Gallery';
import Achievement from './pages/Achievement';
import Ataturk from './pages/Ataturk';


import Preschool from './pages/Preschool';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import './App.css'; // CSS dosyasını dahil edin
import './i18n'; // i18n yapılandırmasını dahil edin
import { useTranslation } from 'react-i18next';
import matbilimLogo from './assets/matbilim.png'; // Resmin doğru yolu
import ataturkvecocukLogo from './assets/ataturkvecocuk.png'; // Resmin doğru yolu
import menuIcon from './assets/menu_button.png';
import NotFound from './pages/NotFound'; // 404 Not Found bileşenini dahil ediyoruz
import Scholarship from './pages/Scholarship/Scholarship';
import ScrollToTop from './components/scrollToTop'; // ScrollToTop bileşenini içe aktarın

function App() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);  // Sidebar açık/kapalı durumu

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Sidebar'ı aç/kapa
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // 50px'den fazla kaydırıldığında scrolled class'ı eklenir
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Router>
      <ScrollToTop /> 
      <div className="app-wrapper d-flex flex-column min-vh-100">
        {/* Navbar */}
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled navbar-dark' : 'navbar-dark'} w-100`}>
          <div className="d-flex align-items-center w-100 ms-0">
            {/* Sidebar açan buton */}
            <button
              className="btn btn-outline-primary me-2"
              onClick={(event) => {
                event.stopPropagation(); // Butona tıklamanın diğer eventlere yayılmasını önler
                toggleSidebar(); // Sidebar'ı aç/kapa
              }}
            >
              <img
                src={menuIcon}
                alt="Menu Icon"
                style={{ width: '30px', height: '30px' }}
              />
            </button>

            {/* Logo */}
            <Link className="navbar-brand ms-0" to="/">
              <img src={matbilimLogo} alt="MatBilim Logo" className="matbilim-logo" />
            </Link>

            {/* Dil değiştirici buton */}
            <button className="btn btn-outline-secondary ms-auto colorWhite" onClick={toggleLanguage}>
              {t('language')}
            </button>

            {/* Navbar linkleri */}
            <div className="collapse navbar-collapse justify-content-end custom-navbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/preschool">{t('preschool_main')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/primaryschool/our_system">{t('primaryschool')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/secondaryschool">{t('secondaryschool')}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/highschool">{t('highschool')}</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://ibbilim.com/" target="_blank" rel="noopener noreferrer">{t('ib_scinece')}</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/scholarship">{t('scholarship')}</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.onlineibbilim.com/login.jsf" target="_blank" rel="noopener noreferrer">{t('portal')}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> {/* Sidebar'a prop gönderiyoruz */}

        {/* Sayfa İçeriği */}
        <div className="content flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preschool" element={<Preschool />} />
            <Route path="/primaryschool" element={<Primaryschool />} />
            <Route path="/primaryschool/activities" element={<PrimaryschoolActivities />} />
            <Route path="/primaryschool/our_system" element={<PrimaryschoolOurSystem />} />
            <Route path="/primaryschool/bilingual_education" element={<PrimaryschoolBilingualEducation />} />
            <Route path="/primaryschool/lessons" element={<PrimaryschoolLessons />} />
            <Route path="/primaryschool/clubs" element={<PrimaryschoolClubs />} />
            <Route path="/primaryschool/counselling" element={<PrimaryschoolCounselling />} />
            <Route path="/primaryschool/gallery" element={<PrimaryschoolGallery />} />
            <Route path="/secondaryschool" element={<Secondaryschool />} />
            <Route path="/secondaryschool/preparation_program" element={<SecondaryschoolPreparationProgram />} />
            <Route path="/secondaryschool/our_system" element={<SecondaryschoolOurSystem />} />
            <Route path="/secondaryschool/foreign_language" element={<SecondaryschoolForeignLanguage />} />
            <Route path="/secondaryschool/lessons" element={<SecondaryschoolLessons />} />
            <Route path="/secondaryschool/clubs" element={<SecondaryschoolClubs />} />
            <Route path="/secondaryschool/counselling" element={<SecondaryschoolCounselling />} />
            <Route path="/secondaryschool/gallery" element={<SecondaryschoolGallery />} />
            <Route path="/highschool" element={<Highschool />} />
            <Route path="/highschool/ninthgrade" element={<HighschoolNinth />} />
            <Route path="/highschool/tenthgrade" element={<HighschoolTenth />} />
            <Route path="/highschool/eleventhgrade" element={<HighschoolEleventh />} />
            <Route path="/highschool/twelfthgrade" element={<HighschoolTwelfth />} />
            <Route path="/highschool/ACP" element={<HighschoolACP />} />
            <Route path="/highschool/clubs" element={<HighschoolClubs />} />
            <Route path="/highschool/counselling" element={<HighschoolCounselling />} />
            <Route path="/highschool/gallery" element={<HighschoolGallery />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/our_staff" element={<Staff />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievement" element={<Achievement />} />
            <Route path="/Ataturk" element={<Ataturk />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Sağ üst köşeye sabitlenen logo */}
        <div className="logo-fixed-top">
          <img
            src={ataturkvecocukLogo}
            alt="Ataturk ve Çocuk Logo"
            className="logo-image"
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
