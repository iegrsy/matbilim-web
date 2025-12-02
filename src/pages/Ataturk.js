import React from 'react';
import ataturkData from "../data/AtaturkData";
import "./Ataturk.css";
import Slider from 'react-slick'; // react-slick slider kütüphanesi
import slider1 from '../assets/ataturk_slide1.png';
import slider2 from '../assets/ataturk_slide2.png';
import slider3 from '../assets/ataturk_slide3.png';
function Ataturk() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true
  };

  return (

    <div >
      <Slider {...settings} className="slider-container">
        <div>
          <img src={slider1} alt="slider1" className="img-fluid" />
        </div>
        <div>
          <img src={slider2} alt="slider2" className="img-fluid" />
        </div>
        <div>
          <img src={slider3} alt="slider3" className="img-fluid" />
        </div>

      </Slider>
      <div className="ataturk-rows">
        <h1>Mustafa Kemal Atatürk</h1>

        {ataturkData.map((item, index) => {
          // index çiftse row-left, tekse row-right
          const rowClass = index % 2 === 0 ? "row-left" : "row-right";

          return (
            <div className={`row ${rowClass}`} key={index}>
              <div className="row-image">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="row-quote">
                <p className="quote-text">"{item.quote}"</p>
                <p className="quote-author">{item.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ataturk;