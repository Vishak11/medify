import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Footer from '../../components/Foter/Footer';
import Contact from '../../components/contact_page/Contact';
import FAQ from '../../components/faq_page/Faq';
import DoctorCard from '../../components/FindDoctors_Card/FinddoctorCard';

const Finddoctor = () => {
  const [searchState, setSearchState] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const navigate = useNavigate();

  const handleMyBookingsClick = () => {
    navigate('/my-bookings'); 
  };

  const styles = {
    banner: {
      backgroundColor: '#33A9FF',
      color: 'white',
      padding: '8px',
      textAlign: 'center',
      fontSize: '14px'
    },
    nav: {
      backgroundColor: 'white',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#33A9FF',
      cursor: 'pointer'
    },
    menu: {
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    },
    menuItem: {
      color: '#666',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer'
    },
    searchContainer: {
      backgroundColor: '#33A9FF',
      padding: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchBox: {
      display: 'flex',
      maxWidth: '800px',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    searchInput: {
      flex: 1,
      padding: '12px',
      border: 'none',
      outline: 'none',
      fontSize: '14px'
    },
    searchButton: {
      backgroundColor: '#33A9FF',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    bookingButton: {
      backgroundColor: '#33A9FF',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    }
  };

  return (
    <div>
       <div className="info-bar">
          The health and well-being of our patients and their health care teams will always be our priority, so we follow the best practices for cleanliness.
        </div>

        <div className="top-nav">
          <div className="nav-content">
            <img src={logo} width="100" height="30" alt="Logo" />
            <nav>
            <Link to="/find-doctors">Find Doctors</Link>
          <Link to="/hospitals">Hospitals</Link>
          <Link to="/medicines">Medicines</Link>
          <Link to="/surgeries">Surgeries</Link>
          <Link to="/software">Software for Provider</Link>
          <Link to="/facilities">Facilities</Link>
            </nav>
            <button className="button" onClick={handleMyBookingsClick}>
          My Bookings
        </button>
          </div>
        </div>
      
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <input 
            style={styles.searchInput} 
            placeholder="State" 
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
          />
          <input 
            style={styles.searchInput} 
            placeholder="City" 
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
          />
          <button style={styles.searchButton}>Search</button>
        </div>
      </div>
      <DoctorCard/>
      <DoctorCard/>
      <DoctorCard/>

      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Finddoctor;