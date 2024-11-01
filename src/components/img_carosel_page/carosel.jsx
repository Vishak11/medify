import React, { useState, useEffect } from 'react';
import './styles.css';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/consultation-1.jpg',
      text: 'Get Rs 100 OFF',
      subText: 'On Doctor Consultation',
    },
    {
      id: 2,
      image: '/consultation-2.jpg',
      text: 'FLAT 30% OFF',
      subText: 'ON VIDEO CONSULTATION',
      code: 'USE CODE: FIRST30',
    },
    {
      id: 3,
      image: '/consultation-3.jpg',
      text: 'Get Rs 100 OFF',
      subText: 'On Doctor Consultation',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="slide-content">
              <h2>{slide.text}</h2>
              <p>{slide.subText}</p>
              {slide.code && <p className="code">{slide.code}</p>}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
