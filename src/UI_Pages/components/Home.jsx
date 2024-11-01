import React, { useState } from 'react';
import '../../App.css';
import doctorImage from '../../assets/doctor_img.png';
import logo from '../../assets/logo.png';
import carouselimg1 from '../../assets/carosel_img1.png';
import carouselimg2 from '../../assets/carosel_img2.png';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeCard, setActiveCard] = useState(1);
  const navigate = useNavigate(); 

  const offers = [
    {
      id: 1,
      image: carouselimg1,
    },
    {
      id: 2,
      image: carouselimg2,
    },
    {
      id: 3,
      image: carouselimg1,
    },
  ];

  const services = [
    { id: 1, icon: '👨‍⚕️', name: 'Doctors' },
    { id: 2, icon: '🔬', name: 'Labs' },
    { id: 3, icon: '🏥', name: 'Hospitals', active: true },
    { id: 4, icon: '💊', name: 'Medical Store' },
    { id: 5, icon: '🚑', name: 'Ambulance' }
  ];

  const handleCardClick = (id) => {
    setActiveCard(id);
  };
  const handleMyBookingsClick = () => {
    navigate('/my-bookings'); 
  };

  return (
    <div className="banner-container">
      {/* Main content */}
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

        <div className="banner-content">
          <div className="text-content">
            <h1>
              Skip the travel! Find Online
              <div className="title-highlight">
                <span>Medical</span>
                <span className="light">Centers</span>
              </div>
            </h1>
            <p>
              Connect instantly with a 24x7 specialist or choose to
              video visit a particular doctor.
            </p>
            <button className="find-centers-btn">
              Find Centers
            </button>
          </div>
          <div className="image-container">
            <img src={doctorImage} alt="Doctors" className="doctors-image" />
          </div>
        </div>
      </div>

      {/* New Layout - Overlapping Content */}
      <div className="overlay-content">
        <div className="overlay-box">
          <div className="search-section">
            <div className="search-inputs">
              <div className="search-field">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="State" />
              </div>
              <div className="search-field">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="City" />
              </div>
              <button className="search-button">Search</button>
            </div>
          </div>

          <div className="services-section">
            <h3>You may be looking for</h3>
            <div className="services-grid">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`service-item ${service.active ? 'active' : ''}`}
                >
                  <div className="service-icon">
                    <i className="fas fa-hospital"></i>
                  </div>
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel section */}
      <div className="offers-container">
        <div className="offers-cards">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="offer-card"
              onClick={() => handleCardClick(offer.id)}
            >
              <div className="card-content">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${offer.image})` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {offers.map((offer) => (
            <button
              key={offer.id}
              className={`pagination-dot ${activeCard === offer.id ? 'active' : ''}`}
              onClick={() => handleCardClick(offer.id)}
              aria-label={`Go to offer ${offer.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
