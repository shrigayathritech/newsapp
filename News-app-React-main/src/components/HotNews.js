// src/components/HotNews.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HotNews.css'; // Import custom styles

const HotNews = ({ country }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'b3eb7536ce631f8a909a7b672d5b30e8';
  const apiUrl = `https://gnews.io/api/v4/top-headlines?country=${country}&lang=en&apikey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      }
    };
    fetchNews();
  }, [apiUrl, country]);

  const defaultImage = process.env.PUBLIC_URL + '/images/default-image.jpg';

  return (
    <div className="hot-news-container">
      <h2>Hot News</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="hot-news-grid">
          {news.map((article, index) => (
            <div key={index} className="hot-news-card">
              <img
                src={article.image || defaultImage}
                alt={article.title}
                className="hot-news-image"
              />
              <div className="hot-news-content">
                <h3 className="hot-news-title">{article.title}</h3>
                <p className="hot-news-description">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotNews;
