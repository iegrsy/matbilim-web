import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Staff.css';

// İlkokul öğretmenleri
import ilkokul_suat_aydin from '../staff/ilkokul/SUAT AYDIN İLKOKUL ORTAOKUL MÜDÜRÜ-Principal_.jpg'
import ilkokul_aycan_ozcan from '../staff/ilkokul/AYCAN ÖZCAN- GÖRSEL SANATLAR ÖĞRETMENİ-art teacher.jpg'
import ilkokul_burak_camkiran from '../staff/ilkokul/BURAK CAMKIRAN- MÜZİK ÖĞRETMENİ-music teacher.jpg'
import ilkokul_ceren_ozbay from '../staff/ilkokul/CEREN ÖZBAY-İNGİLİZCE-english teacher.jpg'
import ilkokul_cigdem_kinik from '../staff/ilkokul/ÇİĞDEM KINIK- REHBERLİK KORDİNATÖRÜ-guidance counselor.jpg'
import ilkokul_dilara_akar from '../staff/ilkokul/DİLARA AKAR- BİLİŞİM TEKNOLOJİLERİ VE YAZILIM ÖĞRETMENİ-IT AND SOFTWARE TEACHER.jpg'
import ilkokul_kubra_bayram from '../staff/ilkokul/DİN KÜLTÜRÜ VE AHLAK BİLGİSİ_kübra bayram-CReligious and Moral knowledge Teacher.jpg'
import ilkokul_ercan_gungor from '../staff/ilkokul/ERCAN GÜNGÖR- SINIF ÖĞRETMENİ-CLASSROOM TEACHER.jpg'
import ilkokul_kemal_ay from '../staff/ilkokul/KEMAL AY- SINIF ÖĞRETMENİ-CLASSROOM TEACHER.jpg'
import ilkokul_kezban_atasoy from '../staff/ilkokul/KEZBAN ATASOY-GÜVENLİK GÖREVLİSİ-SECURİTY OFFFİCER.jpg'
import ilkokul_nevra_evinc from '../staff/ilkokul/NEVRA EVİNÇ- İNGİLİZCE-english teacher.jpg'
import ilkokul_hilal_caner_arpa from '../staff/ilkokul/ÖĞRENCİ İŞLERİ PERSONELİ_HİLAL CANER ARPA-STUDENT AFFAİR.jpg'
import ilkokul_pelin_sirin from '../staff/ilkokul/PELİN ŞİRİN- İNGİLİZCE-ENGLİSH TEACHER.jpg'
import ilkokul_yagmur_akin from '../staff/ilkokul/YAĞMUR AKIN- SINIF ÖĞRETMENİ-CLASSROOM TEACHERS.jpg'

// Ortaokul öğretmenleri
import ortaokul_damla_canbolat from '../staff/ortaokul/DAMLA CANBOLAT- MATEMATİK-Mathematics Teacher_.jpg'
import ortaokul_duygu_yarar from '../staff/ortaokul/DUYGU YARAR- TÜRKÇE-TURKİSH TEACHER.jpg'
import ortaokul_ezgi_yilmaz from '../staff/ortaokul/EZGİ YILMAZ- İNGİLİZCE-ENGLİSH TEACHER.png'
import ortaokul_hande_gonul_gunduz from '../staff/ortaokul/HANDE GÖNÜL GÜNDÜZ-SOSYAL BİLGİLER-social studies teacher_.jpg'
import ortaokul_muhammed_akyuz from '../staff/ortaokul/MUHAMMED AKYÜZ- MATEMATİK-Mathematics Teacher_.jpg'
import ortaokul_nihal_caner_baybas from '../staff/ortaokul/NİHAL CANER BAYBAŞ-BEDEN EĞİTİMİ-Physical Education Teacher.jpg'
import ortaokul_sebile_sagir from '../staff/ortaokul/SEBİLE SAĞIR-FEN-SCİENCE TEACHER.jpg'

