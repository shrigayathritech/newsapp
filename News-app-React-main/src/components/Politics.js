import React, { useState } from 'react';
import './commonstyle.css'; 
import NewsHighlight from './NewsHighlight';
import CountrySelector from './CountrySelector'; 
import LanguageSelector from './LanguageSelector'; 

const Politics = () => {
  const [country, setCountry] = useState('us'); 
  const [language, setLanguage] = useState('en'); 

  const apiKey = 'b3eb7536ce631f8a909a7b672d5b30e8'; 
  const apiUrlPolitics = `https://gnews.io/api/v4/top-headlines?country=${country}&category=politics&lang=${language}&apikey=${apiKey}`;

  return (
    <div className="page-container">
      {/* Country and Language selectors container */}
      <div className="selectors">
        <CountrySelector onCountrySelect={setCountry} setLanguage={setLanguage} /> {/* Set country and reset language if needed */}
        <LanguageSelector country={country} onLanguageSelect={setLanguage} /> {/* Handle language selection */}
      </div>

      {/* Header and News Content */}
      <h1 className="page-header">Politics News</h1>
      <NewsHighlight apiUrl={apiUrlPolitics} />
    </div>
  );
};

export default Politics;
