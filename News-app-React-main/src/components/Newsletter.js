// src/components/Newsletter.js

import React, { useState } from 'react';
import './Newsletter.css'; // Create a separate CSS file for styling

const Newsletter = ({ username, isLoggedIn }) => { // Accept `isLoggedIn` as a prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [interests, setInterests] = useState({
    politics: false,
    entertainment: false,
    business: false,
    latestNews: false,
    hotNews: false,
    technology: false,
    localNews: false,
  });
  const [message, setMessage] = useState('');

  const handleInterestChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLoggedIn) { // Ensure user is logged in
      setMessage('Please log in or sign up to subscribe.');
      return;
    }

    if (!name || !email || !country) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Submit form data to your backend or service
    const selectedInterests = Object.keys(interests).filter((key) => interests[key]);
    alert(`Thank you for subscribing, ${name}! You will receive updates on: ${selectedInterests.join(', ')}`);
    
    // Reset form fields
    setName('');
    setEmail('');
    setCountry('');
    setInterests({
      politics: false,
      entertainment: false,
      business: false,
      latestNews: false,
      hotNews: false,
      technology: false,
      localNews: false,
    });
    setMessage(''); // Clear message
  };

  return (
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        
        <h4>Select your areas of interest:</h4>
        <label>
          <input
            type="checkbox"
            name="politics"
            checked={interests.politics}
            onChange={handleInterestChange}
          />
          Politics
        </label>
        <label>
          <input
            type="checkbox"
            name="entertainment"
            checked={interests.entertainment}
            onChange={handleInterestChange}
          />
          Entertainment
        </label>
        <label>
          <input
            type="checkbox"
            name="business"
            checked={interests.business}
            onChange={handleInterestChange}
          />
          Business
        </label>
        <label>
          <input
            type="checkbox"
            name="latestNews"
            checked={interests.latestNews}
            onChange={handleInterestChange}
          />
          Latest News
        </label>
        <label>
          <input
            type="checkbox"
            name="hotNews"
            checked={interests.hotNews}
            onChange={handleInterestChange}
          />
          Hot News
        </label>
        <label>
          <input
            type="checkbox"
            name="technology"
            checked={interests.technology}
            onChange={handleInterestChange}
          />
          Technology
        </label>
        <label>
          <input
            type="checkbox"
            name="localNews"
            checked={interests.localNews}
            onChange={handleInterestChange}
          />
          Local News
        </label>
        
        <button type="submit">Subscribe</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Newsletter;