// Lise öğretmenleri
import lise_gonul_koparal from '../staff/lise/gönül koparal coğrafya-LİSE MÜDÜRÜ-KAMPÜS SORUMLUSU - Geography Teacher_ School Principal and Campus Manager.jpg'
import lise_nuket_akyuz from '../staff/lise/NUKET AKYÜZ- LİSE MÜDÜR YARDIMCISI - Assistant Principal.jpg'
import lise_ahmet_yasar_demirkol from '../staff/lise/AHMET YAŞAR DEMİRKOL-Fizik- Physics Teacher.jpg'
import lise_ali_haydar_aydogan from '../staff/lise/ali haydar aydoğan-fizik öğretmeni- Physics Teacher.png'
import lise_alper_ozkaya from '../staff/lise/ALPER ÖZKAYA-FİZİK ÖĞRETMENİ-Physics Teacher.jpg'
import lise_aylin_tutar from '../staff/lise/AYLİN TUTAR- KİMYA ÖĞRETMENİ- Chemistry Teacher.jpg'
import lise_bugra_kazmaz from '../staff/lise/BUĞRA KAZMAZ-biyoloji öğretmeni- Biology Teacher_.jpg'
import lise_burcin_koc from '../staff/lise/BURÇİN KOÇ- YURT DIŞI EĞİTİM DANIŞMANI- İnternational Affairs Advisor_.jpg'
import lise_burak_ustun from '../staff/lise/COMPUTER SCİENCE TEACHER-burak üstün.png'
import lise_dilara_akar from '../staff/lise/DİLARA AKAR- BİLİŞİM TEKNOLOJİLERİ VE YAZILIM- IT and Software teacher.jpg'
import lise_dilara_karabay from '../staff/lise/DİLARA KARABAY-TÜRKÇE ÖĞRETMENİ- Turkish Teacher.jpg'
import lise_kubra_bayram from '../staff/lise/DİN KÜLTÜRÜ VE AHLAK BİLGİSİ_kübra bayram- Religious and Moral knowledge Teacher.jpg'
import lise_elif_deniz_atici from '../staff/lise/ELİF DENİZ ATICI- KLİNİK PSİKOLOG- Counselling psychologist_.jpg'
import lise_elif_ozdilek from '../staff/lise/ELİF ÖZDİLEK- İNGİLİZCE ÖĞRETMENİ- English Teacher.jpg'
import lise_elvan_hekımoglu from '../staff/lise/elvan hekimoğlu-biyoloji- Biology Teacher -_.png'
import lise_emre_soysal from '../staff/lise/EMRE SOYSAL-COĞRAFYA- Geography Teacher.jpg'
import lise_eren_cetin from '../staff/lise/eren çetin-matematik- Mathematics Teacher.png'
import lise_esat_akin from '../staff/lise/esat akın- Mathematics Teacher.png'
import lise_esra_arslan from '../staff/lise/ESRA ARSLAN- Mathematics Teacher_.jpg'
import lise_esra_duzen from '../staff/lise/esra düzen-REHBERLİK ÖĞRETMENİ -  School Counselor.jpg'
import lise_ahmet_tutar from '../staff/lise/FİZİK_ahmet tutar - Physics Teacher.jpg'
import lise_gulsah_saratli from '../staff/lise/GÜLŞAH SARATLI- İNGİLİZCE ÖĞRETMENİ - English Teacher.jpg'
import lise_irem_caglar from '../staff/lise/irem çağlar-tarih öğretmeni - History Teacher.jpg'
import lise_irem_ozcan_kaya from '../staff/lise/İREM ÖZCAN KAYA- PSİKOLOJİ ÖĞRETMENİ - Psychology Teacher.jpg'
import lise_isil_esra_atmaca from '../staff/lise/IŞIL ESRA ATMACA-BİYOLOJİ ÖĞRETMENİ - Biology Teacher.jpg'
import lise_kenan_soycan from '../staff/lise/KENAN SOYCAN-FİZİK ÖĞRETMENİ - Physics Teacher.jpg'
import lise_kezban_atasoy from '../staff/lise/KEZBAN ATASOY- GÜVENLİK GÖREVLİSİ - Security officer.jpg'
import lise_ikram_demir from '../staff/lise/MATEMATİK_ikram demir - Mathematics Teacher.jpg'
import lise_kemal_copur from '../staff/lise/MATEMATİK_kemal çopur -  Mathematics Teacher.jpg'
import lise_selmin_kok from '../staff/lise/MATEMATİK_selmin köK -  Mathematics Teacher.jpg'
import lise_turgut_demir from '../staff/lise/MATEMATIK_turgut demir -  Mathematics Teacher.jpg'
import lise_mehmet_cakir from '../staff/lise/MEHMET ÇAKIR-TÜRKÇE ÖĞRETMENİ - Turkish Teacher.jpg'
import lise_mustafa_atalay from '../staff/lise/mustafa atalay-fizik öğretmeni - Physics Teacher.png'
import lise_mustafa_aydogan from '../staff/lise/MUSTAFA AYDOĞAN- BEDEN EĞİTİMİ - Physical Education Teacher.jpg'
import lise_mine_altunisik from '../staff/lise/ÖĞRENCİ İŞLERİ_MİNE ALTUNIŞIK - Student affairs.jpg'
import lise_seher_reyhani from '../staff/lise/SEHER REYHANİ-KİMYA - Chemistry Teacher.jpg'
import lise_ugur_karabalak from '../staff/lise/Uğur KARABALAK-TÜRKÇE ÖĞRETMENİ - Turkish Teacher.jpg'
import lise_umit_ozdilek from '../staff/lise/ümit özdilek-matematik - Mathematics Teacher.png'
import lise_zuhal_baloglu from '../staff/lise/zuhal baloğlu-türkçe - Turkish Teacher.png'

