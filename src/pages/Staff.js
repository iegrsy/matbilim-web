import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Staff.css';
import manager1 from '../staff/high/İLKER İHSAN RECEP NAFİLE MATEMATİK.jpg'
import manager2 from '../staff/high/gönül koparal coğrafya lise.jpeg'
import manager4 from '../staff/high/bülent tekin lise müdür yardımcısı.jpeg'
import blank_teacher from '../staff/primary_secondary/blank_teacher.jpeg'
import manager6 from '../staff/high/esra düzen kurs müdürü.jpeg'
import manager7 from '../staff/high/gönül koparal coğrafya lise ayakta.jpeg'
import teacher_high_1 from '../staff/high/REHBER ÖĞRETMEN_şükran aktan.jpeg'
import teacher_high_2 from '../staff/high/ÖLÇME DEĞERLENDİRME UZMANI_irem çağlar.jpeg'
import teacher_high_3 from '../staff/high/MATEMATİK_ikram demir.jpeg'
import teacher_high_4 from '../staff/high/MATEMATİK_kemal çopur .jpeg'
import teacher_high_5 from '../staff/high/MATEMATİK_selmin kök.jpeg'
import teacher_high_6 from '../staff/high/MATEMATIK_turgut demir.jpeg'
import teacher_high_7 from '../staff/high/İNGİLİZCE_CEMİL ERDEM BİLGİÇ.jpg'
import teacher_high_8 from '../staff/high/TARİH_mert düzen.jpeg'
import teacher_high_9 from '../staff/high/COĞRAFYA_mustafa merdan demir.jpeg'
import teacher_high_10 from '../staff/high/DİN KÜLTÜRÜ VE AHLAK BİLGİSİ_kübra bayram.jpeg'
import teacher_high_11 from '../staff/high/TÜRK DİLİ VE EDEBİYATI_hanife güney.jpeg'
import teacher_high_12 from '../staff/high/TÜRKÇE_mehmet çakır.jpeg'
import teacher_high_13 from '../staff/high/FİZİK_ahmet tutar.jpg'
import teacher_high_14 from '../staff/high/FİZİK_celalettin sezgin.jpg'
import teacher_high_15 from '../staff/high/BİYOLOJİ_fuat ertuğrul.jpeg'
import teacher_high_16 from '../staff/high/BİYOLOJİ_jale çelik.jpeg'
import teacher_high_17 from '../staff/high/KİMYA_aylin tutar.jpeg'
import teacher_high_18 from '../staff/high/BEDEN EĞİTİMİ_MUSTAFA AYDOĞAN.jpg'
import teacher_high_19 from '../staff/high/ÖĞRENCİ İŞLERİ_MİNE ALTUNIŞIK.jpeg'
import teacher_high_20 from '../staff/high/MEMUR_HİLAL CANER ARPA.jpg'
import teacher_high_21 from '../staff/high/İsmet Şimşek Fizik Öğretmeni.jpeg'
import teacher_high_22 from '../staff/high/Uğur KARABALAK.jpeg'

