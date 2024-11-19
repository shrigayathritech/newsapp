import React, { useState } from 'react';
import './commonstyle.css';
import NewsHighlight from './NewsHighlight';
import CountrySelector from './CountrySelector'; 
import LanguageSelector from './LanguageSelector'; 

const Entertainment = () => {
  const [country, setCountry] = useState('in'); 
  const [language, setLanguage] = useState('en'); 

  const apiKey = 'b3eb7536ce631f8a909a7b672d5b30e8'; 
  const apiUrlEntertainment = `https://gnews.io/api/v4/top-headlines?country=${country}&category=entertainment&lang=${language}&apikey=${apiKey}`;

  return (
    <div className="page-container">
      {/* Country and Language selectors container */}
      <div className="selectors">
        <CountrySelector onCountrySelect={setCountry} setLanguage={setLanguage} /> {/* Pass setLanguage to CountrySelector */}
        <LanguageSelector country={country} onLanguageSelect={setLanguage} /> {/* Add LanguageSelector */}
      </div>

      {/* Header and News Content */}
      <h1 className="page-header">Entertainment News</h1>
      <NewsHighlight apiUrl={apiUrlEntertainment} />
    </div>
  );
};

export default Entertainment;
