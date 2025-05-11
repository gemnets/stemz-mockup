import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Photo4 from '../assets/class_4.jpg';
import Photo5 from '../assets/class_5.jpg';
import Photo6 from '../assets/class_6.jpg';
import Photo7 from '../assets/class_7.PNG';
import Photo8 from '../assets/class_8.jpg';
import Photo9 from '../assets/class_9.jpg';
import './PhotoCarousel.css';

const images = [Photo4, Photo5, Photo6, Photo7, Photo8, Photo9];

const MobilePhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mobile-photo-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <button className="carousel-arrow next" onClick={onClick}>
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="carousel-arrow prev" onClick={onClick}>
    ←
  </button>
);

export default MobilePhotoCarousel;
