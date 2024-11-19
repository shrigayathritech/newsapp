import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsHighlight.css';
import Reaction from './Reaction'; // Import the Reaction component
import Share from './Share'; // Import the Share component

const NewsHighlight = ({ apiUrl }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Path to the default image in the public folder
  const defaultImage = process.env.PUBLIC_URL + '/images/newscover.avif';

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
  }, [apiUrl]);

  const fetchArticleContent = async (articleUrl) => {
    try {
      const response = await axios.get(articleUrl);
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, 'text/html');
      const image = doc.querySelector('meta[property="og:image"]');
      return image ? image.content : null;
    } catch (error) {
      console.error('Error fetching article content:', error);
      return null;
    }
  };

  return (
    <div className="news-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        news.map((article, index) => (
          <div key={index} className="news-highlight">
            <h1>{article.title}</h1>
            <img
              src={article.image || defaultImage}
              alt={article.title}
              className="news-image"
              onError={async (e) => {
                const coverImage = await fetchArticleContent(article.url);
                e.target.src = coverImage || defaultImage;
              }}
            />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read more
            </a>
            <Reaction articleId={article.url} />
            <Share articleUrl={article.url} articleTitle={article.title} />
          </div>
        ))
      )}
    </div>
  );
};

export default NewsHighlight;
