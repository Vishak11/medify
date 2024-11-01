import React, { useState, useEffect } from 'react';

const SpecialistCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const specialists = [
    { name: "Dr. Ahmad Khan", specialty: "Neurologist", image: "/placeholder.svg?height=150&width=150" },
    { name: "Dr. Heena Sachdeva", specialty: "Orthopedics", image: "/placeholder.svg?height=150&width=150" },
    { name: "Dr. Ankur Sharma", specialty: "Medicine", image: "/placeholder.svg?height=150&width=150" },
    { name: "Dr. John Doe", specialty: "Cardiologist", image: "/placeholder.svg?height=150&width=150" },
    { name: "Dr. Jane Smith", specialty: "Pediatrician", image: "/placeholder.svg?height=150&width=150" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % specialists.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const specialistStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
  };

  const imageContainerStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, #e6f2ff, #ffffff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const nameStyle = {
    marginTop: '10px',
    fontWeight: 'bold',
  };

  const specialtyStyle = {
    color: '#3b82f6',
  };

  const dotsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#d1d5db',
    margin: '0 5px',
    cursor: 'pointer',
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: '#3b82f6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '20px' }}>Our Medical Specialists</h2>
      <div style={carouselStyle}>
        {specialists.map((specialist, index) => {
          const position = (index - currentIndex + specialists.length) % specialists.length;
          const isVisible = position >= 0 && position < 3;
          return isVisible && (
            <div key={specialist.name} style={specialistStyle}>
              <div style={imageContainerStyle}>
                <img src={specialist.image} alt={specialist.name} style={imageStyle} />
              </div>
              <p style={nameStyle}>{specialist.name}</p>
              <p style={specialtyStyle}>{specialist.specialty}</p>
            </div>
          );
        })}
      </div>
      <div style={dotsStyle}>
        {specialists.map((_, index) => (
          <span
            key={index}
            style={index === currentIndex ? activeDotStyle : dotStyle}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialistCarousel;