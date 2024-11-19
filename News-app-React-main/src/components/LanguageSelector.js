import React, { useEffect, useState } from 'react';
import './LanguageSelector.css'; 

const LanguageSelector = ({ country, onLanguageSelect }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    
    const defaultLanguages = {
      'in': 'en', 
      'us': 'en',
      'gb': 'en',
      'au': 'en',
      'ca': 'en' 
    };

    setLanguage(defaultLanguages[country]);
    onLanguageSelect(defaultLanguages[country]);
  }, [country, onLanguageSelect]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageSelect(selectedLanguage);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={language} onChange={handleLanguageChange}>
        {country === 'ca' && (
          <>
            <option value="en">English</option>
            <option value="fr">French</option>
          </>
        )}
        {(country === 'us' || country === 'gb' || country === 'au') && (
          <option value="en">English</option>
        )}
        {country === 'in' && (
          <>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option> {/* Add Tamil for India */}
          </>
        )}
      </select>
    </div>
  );
};

export default LanguageSelector;
