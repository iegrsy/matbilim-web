import React from 'react';
import soon from '../assets/soon.png';

function Ataturk() {
  return (
    <div>
      <div className="empty-space_init"></div>
      <div className="empty-space"></div>
      <section className="container pt-5 pb-5 text-center">
        <h2>Burada güzel şeyler olacak. Çok Yakında!</h2>
        {/* Resmi gösteriyoruz */}
        <img src={soon} alt="Soon" className="centered-image" />
      </section>
    </div>
  );
}

export default Ataturk;