function Staff() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("management");
    const [selectedImage, setSelectedImage] = useState(null);

    const primaryTeachers = [
        { name: t(''), role: t('İlkokul & Ortaokul Müdürü'), image: blank_teacher },
        { name: t(''), role: t('İlkokul & Ortaokul Müdür Yardımcısı'), image: blank_teacher },
        { name: t(''), role: t('Rehber Öğretmen ve Psikolojik Danışman'), image: blank_teacher },
        { name: t(''), role: t('Sınıf Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Sınıf Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Matematik Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Matematik Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('İngilizce Koordinatörü'), image: blank_teacher },
        { name: t(''), role: t('İngilizce Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('İngilizce Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('İngilizce Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('İngilizce Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Sosyal Bilgiler Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Türkçe Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Fen Bilimleri Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Fen Bilimleri Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Görsel Sanatlar Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Bilişim Teknolojileri Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Beden Eğitimi Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Müzik Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Öğrenci İşleri'), image: blank_teacher },
        { name: t(''), role: t('Güvenlik Görevlisi'), image: blank_teacher },
        // Diğer öğretmenler...
    ];

    const highSchoolTeachers = [
        { name: t('Gönül KOPARAL'), role: t('Okul Müdürü'), image: manager7 },
        { name: t('Bülent TEKİN'), role: t('Lise Müdür Yardımcısı'), image: manager4 },
        { name: t('Şükran AKTAN'), role: t('Rehber Öğretmen ve Psikolojik Danışman'), image: teacher_high_1 },
        { name: t('Selmin KÖK'), role: t('Matematik Öğretmeni'), image: teacher_high_5 },
        { name: t('Kemal ÇOPUR'), role: t('Matematik Öğretmeni'), image: teacher_high_4 },
        { name: t('Turgut DEMİR'), role: t('Matematik Öğretmeni'), image: teacher_high_6 },
        { name: t('İkram DEMİR'), role: t('Matematik Öğretmeni'), image: teacher_high_3 },
        { name: t('Fuat ERTUĞRUL'), role: t('Kimya Öğretmeni'), image: teacher_high_15 },
        { name: t('Aylin TUTAR'), role: t('Kimya Öğretmeni'), image: teacher_high_17 },
        { name: t('Ahmet TUTAR'), role: t('Fizik Öğretmeni'), image: teacher_high_13 },
        { name: t('Celalettin SEZGİN'), role: t('Fizik Öğretmeni'), image: teacher_high_14 },
        { name: t('İsmet ŞİMŞEK'), role: t('Fizik Öğretmeni'), image: teacher_high_21 },
        { name: t('Jale ÇELİK'), role: t('Biyoloji Öğretmeni'), image: teacher_high_16 },
        { name: t('Mehmet ÇAKIR'), role: t('Türkçe Öğretmeni'), image: teacher_high_12 },
        { name: t('Hanife GÜNEY'), role: t('Türk Dili ve Edebiyatı Öğretmeni'), image: teacher_high_11 },
        { name: t('Uğur KARABALAK'), role: t('Türk Dili ve Edebiyatı Öğretmeni'), image: teacher_high_22 },
        { name: t('Mert DÜZEN'), role: t('Tarih Öğretmeni'), image: teacher_high_8 },
        { name: t('Mustafa Merdan DEMİR'), role: t('Coğrafya Öğretmeni'), image: teacher_high_9 },
        { name: t('Kübra BAYRAM'), role: t('Din Kültürü ve Ahlak Bilgisi Öğretmeni'), image: teacher_high_10 },
        { name: t('Cemil Erdem BİLGİÇ'), role: t('İngilizce Öğretmeni'), image: teacher_high_7 },
        { name: t('İrem ÇAĞLAR'), role: t('Ölçme Değerlendirme Uzmanı'), image: teacher_high_2 },
        { name: t('Mustafa AYDOĞAN'), role: t('Beden Eğitimi Öğretmeni'), image: teacher_high_18 },
        { name: t(''), role: t('Görsel Sanatlar Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Müzik Öğretmeni'), image: blank_teacher },
        { name: t(''), role: t('Bilişim Teknolojileri Öğretmeni'), image: blank_teacher },
        { name: t('Mine ALTUNIŞIK'), role: t('Öğrenci İşleri'), image: teacher_high_19 },
        { name: t('Hilal CANER ARPA'), role: t('Muhasebe Birimi'), image: teacher_high_20 },

        // Diğer öğretmenler...
    ];

    const management = [
        { name: t('Gönül KOPARAL'), role: t('OKUL MÜDÜRÜ'), image: manager2 },
        { name: t('Bülent TEKİN'), role: t('LİSE MÜDÜR YARDIMCISI'), image: manager4 },
        { name: t('Esra DÜZEN'), role: t('KURS MÜDÜR YARDIMCISI'), image: manager6 },
        // Diğer yönetim üyeleri...
    ];

    const founder = {
        name: t('İlker İhsan Recep NAFİLE'),
        role: t('KURUCU'),
        image: manager1,
    };

    const data =
        activeTab === "primary"
            ? primaryTeachers
            : activeTab === "highSchool"
                ? highSchoolTeachers
                : management;

    return (
        <div>
            <div className="empty-space_init"></div>
            <div className="empty-space"></div>
            <section data-type="component-text">
                <section className="container pt-5 pb-5">
                    <div className="tabs">
                        <button
                            className={activeTab === "management" ? "active" : ""}
                            onClick={() => setActiveTab("management")}
                        >
                            {t('management')}
                        </button>
                        <button
                            className={activeTab === "primary" ? "active" : ""}
                            onClick={() => setActiveTab("primary")}
                        >
                            {t('primary_school')}
                        </button>
                        <button
                            className={activeTab === "highSchool" ? "active" : ""}
                            onClick={() => setActiveTab("highSchool")}
                        >
                            {t('high_school')}
                        </button>

                    </div>

                    {/* Eğer sekme "management" ise kurucuyu göster */}
                    {activeTab === "management" && (
                        <div className="founder-card" onClick={() => setSelectedImage(founder.image)}>
                            <img src={founder.image} alt={founder.name} />
                            <h2>{founder.name}</h2>
                            <p>{founder.role}</p>
                        </div>
                    )}

                    {/* Management ve diğer gruplar */}
                    <div className="grid-container">
                        {data.map((person, index) => (
                            <div
                                key={index}
                                className="teacher-card"
                                onClick={() => setSelectedImage(person.image)}
                            >
                                <img src={person.image} alt={person.name} />
                                <h3>{person.name}</h3>
                                <p>{person.role}</p>
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
        </div>
    );
}

export default Staff;