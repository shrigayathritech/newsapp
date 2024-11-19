// src/components/NewsByRegion.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './commonstyle.css'; // Import common styles
import RegionSelector from './RegionSelector';
import IndiaLangSelector from './IndiaLangSelector'; // Import IndiaLangSelector

const NewsByRegion = () => {
  const [news, setNews] = useState([]);
  const [region, setRegion] = useState('all');
  const [language, setLanguage] = useState('en'); // Default language is English

  useEffect(() => {
    const fetchNews = async () => {
      const query = region === 'all' ? 'India' : region;
      try {
        const response = await axios.get('https://gnews.io/api/v4/search', {
          params: {
            q: query,
            lang: language,
            country: 'IN',
            max: 10,
            apikey: 'b3eb7536ce631f8a909a7b672d5b30e8' // Replace with your GNews API key
          }
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [region, language]);

  return (
    <div className="page-container">
      <div className="selectors-inline">
        <RegionSelector onRegionSelect={setRegion} />
        <IndiaLangSelector region={region} onLanguageSelect={setLanguage} />
      </div>
      <h1 className="page-header">Top News for {region === 'all' ? 'India' : region}</h1>
      <div className="news-container">
        {news.length ? (
          news.map((article, index) => (
            <div key={index} className="news-highlight">
              <h1>{article.title}</h1>
              <img
                src={article.image || '/default-image.png'}
                alt={article.title}
                className="news-image"
              />
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsByRegion;
