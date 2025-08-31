// NotFound.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import NotFoundLogo from '../assets/not_found.png';

function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="text-center">
            <div className="empty-space_init"></div>
            <div className="empty-space"></div>
            <img
                src={NotFoundLogo}
                alt="Page Not Found"
                style={{ width: '600px', height: 'auto' }}
              />
              <br></br>
            <a href="/">{t('go_back_home')}</a> {/* Ana sayfaya geri dön bağlantısı */}

        </div>
    );
}

export default NotFound;
