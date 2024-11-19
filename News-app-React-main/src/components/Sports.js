import React, { useState } from 'react'; 
import './commonstyle.css'; 
import NewsHighlight from './NewsHighlight';
import CountrySelector from './CountrySelector'; // Import CountrySelector
import LanguageSelector from './LanguageSelector'; // Import LanguageSelector

const Sports = () => {
  const [country, setCountry] = useState('in'); // Default country code
  const [language, setLanguage] = useState('en'); // Default language code

  const apiKey = 'b3eb7536ce631f8a909a7b672d5b30e8'; // Your GNews API key

  // Dynamic API URL for fetching sports news
  const apiUrlSports = `https://gnews.io/api/v4/top-headlines?country=${country}&category=sports&lang=${language}&apikey=${apiKey}`;

  return (
    <div className="page-container">
      {/* Country and Language selectors container */}
      <div className="selectors">
        <CountrySelector onCountrySelect={setCountry} setLanguage={setLanguage} /> {/* Pass setLanguage to CountrySelector */}
        <LanguageSelector country={country} onLanguageSelect={setLanguage} /> {/* Add LanguageSelector */}
      </div>

      {/* Header and News Content */}
      <h1 className="page-header">Sports News</h1>
      <NewsHighlight apiUrl={apiUrlSports} />
    </div>
  );
};

export default Sports;
