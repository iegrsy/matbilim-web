import React, {  useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import preschoolHeroImg from '../assets/preschool_main.png';
import { useNavigate } from 'react-router-dom';
function Preschool() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {

  }, []);


  return (
    <div>
      <div className="empty-space_init"></div>
      <div className="empty-space"></div>
      <section className="preschool-hero text-center py-5">
  <img src={preschoolHeroImg} alt="Anaokulu sınıfı" className="img-fluid mb-4"/>
  <h1>{t('preschool.hero.title')}</h1>
  <p>{t('preschool.hero.subtitle')}</p>
</section>

<section className="preschool-benefits container py-5">
  <div className="row">
    <div className="col-md-4 text-center">
      <h3>{t('preschool.benefit.creative')}</h3>
      <p>{t('preschool.benefit.creativeText')}</p>
    </div>
    <div className="col-md-4 text-center">
      <h3>{t('preschool.benefit.social')}</h3>
      <p>{t('preschool.benefit.socialText')}</p>
    </div>
    <div className="col-md-4 text-center">
      <h3>{t('preschool.benefit.academic')}</h3>
      <p>{t('preschool.benefit.academicText')}</p>
    </div>
  </div>
</section>

<section className="preschool-program container py-5">
  <h2>{t('preschool.program.title')}</h2>
  <ul>
    <li>🎨 {t('preschool.program.monday')}</li>
    <li>📚 {t('preschool.program.tuesday')}</li>
    <li>🔬 {t('preschool.program.wednesday')}</li>
    <li>🎭 {t('preschool.program.thursday')}</li>
    <li>⚽ {t('preschool.program.friday')}</li>
  </ul>
</section>

<section className="preschool-call container text-center py-5">
  <p>{t('preschool.callText')}</p>
  <button className="btn btn-purple-moon btn-rounded" onClick={() => navigate('/scholarship')}>
    {t('preschool.callButton')}
  </button>
</section>

    </div>
  );
}

export default Preschool;
