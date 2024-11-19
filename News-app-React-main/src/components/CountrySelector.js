import React, { useState, useEffect } from 'react';
import './CountrySelector.css';

const CountrySelector = ({ onCountrySelect, setLanguage }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('in');

  useEffect(() => {
    setCountries([
      { code: 'in', name: 'India' },
      { code: 'us', name: 'United States' },
      { code: 'gb', name: 'United Kingdom' },
      { code: 'au', name: 'Australia' },
      { code: 'ca', name: 'Canada' }
    ]);
  }, []);

  const handleCountryChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    onCountrySelect(countryCode);

    const defaultLanguages = {
      'in': 'en',
      'us': 'en',
      'gb': 'en',
      'au': 'en',
      'ca': 'en'
    };
    setLanguage(defaultLanguages[countryCode]);
  };

  return (
    <div className="country-selector">
      <label htmlFor="country">Select Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelector;
