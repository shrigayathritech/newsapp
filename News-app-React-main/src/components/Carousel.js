import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Assuming you use slick-carousel
import './Carousel.css';

const Carousel = ({ type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let apiUrl;
      if (type === 'top-stories') {
        apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b3eb7536ce631f8a909a7b672d5b30e8`;
      }

      try {
        const response = await axios.get(apiUrl);
        setItems(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [type]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="carousel">
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <img src={item.urlToImage} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
