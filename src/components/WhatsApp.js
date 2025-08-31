import React, { useState } from 'react';
import './WhatsApp.css';
import whatsappIcon from '../assets/whatsapp-logo.png'; // WhatsApp ikonunu eklediğiniz dizine göre güncelleyin
import { useTranslation } from 'react-i18next';

const WhatsApp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const { t } = useTranslation();

    // Menü açma/kapama fonksiyonu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSubMenuOpen(false); // Alt menü kapatılır
        setSelectedOption('');
    };

    // WhatsApp veya Telefon seçimi
    const handleMainOptionClick = (option) => {
        setSelectedOption(option);
        setIsSubMenuOpen(true);
    };

    // WhatsApp yönlendirme fonksiyonu
    const redirectToWhatsApp = (level) => {
        let phoneNumber;
        switch (level) {
            case 'anaokulu':
                phoneNumber = '+905068891431';
                break;
            case 'ilkokul':
                phoneNumber = '+905068891431';
                break;
            case 'ortaokul':
                phoneNumber = '+905068891431';
                break;
            case 'lise':
                phoneNumber = '+905068891430';
                break;
            case 'ibbilim':
                phoneNumber = '+905540206735';
                break;
            default:
                return;
        }

        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

    // Telefon arama fonksiyonu
    const makePhoneCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // Telefon numaraları
    const phoneNumbers = {
        anaokulu: '05068891431',
        ilkokul: '05068891431',
        ortaokul: '05068891431',
        lise: '05068891430',
        ibbilim: '05540206735',
    };

    return (
        <div className="whatsapp-container">
            <div className="whatsapp-button" onClick={toggleMenu}>
                <img src={whatsappIcon} alt="WhatsApp" />
            </div>

            {isMenuOpen && (
                <div className="main-menu">
                    <div className="menu-item" onClick={() => handleMainOptionClick('whatsapp')}>
                        {t('whatsapp')}
                    </div>
                    <div className="menu-item" onClick={() => handleMainOptionClick('phone')}>
                        {t('phone')}
                    </div>
                </div>
            )}

            {isSubMenuOpen && selectedOption === 'whatsapp' && (
                <div className="sub-menu">
                    <div className="menu-item" onClick={() => redirectToWhatsApp('anaokulu')}>
                        {t('preschool_main')}
                    </div>
                    <div className="menu-item" onClick={() => redirectToWhatsApp('ilkokul')}>
                        {t('primaryschool')}
                    </div>
                    <div className="menu-item" onClick={() => redirectToWhatsApp('ortaokul')}>
                        {t('secondaryschool')}
                    </div>
                    <div className="menu-item" onClick={() => redirectToWhatsApp('lise')}>
                        {t('highschool')}
                    </div>
                    <div className="menu-item" onClick={() => redirectToWhatsApp('ibbilim')}>
                        {t('ib_scinece_whatsapp')}
                    </div>
                </div>
            )}

            {isSubMenuOpen && selectedOption === 'phone' && (
                <div className="sub-menu">
                    <div
                        className="menu-item"
                        onClick={() => makePhoneCall(phoneNumbers.anaokulu)}
                    >
                        {t('preschool_main')}: {phoneNumbers.anaokulu}
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => makePhoneCall(phoneNumbers.ilkokul)}
                    >
                        {t('primaryschool')}: {phoneNumbers.ilkokul}
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => makePhoneCall(phoneNumbers.ortaokul)}
                    >
                        {t('secondaryschool')}: {phoneNumbers.ortaokul}
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => makePhoneCall(phoneNumbers.lise)}
                    >
                        {t('highschool')}: {phoneNumbers.lise}
                    </div>
                    <div
                        className="menu-item"
                        onClick={() => makePhoneCall(phoneNumbers.ibbilim)}
                    >
                        {t('ib_scinece_whatsapp')}: {phoneNumbers.ibbilim}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsApp;