// KURS öğretmenleri
import kurs_esra_duzen from '../staff/KURS/ESRA DÜZEN KURS MÜDÜR YARDIMCISI.jpg'
import kurs_gonul_koparal from '../staff/KURS/gönül koparal KURS okul müdürü.jpeg'
import kurs_ilker_nafile from '../staff/KURS/İLKER İHSAN RECEP NAFİLE KURUCU.jpg'

// KURS/lise alt klasöründeki dosyalar
import kurs_lise_bulent_tekin from '../staff/KURS/lise/bülent tekin lise müdür yardımcısı.jpeg'
import kurs_lise_celalettin_sezgin from '../staff/KURS/lise/celalettin sezgin fizik.jpg'
import kurs_lise_cemil_bilgic from '../staff/KURS/lise/CEMİL ERDEM BİLGİÇ İNGİLİZCE LİSE.jpg'
import kurs_lise_fuat_ertugrul from '../staff/KURS/lise/fuat ertuğrul biyoloji lise.jpeg'
import kurs_lise_hanife_guney from '../staff/KURS/lise/hanife güney türk dili ve edebiyatı lise.jpeg'
import kurs_lise_irem_caglar from '../staff/KURS/lise/irem çağlar ölçme değerlendirme uzmanı.jpeg'
import kurs_lise_jale_celik from '../staff/KURS/lise/jale çelik biyoloji lise.jpeg'
import kurs_lise_mert_duzen from '../staff/KURS/lise/mert düzen tarih.jpeg'
import kurs_lise_mustafa_merdan_demir from '../staff/KURS/lise/mustafa merdan demir coğrafya lise.jpeg'

