import React from 'react';
import './PromoCard.css';

const PromoCard = () => {
  return (
    <div className="promo-container">
      <div className="promo-card">
        <div className="content">
          <h1 className="main-title">This World Oral Health Day,</h1>
          
          <div className="appointment-text">
            <span className="get-text">Get a </span>
            <span className="free-text">FREE</span>
            <span className="get-text"> Appointment</span>
            <span className="asterisk">*</span>
          </div>
          
          <div className="dentist-text">
            with Top Dentists.
          </div>

          <div className="offer-badge">
            LIMITED PERIOD OFFER
          </div>

          <div className="hashtag">
            #BeSensitiveToOralHealth
          </div>

          <div className="terms">
            *T&C Apply - only consultation fee. Procedures / surgeries not covered
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;