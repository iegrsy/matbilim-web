/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './Scholarship.css';
import emailjs from 'emailjs-com';
import slider1 from '../../assets/scholarship_image.png';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Tablo için
import { robotoNormal } from './fonts';
function Scholarship() {
  const { t } = useTranslation();
  const location = useLocation();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    studentName: '',
    studentSurname: '',
    tckn: '',
    birthDate: '',
    schoolName: '',
    applicationSchool: '',
    classLevel: '',
    stream: '',
    examDay: '',
    examHour: '',
    gender: '',
    parentName: '',
    parentSurname: '',
    relation: '',
    occupation: '',
    phone: '',
    email: '',
    source: '',
    consent: false,
  });
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.addFileToVFS('Roboto-Regular.ttf', robotoNormal);
    doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal'); // Fontu tanımla
    doc.setFont('Roboto'); // Varsayılan font olarak ayarla

    const leftX = 20; // Sol sütun başlangıç noktası
    const rightX = 110; // Sağ sütun başlangıç noktası
    const lineHeight = 10; // Satırlar arasındaki yükseklik
    let currentY = 40; // İlk satırın başlangıç Y noktası
    const sectionPadding = 5; // Çerçeve kenar boşluğu

    // Başlık
    doc.setFontSize(18);
    doc.text('Sınav Giriş Belgesi', 105, 20, null, null, 'center');

    // Öğrenci Bilgileri Çerçevesi
    doc.setFontSize(12);
    let sectionStartY = currentY;
    doc.text('Öğrenci Bilgileri:', leftX, currentY);
    currentY += lineHeight;

    doc.text(`Ad: ${formData.studentName}`, leftX, currentY);
    doc.text(`Soyad: ${formData.studentSurname}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`TCKN: ${formData.tckn}`, leftX, currentY);
    doc.text(`Doğum Tarihi: ${formData.birthDate}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`Okul Adı: ${formData.schoolName}`, leftX, currentY);
    currentY += lineHeight * 2;

    // Çerçeve çiz (alt çizgi yerine sadece dış hat)
    doc.rect(leftX - sectionPadding, sectionStartY - lineHeight, 170, currentY - sectionStartY + sectionPadding);

    // Sınav Bilgileri Çerçevesi
    sectionStartY = currentY;
    doc.text('Sınav Bilgileri:', leftX, currentY);
    currentY += lineHeight;

    doc.text(`Başvurulan Okul: ${formData.applicationSchool}`, leftX, currentY);
    doc.text(`Sınıf Seviyesi: ${formData.classLevel}`, rightX, currentY);
    currentY += lineHeight;

    if (formData.stream) {
      doc.text(`Alan Seçimi: ${formData.stream}`, leftX, currentY);
      currentY += lineHeight;
    }

    if (formData.examHour) {
      doc.text(`Sınav Saati: ${formData.examHour}`, leftX, currentY);
    }
    if (formData.examDay) {
      doc.text(`Sınav Günü: ${formData.examDay}`, rightX, currentY);
    }
    currentY += lineHeight;

    currentY += lineHeight * 2;

    // Çerçeve çiz (alt çizgi kaldırıldı)
    doc.rect(leftX - sectionPadding, sectionStartY - lineHeight, 170, currentY - sectionStartY + sectionPadding);

    // Veli Bilgileri Çerçevesi
    sectionStartY = currentY;
    doc.text('Veli Bilgileri:', leftX, currentY);
    currentY += lineHeight;

    doc.text(`Ad: ${formData.parentName}`, leftX, currentY);
    doc.text(`Soyad: ${formData.parentSurname}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`Yakınlık: ${formData.relation}`, leftX, currentY);
    doc.text(`Meslek: ${formData.occupation}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`Telefon: ${formData.phone}`, leftX, currentY);
    doc.text(`E-posta: ${formData.email}`, rightX, currentY);
    currentY += lineHeight;

    // Çerçeve çiz (alt çizgi kaldırıldı)
    doc.rect(leftX - sectionPadding, sectionStartY - lineHeight, 170, currentY - sectionStartY + sectionPadding);

    // Belge İndir
    doc.save(`Sınav_Belgesi_${formData.studentName}_${formData.studentSurname}.pdf`);
  };

  const handlePrintPDF = () => {
    const doc = new jsPDF();
    doc.addFileToVFS('Roboto-Regular.ttf', robotoNormal);
    doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
    doc.setFont('Roboto');

    const leftX = 20;
    const rightX = 110;
    const lineHeight = 10;
    let currentY = 40;
    const sectionPadding = 5;

    doc.setFontSize(18);
    doc.text('Sınav Giriş Belgesi', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    let sectionStartY = currentY;
    doc.text('Öğrenci Bilgileri:', leftX, currentY);
    currentY += lineHeight;

    doc.text(`Ad: ${formData.studentName}`, leftX, currentY);
    doc.text(`Soyad: ${formData.studentSurname}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`TCKN: ${formData.tckn}`, leftX, currentY);
    doc.text(`Doğum Tarihi: ${formData.birthDate}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`Okul Adı: ${formData.schoolName}`, leftX, currentY);
    currentY += lineHeight * 2;

    doc.rect(leftX - sectionPadding, sectionStartY - lineHeight, 170, currentY - sectionStartY + sectionPadding);

    sectionStartY = currentY;
    doc.text('Sınav Bilgileri:', leftX, currentY);
    currentY += lineHeight;

    doc.text(`Başvurulan Okul: ${formData.applicationSchool}`, leftX, currentY);
    doc.text(`Sınıf Seviyesi: ${formData.classLevel}`, rightX, currentY);
    currentY += lineHeight;

    if (formData.stream) {
      doc.text(`Alan Seçimi: ${formData.stream}`, leftX, currentY);
      currentY += lineHeight;
    }

    if (formData.examHour) {
      doc.text(`Sınav Saati: ${formData.examHour}`, leftX, currentY);
    }
    if (formData.examDay) {
      doc.text(`Sınav Günü: ${formData.examDay}`, rightX, currentY);
    }
    currentY += lineHeight;

    currentY += lineHeight * 2;

    doc.rect(leftX - sectionPadding, sectionStartY - lineHeight, 170, currentY - sectionStartY + sectionPadding);

    sectionStartY = currentY;
    doc.text('Veli Bilgileri:', leftX, currentY);
    currentY += lineHeight;

    doc.text(`Ad: ${formData.parentName}`, leftX, currentY);
    doc.text(`Soyad: ${formData.parentSurname}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`Yakınlık: ${formData.relation}`, leftX, currentY);
    doc.text(`Meslek: ${formData.occupation}`, rightX, currentY);
    currentY += lineHeight;

    doc.text(`Telefon: ${formData.phone}`, leftX, currentY);
    doc.text(`E-posta: ${formData.email}`, rightX, currentY);
    currentY += lineHeight;

    doc.rect(leftX - sectionPadding, sectionStartY - lineHeight, 170, currentY - sectionStartY + sectionPadding);

    // Yazdır - PDF'i yeni pencerede aç, kullanıcı tarayıcıdan yazdırabilir
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const printWindow = window.open(pdfUrl, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(''); // Gönderim durumu
  const [showPopup, setShowPopup] = useState(false);
  const [showDownloadPopup, setDownloadShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleDownloadSubmit = () => {
    setDownloadShowPopup(true); // Popup'ı aç
  };

  const closeDownloadPopup = () => {
    setDownloadShowPopup(false); // Popup'ı kapat
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    // Eğer examDay değiştiyse, examHour'u sıfırla
    if (name === 'examDay') {
      setFormData({
        ...formData,
        [name]: fieldValue,
        examHour: '', // examHour'u sıfırla
      });
    } else if (name === 'classLevel') {
      // Sınıf seviyesi değiştiğinde, sınav alanlarını ve alan seçimini sıfırla
      setFormData({
        ...formData,
        [name]: fieldValue,
        examDay: '',
        examHour: '',
        stream: '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: fieldValue,
      });
    }

    // Eğer input string ise ve boş değilse hata durumunu kaldır
    if (typeof fieldValue === 'string' && fieldValue.trim() !== '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  // Sınıf seviyesine göre sınav alanlarının gösterilip gösterilmeyeceğini kontrol et
  const shouldShowExamFields = () => {
    const classLevel = formData.classLevel;
    // Kreş, Anaokulu, 1. Sınıf, 2. Sınıf sınava girmiyor
    if (classLevel === 'Kreş' || classLevel === 'Anaokulu' || classLevel === '1. Sınıf' || classLevel === '2. Sınıf') {
      return false;
    }
    return true;
  };

  // Sınıf seviyesine göre alan seçiminin gösterilip gösterilmeyeceğini kontrol et
  const shouldShowStreamField = () => {
    const classLevel = formData.classLevel;
    // Sadece 11. Sınıf için alan seçimi gösterilir
    return classLevel === '11. Sınıf';
  };

  // Sınav gününe göre seans saatlerini döndür
  const getExamHours = () => {
    const examDay = formData.examDay;
    if (examDay === '3 Ocak' || examDay === '4 Ocak' || examDay === '10 Ocak' || examDay === '11 Ocak') {
      return ['10:00', '14:00'];
    } else if (examDay === '5 Ocak' || examDay === '12 Ocak') {
      return ['17:00'];
    }
    return [];
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Zorunlu alanlar
    const requiredFields = ['studentName', 'studentSurname', 'tckn', 'applicationSchool', 'classLevel', 'parentName', 'parentSurname', 'relation', 'phone'];
    
    // Sınav alanları sadece sınava giren sınıflar için zorunlu
    if (shouldShowExamFields()) {
      requiredFields.push('examDay', 'examHour');
    }

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      return;
    }

    setErrors({});

    // EmailJS parametreleri
    const emailParams = {
      studentName: formData.studentName,
      studentSurname: formData.studentSurname,
      tckn: formData.tckn,
      birthDate: formData.birthDate,
      schoolName: formData.schoolName,
      applicationSchool: formData.applicationSchool,
      classLevel: formData.classLevel,
      fieldSelection: formData.stream,
      examDay: formData.examDay,
      examHour: formData.examHour,
      gender: formData.gender,
      parentName: formData.parentName,
      parentSurname: formData.parentSurname,
      relation: formData.relation,
      occupation: formData.occupation,
      phone: formData.phone,
      email: formData.email,
      source: formData.source,
      consent: formData.consent ? 'Evet' : 'Hayır',
    };

    emailjs.send(
      'service_1dalgmr', // Service ID
      'template_mq82dbw', // Template ID
      emailParams, // Doğru parametre
      'oa-6_gZ_ZgQ4EEK3U' // Public Key
    )
      .then(
        (result) => {
          // Başarı mesajını göster
          setShowSuccessMessage(true);
          // 3 saniye sonra başarı mesajını kapat ve popup'ı aç
          setTimeout(() => {
            setShowSuccessMessage(false);
            // Email başarılı olduğunda PDF'i oluştur ve indir
            handleDownloadPDF();
            // Popup'ı tetiklemek için handleDownloadSubmit çağrılır
            handleDownloadSubmit();
          }, 3000);
        },
        (error) => {
          alert('Bir hata oluştu, lütfen tekrar deneyin.');
          console.error('EmailJS Hatası:', error.text);
          setSubmitStatus('error');
        }
      );
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  // Sayfa yüklendiğinde veya popup'tan geldiğinde forma scroll et
  useEffect(() => {
    // URL'de form parametresi varsa veya popup'tan gelindiyse forma scroll et
    if (location.search.includes('form=true') || location.hash === '#form') {
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div>
      <div className="empty-space_init"></div>
      <div class="image-wrapper">
        <img src={slider1} alt="Slide 1" className="image-fix-size" />
      </div>

      <div className="container mt-5">
        <div className="empty-space"></div>
        <div className="empty-space_mid"></div>
        <section className="pt-2 pb-2">
          <div class="btn-toolbar d-flex justify-content-lg-around" role="toolbar" >
            <div class="btn-group button-width-large" role="group" aria-label="Third group">
              <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => (window.location.href = '/our_staff')}>{t('staff')}</button>
            </div>
            <div class="btn-group button-width-large" role="group">
              <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => window.location.href = '/achievement'}>{t('achievement')}</button>
            </div>
            <div class="btn-group button-width-large" role="group">
              <button type="button" className="btn btn-purple-moon btn-rounded" onClick={() => window.open(process.env.PUBLIC_URL + '/pdfs/sinav_yonergesi.pdf', '_blank')}>{t('test_rubric')}</button>
            </div>
            <div class="btn-group button-width-large" role="group">
              <button type="button" className="btn btn-purple-moon btn-rounded" onClick={handlePopupToggle}>{t('exem_subject')}</button>
            </div>
          </div>
        </section>

        <h2 className="text-center">{t('scholarship_form_title')}</h2>
        <form ref={formRef} id="scholarship-form" onSubmit={handleSubmit}>
          <h4>{t('student_and_school_info')}</h4>
          
          {/* Ad ve Soyad - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="studentName">{t('student_name')}*</label>
              <input
                type="text"
                className={`form-control ${errors.studentName ? 'is-invalid' : ''}`}
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="studentSurname">{t('student_surname')}*</label>
              <input
                type="text"
                className={`form-control ${errors.studentSurname ? 'is-invalid' : ''}`}
                id="studentSurname"
                name="studentSurname"
                value={formData.studentSurname}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* TCKN ve Cinsiyet - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="tckn">{t('tckn')}*</label>
              <input
                type="text"
                className={`form-control ${errors.tckn ? 'is-invalid' : ''}`}
                id="tckn"
                name="tckn"
                value={formData.tckn}
                onChange={handleChange}
                maxLength="11"
              />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="gender">{t('gender')}</label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>{t('select')}</option>
                <option value="Erkek">{t('male')}</option>
                <option value="Kadın">{t('female')}</option>
              </select>
            </div>
          </div>

          {/* Doğum Tarihi - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="birthDate">{t('birth_date')}</label>
              <input
                type="text"
                className="form-control"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                placeholder="gg.aa.yyyy"
                onChange={handleChange}
              />
            </div>
          </div>
          <hr className="form-divider" />

          {/* Okul Adı ve Başvuru Yapılan Okul - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="schoolName">{t('school_name')}</label>
              <input
                type="text"
                className="form-control"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="applicationSchool">{t('application_school')}*</label>
              <select
                className={`form-select ${errors.applicationSchool ? 'is-invalid' : ''}`}
                id="applicationSchool"
                name="applicationSchool"
                value={formData.applicationSchool}
                onChange={handleChange}
              >
                <option value="" disabled>{t('select')}</option>
                <option value="Kreş">{t('kindergarten')}</option>
                <option value="Anaokulu">{t('preschool_main')}</option>
                <option value="İlkokul">{t('primaryschool')}</option>
                <option value="Ortaokul">{t('secondaryschool')}</option>
                <option value="Lise">{t('highschool')}</option>
                <option value="IB Bilim Kursu">{t('ib_scinece')}</option>
              </select>
            </div>
          </div>

          {/* Sınıf Seviyesi - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="classLevel">{t('class_level')}*</label>
              <select
                className={`form-select ${errors.classLevel ? 'is-invalid' : ''}`}
                id="classLevel"
                name="classLevel"
                value={formData.classLevel}
                onChange={handleChange}
              >
                <option value="" disabled>{t('select')}</option>
                <option value="Kreş">{t('kindergarten')}</option>
                <option value="Anaokulu">{t('preschool_main')}</option>
                <option value="1. Sınıf">{"1. Sınıf"}</option>
                <option value="2. Sınıf">{"2. Sınıf"}</option>
                <option value="3. Sınıf">{"3. Sınıf"}</option>
                <option value="4. Sınıf">{"4. Sınıf"}</option>
                <option value="5. Sınıf">{"5. Sınıf"}</option>
                <option value="6. Sınıf">{"6. Sınıf"}</option>
                <option value="7. Sınıf">{"7. Sınıf"}</option>
                <option value="8. Sınıf">{"8. Sınıf"}</option>
                <option value="9. Sınıf">{"9. Sınıf"}</option>
                <option value="10. Sınıf">{"10. Sınıf"}</option>
                <option value="11. Sınıf">{"11. Sınıf"}</option>
              </select>
            </div>
            {shouldShowStreamField() && (
              <div className="col-md-6 col-12">
                <label htmlFor="stream">{t('select_stream')}</label>
                <select
                  className="form-select"
                  id="stream"
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                >
                  <option value="" disabled>{t('select')}</option>
                  <option value="TM">TM</option>
                  <option value="MF">MF</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
            )}
          </div>

          <hr className="form-divider" />

          {/* Sınav Günü ve Saati - Tek Satır */}
          {shouldShowExamFields() && (
            <div className="row mb-3">
              <div className="col-md-6 col-12">
                <label htmlFor="examDay">{t('exam_day')}*</label>
                <select
                  className={`form-select ${errors.examDay ? 'is-invalid' : ''}`}
                  id="examDay"
                  name="examDay"
                  value={formData.examDay}
                  onChange={handleChange}
                >
                  <option value="" disabled>{t('select')}</option>
                  <option value="3 Ocak">3 Ocak</option>
                  <option value="4 Ocak">4 Ocak</option>
                  <option value="5 Ocak">5 Ocak</option>
                  <option value="10 Ocak">10 Ocak</option>
                  <option value="11 Ocak">11 Ocak</option>
                  <option value="12 Ocak">12 Ocak</option>
                </select>
              </div>
              <div className="col-md-6 col-12">
                <label htmlFor="examHour">{t('exam_hour')}*</label>
                <select
                  className={`form-select ${errors.examHour ? 'is-invalid' : ''}`}
                  id="examHour"
                  name="examHour"
                  value={formData.examHour}
                  onChange={handleChange}
                  disabled={!formData.examDay || getExamHours().length === 0}
                >
                  <option value="" disabled>{formData.examDay ? t('select') : t('first_select_exam_day')}</option>
                  {getExamHours().map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <hr className="form-divider" />

          <h4>{t('parent_info')}</h4>
          
          {/* Veli Adı ve Soyadı - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="parentName">{t('parent_name')}*</label>
              <input
                type="text"
                className={`form-control ${errors.parentName ? 'is-invalid' : ''}`}
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="parentSurname">{t('parent_surname')}*</label>
              <input
                type="text"
                className={`form-control ${errors.parentSurname ? 'is-invalid' : ''}`}
                id="parentSurname"
                name="parentSurname"
                value={formData.parentSurname}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Yakınlık ve Meslek - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="relation">{t('relation')}*</label>
              <select
                className={`form-select ${errors.relation ? 'is-invalid' : ''}`}
                id="relation"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
              >
                <option value="" disabled>{t('select')}</option>
                <option value="Anne">{t('mother')}</option>
                <option value="Baba">{t('father')}</option>
                <option value="Diğer">{t('other')}</option>
              </select>
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="occupation">{t('occupation')}</label>
              <input
                type="text"
                className="form-control"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Telefon ve E-posta - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="phone">{t('mobile_phone')}*</label>
              <input
                type="text"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="email">{t('email')}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Nereden Duydunuz - Tek Satır */}
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <label htmlFor="source">{t('how_did_you_hear')}</label>
              <select
                className="form-select"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
              >
                <option value="" disabled>{t('select')}</option>
                <option value="internet">{t('internet')}</option>
                <option value="friend">{t('friend')}</option>
                <option value="advertisement">{t('advertisement')}</option>
              </select>
            </div>
          </div>

          <hr className="form-divider" />
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="consent">
              {t('consent_message')}
            </label>
          </div>

          <button type="submit" className="btn btn-primary">{t('submit_button')}</button>
          {submitStatus === 'error' && <p className="text-danger mt-3">{t('submit_error')}</p>}

        </form>

        {/* Başarı Mesajı */}
        {showSuccessMessage && (
          <div className="popup-overlay" style={{ zIndex: 9999 }}>
            <div className="popup-content" style={{ textAlign: 'center', padding: '30px' }}>
              <h3 style={{ color: '#28a745', marginBottom: '20px' }}>Başvurunuz başarıyla alınmıştır. Teşekkür ederiz.</h3>
            </div>
          </div>
        )}


        <div className="empty-space_init"></div>
        {showPopup && (
        <div className="popup-overlay">
          <div className="centered-popup-content">
            <h2>{t('choose_class')}</h2>

            {/* Listelerin olduğu kapsayıcı */}
            <div className="centered-lists-container">
              {/* 1. sütun */}
              <ul>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi2.pdf',
                        '_blank'
                      )
                    }
                  >
                    2. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi3.pdf',
                        '_blank'
                      )
                    }
                  >
                    3. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi4.pdf',
                        '_blank'
                      )
                    }
                  >
                    4. SINIF
                  </a>
                </li>
              </ul>

              {/* 2. sütun */}
              <ul>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi5.pdf',
                        '_blank'
                      )
                    }
                  >
                    5. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi6.pdf',
                        '_blank'
                      )
                    }
                  >
                    6. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi7.pdf',
                        '_blank'
                      )
                    }
                  >
                    7. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/konuDagilimi8.pdf',
                        '_blank'
                      )
                    }
                  >
                    8. SINIF
                  </a>
                </li>
              </ul>

              {/* 3. sütun */}
              <ul>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/9_Konu_Analizi.pdf',
                        '_blank'
                      )
                    }
                  >
                    9. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/10_Konu_Analizi.pdf',
                        '_blank'
                      )
                    }
                  >
                    10. SINIF
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/11_TM_Konu_Analizi.pdf',
                        '_blank'
                      )
                    }
                  >
                    11. SINIF - TM
                  </a>
                </li>
                <li>
                  <a
                    className="scholarship-link"
                    onClick={() =>
                      window.open(
                        process.env.PUBLIC_URL + '/pdfs/11_MF_Konu_Analizi.pdf',
                        '_blank'
                      )
                    }
                  >
                    11. SINIF - MF
                  </a>
                </li>
              </ul>
            </div>

            <button className="btn btn-primary" onClick={handlePopupToggle}>{t('close')}</button>
          </div>
        </div>
      )}

        {showDownloadPopup && (
          <div className="popup-overlay" onClick={closeDownloadPopup}>
            <div className="modern-popup-content" onClick={(e) => e.stopPropagation()}>
              <div className="popup-header">
                <div className="success-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#28a745" opacity="0.1"/>
                    <path d="M9 12l2 2 4-4" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="#28a745" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="popup-title">Ön Kaydınız Başarı İle Alınmıştır</h3>
              </div>
              
              <div className="popup-body">
                <p className="popup-message">{t('exam_document_before')}</p>
              </div>

              <div className="popup-actions">
                <button onClick={handlePrintPDF} className="btn-print">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 14h12v8H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Yazdır
                </button>
                <button onClick={closeDownloadPopup} className="btn-close-popup">
                  {t('close')}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Scholarship;