function Staff() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState("management");
    const [selectedImage, setSelectedImage] = useState(null);

    // İlkokul ve Ortaokul öğretmenleri (birleştirilmiş)
    const primaryTeachers = [
        { name: t('Suat AYDIN'), role: t('İlkokul & Ortaokul Müdürü'), image: ilkokul_suat_aydin },
        { name: t('Çiğdem KINIK'), role: t('Rehber Öğretmen ve Psikolojik Danışman'), image: ilkokul_cigdem_kinik },
        { name: t('Ercan GÜNGÖR'), role: t('Sınıf Öğretmeni'), image: ilkokul_ercan_gungor },
        { name: t('Kemal AY'), role: t('Sınıf Öğretmeni'), image: ilkokul_kemal_ay },
        { name: t('Yağmur AKIN'), role: t('Sınıf Öğretmeni'), image: ilkokul_yagmur_akin },
        { name: t('Damla ERDOĞAN CANBOLAT'), role: t('Matematik Öğretmeni'), image: ortaokul_damla_canbolat },
        { name: t('Muhammed AKYÜZ'), role: t('Matematik Öğretmeni'), image: ortaokul_muhammed_akyuz },
        { name: t('Ceren ÖZBAY'), role: t('İngilizce Öğretmeni'), image: ilkokul_ceren_ozbay },
        { name: t('Nevra EVİNÇ'), role: t('İngilizce Öğretmeni'), image: ilkokul_nevra_evinc },
        { name: t('Pelin ŞİRİN'), role: t('İngilizce Öğretmeni'), image: ilkokul_pelin_sirin },
        { name: t('Ezgi YILMAZ'), role: t('İngilizce Öğretmeni'), image: ortaokul_ezgi_yilmaz },
        { name: t('Hande Gönül GÜNDÜZ'), role: t('Sosyal Bilgiler Öğretmeni'), image: ortaokul_hande_gonul_gunduz },
        { name: t('Duygu YARAR'), role: t('Türkçe Öğretmeni'), image: ortaokul_duygu_yarar },
        { name: t('Sebile SAĞIR'), role: t('Fen Bilimleri Öğretmeni'), image: ortaokul_sebile_sagir },
        { name: t('Aycan ÖZCAN'), role: t('Görsel Sanatlar Öğretmeni'), image: ilkokul_aycan_ozcan },
        { name: t('Dilara AKAR'), role: t('Bilişim Teknolojileri Öğretmeni'), image: ilkokul_dilara_akar },
        { name: t('Nihal Caner BAYBAŞ'), role: t('Beden Eğitimi Öğretmeni'), image: ortaokul_nihal_caner_baybas },
        { name: t('Burak CAMKIRAN'), role: t('Müzik Öğretmeni'), image: ilkokul_burak_camkiran },
        { name: t('Kübra BAYRAM'), role: t('Din Kültürü ve Ahlak Bilgisi Öğretmeni'), image: ilkokul_kubra_bayram },
        { name: t('Hilal Caner ARPA'), role: t('Öğrenci İşleri'), image: ilkokul_hilal_caner_arpa },
        { name: t('Kezban ATASOY'), role: t('Güvenlik Görevlisi'), image: ilkokul_kezban_atasoy },
    ];

    // Lise öğretmenleri
    const highSchoolTeachers = [
        { name: t('Gönül KOPARAL'), role: t('Okul Müdürü'), image: lise_gonul_koparal },
        { name: t('Nuket AKYÜZ'), role: t('Lise Müdür Yardımcısı'), image: lise_nuket_akyuz },
        { name: t('Esra DÜZEN'), role: t('Rehber Öğretmen ve Psikolojik Danışman'), image: lise_esra_duzen },
        { name: t('İrem Özcan KAYA'), role: t('Psikoloji Öğretmeni'), image: lise_irem_ozcan_kaya },
        { name: t('Elif Deniz ATICI'), role: t('Klinik Psikolog'), image: lise_elif_deniz_atici },
        { name: t('Selmin KÖK'), role: t('Matematik Öğretmeni'), image: lise_selmin_kok },
        { name: t('Kemal ÇOPUR'), role: t('Matematik Öğretmeni'), image: lise_kemal_copur },
        { name: t('Turgut DEMİR'), role: t('Matematik Öğretmeni'), image: lise_turgut_demir },
        { name: t('İkram DEMİR'), role: t('Matematik Öğretmeni'), image: lise_ikram_demir },
        { name: t('Eren ÇETİN'), role: t('Matematik Öğretmeni'), image: lise_eren_cetin },
        { name: t('Esat AKIN'), role: t('Matematik Öğretmeni'), image: lise_esat_akin },
        { name: t('Esra ARSLAN'), role: t('Matematik Öğretmeni'), image: lise_esra_arslan },
        { name: t('Ümit ÖZDİLEK'), role: t('Matematik Öğretmeni'), image: lise_umit_ozdilek },
        { name: t('Aylin TUTAR'), role: t('Kimya Öğretmeni'), image: lise_aylin_tutar },
        { name: t('Seher REYHANİ'), role: t('Kimya Öğretmeni'), image: lise_seher_reyhani },
        { name: t('Ahmet TUTAR'), role: t('Fizik Öğretmeni'), image: lise_ahmet_tutar },
        { name: t('Celalettin SEZGİN'), role: t('Fizik Öğretmeni'), image: kurs_lise_celalettin_sezgin },
        { name: t('Ahmet Yaşar DEMİRKOL'), role: t('Fizik Öğretmeni'), image: lise_ahmet_yasar_demirkol },
        { name: t('Ali Haydar AYDOĞAN'), role: t('Fizik Öğretmeni'), image: lise_ali_haydar_aydogan },
        { name: t('Alper ÖZKAYA'), role: t('Fizik Öğretmeni'), image: lise_alper_ozkaya },
        { name: t('Kenan SOYCAN'), role: t('Fizik Öğretmeni'), image: lise_kenan_soycan },
        { name: t('Mustafa ATALAY'), role: t('Fizik Öğretmeni'), image: lise_mustafa_atalay },
        { name: t('Jale ÇELİK'), role: t('Biyoloji Öğretmeni'), image: kurs_lise_jale_celik },
        { name: t('Fuat ERTUĞRUL'), role: t('Biyoloji Öğretmeni'), image: kurs_lise_fuat_ertugrul },
        { name: t('Buğra KAZMAZ'), role: t('Biyoloji Öğretmeni'), image: lise_bugra_kazmaz },
        { name: t('Elvan HEKİMOĞLU'), role: t('Biyoloji Öğretmeni'), image: lise_elvan_hekımoglu },
        { name: t('Işıl Esra ATMACA'), role: t('Biyoloji Öğretmeni'), image: lise_isil_esra_atmaca },
        { name: t('Mehmet ÇAKIR'), role: t('Türkçe Öğretmeni'), image: lise_mehmet_cakir },
        { name: t('Dilara KARABAY'), role: t('Türkçe Öğretmeni'), image: lise_dilara_karabay },
        { name: t('Uğur KARABALAK'), role: t('Türk Dili ve Edebiyatı Öğretmeni'), image: lise_ugur_karabalak },
        { name: t('Hanife GÜNEY'), role: t('Türk Dili ve Edebiyatı Öğretmeni'), image: kurs_lise_hanife_guney },
        { name: t('Zuhal BALOĞLU'), role: t('Türkçe Öğretmeni'), image: lise_zuhal_baloglu },
        { name: t('Mert DÜZEN'), role: t('Tarih Öğretmeni'), image: kurs_lise_mert_duzen },
        { name: t('İrem ÇAĞLAR'), role: t('Tarih Öğretmeni'), image: lise_irem_caglar },
        { name: t('Emre SOYSAL'), role: t('Coğrafya Öğretmeni'), image: lise_emre_soysal },
        { name: t('Mustafa Merdan DEMİR'), role: t('Coğrafya Öğretmeni'), image: kurs_lise_mustafa_merdan_demir },
        { name: t('Kübra BAYRAM'), role: t('Din Kültürü ve Ahlak Bilgisi Öğretmeni'), image: lise_kubra_bayram },
        { name: t('Cemil Erdem BİLGİÇ'), role: t('İngilizce Öğretmeni'), image: kurs_lise_cemil_bilgic },
        { name: t('Elif ÖZDİLEK'), role: t('İngilizce Öğretmeni'), image: lise_elif_ozdilek },
        { name: t('Gülşah SARATLI'), role: t('İngilizce Öğretmeni'), image: lise_gulsah_saratli },
        { name: t('İrem ÇAĞLAR'), role: t('Ölçme Değerlendirme Uzmanı'), image: kurs_lise_irem_caglar },
        { name: t('Mustafa AYDOĞAN'), role: t('Beden Eğitimi Öğretmeni'), image: lise_mustafa_aydogan },
        { name: t('Dilara AKAR'), role: t('Bilişim Teknolojileri Öğretmeni'), image: lise_dilara_akar },
        { name: t('Burak ÜSTÜN'), role: t('Bilişim Teknolojileri Öğretmeni'), image: lise_burak_ustun },
        { name: t('Burçin KOÇ'), role: t('Yurt Dışı Eğitim Danışmanı'), image: lise_burcin_koc },
        { name: t('Mine ALTUNIŞIK'), role: t('Öğrenci İşleri'), image: lise_mine_altunisik },
        { name: t('Kezban ATASOY'), role: t('Güvenlik Görevlisi'), image: lise_kezban_atasoy },
    ];

    // Yönetim kadrosu
    const management = [
        { name: t('Gönül KOPARAL'), role: t('OKUL MÜDÜRÜ'), image: kurs_gonul_koparal },
        { name: t('Bülent TEKİN'), role: t('LİSE MÜDÜR YARDIMCISI'), image: kurs_lise_bulent_tekin },
        { name: t('Esra DÜZEN'), role: t('KURS MÜDÜR YARDIMCISI'), image: kurs_esra_duzen },
    ];

    // Kurucu
    const founder = {
        name: t('İlker İhsan Recep NAFİLE'),
        role: t('KURUCU'),
        image: kurs_ilker_nafile,
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
