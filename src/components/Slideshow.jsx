import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "img/img-beranda/slide 1.png",
    "img/img-beranda/slide 2.png",
    "img/img-beranda/slide 3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slideshow-container col-md-8">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide} alt={`slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
   