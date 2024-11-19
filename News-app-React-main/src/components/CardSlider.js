import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ articles }) => {
  // Default image path
  const defaultImage = process.env.PUBLIC_URL + '/images/coverimage.png';

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFD700", right: '10px' }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FFD700", left: '10px', zIndex: 1 }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    draggable: true,
  };

  return (
    <Slider {...settings} className="card-slider">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <img
            src={article.urlToImage || defaultImage}
            alt={article.title}
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">{article.title}</h3>
            <p className="card-description">{article.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
