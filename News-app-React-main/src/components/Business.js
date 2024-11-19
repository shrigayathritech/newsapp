import React, { useState } from 'react';
import './commonstyle.css';
import NewsHighlight from './NewsHighlight';
import CountrySelector from './CountrySelector';
import LanguageSelector from './LanguageSelector'; 

const Business = () => {
  const [country, setCountry] = useState('in'); 
  const [language, setLanguage] = useState('en');

  const apiKey = 'b3eb7536ce631f8a909a7b672d5b30e8'; 
  const apiUrlBusiness = `https://gnews.io/api/v4/top-headlines?country=${country}&category=business&lang=${language}&apikey=${apiKey}`;

  return (
    <div className="page-container">
      <div className="selectors">
        <CountrySelector onCountrySelect={setCountry} setLanguage={setLanguage} /> {/* Pass setLanguage to CountrySelector */}
        <LanguageSelector country={country} onLanguageSelect={setLanguage} /> {/* Add LanguageSelector */}
      </div>

      <h1 className="page-header">Business News</h1>
      <NewsHighlight apiUrl={apiUrlBusiness} />
    </div>
  );
};

export default Business;
