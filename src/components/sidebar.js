// Sidebar.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  const { t } = useTranslation();
  const sidebarRef = useRef();


  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>

      <ul>
        <li>
          <Link className="nav-link" to="/." onClick={toggleSidebar}>{t('home')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/corporate" onClick={toggleSidebar}>{t('corporate_menu')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/preschool" onClick={toggleSidebar}>{t('preschool_main')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/primaryschool/our_system" onClick={toggleSidebar}>{t('primaryschool')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/secondaryschool" onClick={toggleSidebar}>{t('secondaryschool')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/highschool" onClick={toggleSidebar}>{t('highschool')}</Link>
        </li>
        <li>
          <a className="nav-link" href="http://ibbilim.com/" onClick={toggleSidebar} target="_blank" rel="noopener noreferrer">{t('ib_scinece')}</a>
        </li>
        <li>
          <Link className="nav-link" to="/our_staff" onClick={toggleSidebar}>{t('our_staff')}</Link>
        </li>
        <li>
          <Link className="nav-link" onClick={toggleSidebar} to="/scholarship">{t('scholarship')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Ataturk" onClick={toggleSidebar}>{t('the_Atatürk_corner')}</Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact" onClick={toggleSidebar}>{t('contact')}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
