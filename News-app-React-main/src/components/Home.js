// src/components/Home.js
import React, { useState } from 'react';
import './Home.css';
import TopStories from './TopStories';
import HotNews from './HotNews';
import CountrySelector from './CountrySelector';

const Home = () => {
  const [country, setCountry] = useState('in'); // Default country code

  return (
    <div className="home-container">
      <CountrySelector onCountrySelect={setCountry} />
      <div className="home-content">
        <TopStories country={country} />
        <HotNews country={country} />
      </div>
    </div>
  );
};

export default Home;
