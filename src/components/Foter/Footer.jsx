import React from 'react';
import Youtube from '../../assets/Youtube_Icon.png';
import Facebook from '../../assets/Facebook_Icon.png';
import Twitter from '../../assets/Twitter_Icon.png';
import Pinterest from '../../assets/Pinterest_Icon.png';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#0a2351',
    color: 'white',
    padding: '40px 20px 20px',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const socialIconStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  };

  const linkStyle = {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '10px',
  };

  const copyrightStyle = {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    paddingTop: '20px',
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <div style={logoStyle}>
            <span style={{color: '#3b82f6', marginRight: '5px'}}>✓</span> Medify
          </div>
          <div>
           <img src={Youtube} style={socialIconStyle} width={10} height={10}/>
           <img src={Facebook} style={socialIconStyle}/>
           <img src={Pinterest} style={socialIconStyle}/>
           <img src={Twitter} style={socialIconStyle}/>
          </div>
        </div>
        <div style={columnStyle}>
          <a href="#" style={linkStyle}>About Us</a>
          <a href="#" style={linkStyle}>Our Pricing</a>
          <a href="#" style={linkStyle}>Our Gallery</a>
          <a href="#" style={linkStyle}>Appointment</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
        </div>
        <div style={columnStyle}>
          <a href="#" style={linkStyle}>Orthology</a>
          <a href="#" style={linkStyle}>Neurology</a>
          <a href="#" style={linkStyle}>Dental Care</a>
          <a href="#" style={linkStyle}>Ophthalmology</a>
          <a href="#" style={linkStyle}>Cardiology</a>
        </div>
        <div style={columnStyle}>
          <a href="#" style={linkStyle}>About Us</a>
          <a href="#" style={linkStyle}>Our Pricing</a>
          <a href="#" style={linkStyle}>Our Gallery</a>
          <a href="#" style={linkStyle}>Appointment</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
        </div>
        <div style={copyrightStyle}>
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;