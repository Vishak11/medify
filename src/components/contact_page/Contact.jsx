import React, { useState } from 'react';
import Mobile_Icon from '../../assets/Mobile_Icon.png';

const Contact = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle SMS sending logic here
        console.log('Sending SMS to:', phoneNumber);
    };

    return (
        <div className="app-download-container">
            <div className="phones-container">
                <img
                    src={Mobile_Icon}
                    alt="Medify App Interface"
                    className="phone-mockup"
                />
            </div>

            <div className="download-content">
                <h1>
                    Download the <br />
                    <span className="brand-name">Medify</span> App
                </h1>


                <p>Get the link to download the app</p>

                <form onSubmit={handleSubmit} className="phone-form">
                    <div className="input-group">
                        <span className="country-code">+91</span>
                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="sms-button">
                        Send SMS
                    </button>
                </form>

                <div className="store-buttons">
                    <a href="#" className="store-button google-play">
                        <svg viewBox="0 0 24 24" className="store-icon">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="currentColor" />
                        </svg>
                        Google Play
                    </a>
                    <a href="#" className="store-button app-store">
                        <svg viewBox="0 0 24 24" className="store-icon">
                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" fill="currentColor" />
                        </svg>
                        App Store
                    </a>
                </div>
            </div>

            <style jsx>{`
        .app-download-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 100%;
          margin: 0 auto;
          background-color: #e8f1ff; 
        }

        .phones-container {
          flex: 1;
          max-width: 500px;
          position: relative;
          padding: 0px 50px
        }

        .phone-mockup {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .download-content {
          flex: 1;
          padding: 0 40px;
        }

        h1 {
          font-size: 2.5rem;
          color: #14154F;
          margin-bottom: 20px;
        }

        .brand-name {
          color: #2196F3;
        }

        p {
          color: #666;
          margin-bottom: 30px;
        }

        .phone-form {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
        }

        .input-group {
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 5px;
          flex: 1;
        }

        .country-code {
          padding: 8px 12px;
          color: #666;
          border-right: 1px solid #ddd;
        }

        input {
          border: none;
          padding: 8px 12px;
          width: 100%;
          outline: none;
        }

        .sms-button {
          background: #2196F3;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0 30px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .sms-button:hover {
          background: #1976D2;
        }

        .store-buttons {
          display: flex;
          gap: 20px;
        }

        .store-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: transform 0.2s;
        }

        .store-button:hover {
          transform: translateY(-2px);
        }

        .google-play {
          background: #333;
        }

        .app-store {
          background: #000;
        }

        .store-icon {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 768px) {
          .app-download-container {
            flex-direction: column;
            text-align: center;
          }

          .phones-container {
            margin-bottom: 40px;
          }

          .download-content {
            padding: 0;
          }

          .phone-form {
            flex-direction: column;
          }

          .store-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;