import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <MDBFooter style={{ backgroundColor: 'rgb(0, 31, 63)', color: 'white' }}
      className='text-center text-lg-start custom-footer' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h4 style={{ color: 'white' }} className='fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                MatBilim Koleji
              </h4>
              <h4 style={{ color: 'white' }}>Şampiyonluk Bulaşıcıdır.</h4>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 style={{ color: 'white' }} className='text-uppercase fw-bold mb-4'>{t('schools')}</h6>
              <p style={{ color: 'white' }}><a href='/primaryschool/our_system' className='text-reset'>{t('primaryschool')}</a></p>
              <p style={{ color: 'white' }}><a href='/secondaryschool' className='text-reset'>{t('secondaryschool')}</a></p>
              <p style={{ color: 'white' }}><a href='/highschool' className='text-reset'>{t('highschool')}</a></p>
              <p style={{ color: 'white' }}><a href='http://ibbilim.com/' className='text-reset' target='_blank' rel='noopener noreferrer'>{t('ib_scinece')}</a></p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>{t('fast_links')}</h6>
              <p style={{ color: 'white' }}><a href='/scholarship' className='text-reset'>{t('scholarship')}</a></p>
              <p style={{ color: 'white' }}><a href='/our_staff' className='text-reset'>{t('our_staff')}</a></p>
              <p style={{ color: 'white' }}><a href='/corporate' className='text-reset'>{t('corporate_menu')}</a></p>
              <p style={{ color: 'white' }}><a href='/contact' className='text-reset'>{t('contact')}</a></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>{t('contact')}</h6>
              <p style={{ color: 'white' }}><MDBIcon icon="home" className="me-2" /> Mutlukent, 1920. Cadde No:57, 06800 Çankaya/Ankara</p>
              <p style={{ color: 'white' }}><MDBIcon icon="envelope" className="me-3" /> info@matbilimkoleji.com</p>
              <p style={{ color: 'white' }}><MDBIcon icon="phone" className="me-3" /> + 90 554 020 67 35</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgb(0, 31, 63)', color: 'white' }}>
    © 2025 Copyright:&nbsp;
    <a style={{ color: 'lightblue' }} href='https://matbilimkoleji.com/'>MatBilimKoleji.com</a>
</div>

    </MDBFooter>

  );
};

export default Footer;
