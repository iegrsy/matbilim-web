import React from 'react';
import { useTranslation } from 'react-i18next';

function Secondaryschool() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('secondaryschool')}</h2>
      <p>{t('about_description')}</p>
    </div>
  );
}

export default Secondaryschool;
