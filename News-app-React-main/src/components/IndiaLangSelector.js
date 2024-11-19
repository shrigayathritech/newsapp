import React, { useState, useEffect } from 'react';
import './IndiaLangSelector.css';

const IndiaLangSelector = ({ region, onLanguageSelect }) => {
  const [language, setLanguage] = useState('en');
/* eslint-disable no-dupe-keys */
const regionLanguages = {
  'andhra pradesh': ['te'],
  'arunachal pradesh': ['en'],
  'assam': ['as', 'bn'],
  'bihar': ['hi', 'ur', 'mai'],
  'chhattisgarh': ['hi'],
  'goa': ['ko', 'mr'],
  'gujarat': ['gu'],
  'haryana': ['hi', 'pa'],
  'himachal pradesh': ['hi'],
  'jharkhand': ['hi', 'ur', 'sat'], // Duplicate 'ur'
  'karnataka': ['kn'],
  'kerala': ['ml'],
  'madhya pradesh': ['hi'],
  'maharashtra': ['mr'],
  'manipur': ['mni'],
  'meghalaya': ['kha', 'gar'],
  'mizoram': ['mzo'],
  'nagaland': ['en'],
  'odisha': ['or'],
  'punjab': ['pa'],
  'rajasthan': ['hi'],
  'sikkim': ['ne', 'lep'],
  'tamil nadu': ['ta'],
  'telangana': ['te', 'ur'], // Duplicate 'ur'
  'tripura': ['bn'],
  'uttar pradesh': ['hi', 'ur'], // Duplicate 'ur'
  'uttarakhand': ['hi'],
  'west bengal': ['bn', 'ne'],

  // Union Territories
  'andaman and nicobar islands': ['hi', 'en'],
  'chandigarh': ['hi', 'pa'],
  'dadra and nagar haveli and daman and diu': ['gu', 'mr', 'hi'],
  'lakshadweep': ['ml'],
  'delhi': ['hi', 'pa', 'ur'],
  'jammu and kashmir': ['ur', 'ks', 'hi'], // Duplicate 'ur'
  'ladakh': ['ld'],
  'puducherry': ['ta', 'fr', 'ml', 'te'],
};


  useEffect(() => {
    // Set default language to English on region change
    setLanguage('en');
    onLanguageSelect('en');
  }, [region, onLanguageSelect]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageSelect(selectedLanguage);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={language} onChange={handleLanguageChange}>
        {/* Default option - English */}
        <option value="en">English</option>
        
        {/* Regional languages as additional options */}
        {regionLanguages[region.toLowerCase()]?.map((lang, index) => (
          <option key={index} value={lang}>
            {formatLanguage(lang)}
          </option>
        ))}
      </select>
    </div>
  );
};

// Function to format language codes to readable text
const formatLanguage = (langCode) => {
  const languages = {
    en: 'English',
    hi: 'Hindi',
    te: 'Telugu',
    ta: 'Tamil',
    kn: 'Kannada',
    ml: 'Malayalam',
    mr: 'Marathi',
    gu: 'Gujarati',
    pa: 'Punjabi',
    ur: 'Urdu',
    bn: 'Bengali',
    as: 'Assamese',
    kok: 'Konkani',
    hne: 'Chhattisgarhi',
    mai: 'Maithili',
    sat: 'Santhali',
    mni: 'Manipuri',
    kha: 'Khasi',
    gar: 'Garo',
    lus: 'Mizo',
    lep: 'Lepcha',
    ne: 'Nepali',
    raj: 'Rajasthani',
    skt: 'Sanskrit',
    dv: 'Mahl',
    ur: 'Urdu',
    doi: 'Dogri',
    lb: 'Ladakhi',
    fr: 'French',
    pah: 'Pahari',
  };
  return languages[langCode] || langCode;
};

export default IndiaLangSelector;
