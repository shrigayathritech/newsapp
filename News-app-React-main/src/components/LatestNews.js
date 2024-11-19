import React, { useState } from 'react';
import './commonstyle.css';
import NewsHighlight from './NewsHighlight';
import CountrySelector from './CountrySelector'; // Import CountrySelector
import LanguageSelector from './LanguageSelector'; // Import LanguageSelector

const LatestNews = () => {
  const [country, setCountry] = useState('in'); // Default country code
  const [language, setLanguage] = useState('en'); // Default language code

  const apiKey = 'b3eb7536ce631f8a909a7b672d5b30e8'; // Your GNews API key

  // API URL for fetching latest news
  const apiUrlLatestNews = `https://gnews.io/api/v4/top-headlines?country=${country}&lang=${language}&apikey=${apiKey}`;

  return (
    <div className="page-container">
      {/* Country and Language selectors container */}
      <div className="selectors">
        <CountrySelector onCountrySelect={setCountry} setLanguage={setLanguage} /> {/* Set country and reset language if needed */}
        <LanguageSelector country={country} onLanguageSelect={setLanguage} /> {/* Handle language selection */}
      </div>

      {/* Header and News Content */}
      <h1 className="page-header">Latest News</h1>
      <NewsHighlight apiUrl={apiUrlLatestNews} />
    </div>
  );
};

export default LatestNews;
