// Card.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card text-center" style={{ width: '18rem', margin: '0 auto' }}>
      <img src={imageUrl} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
