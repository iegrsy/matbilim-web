import React from 'react';
import { useTranslation } from 'react-i18next';

function Highschool() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('highschool')}</h2>
      <p>{t('about_description')}</p>
    </div>
  );
}

export default Highschool;
