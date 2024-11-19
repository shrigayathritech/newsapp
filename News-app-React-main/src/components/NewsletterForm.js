// File: NewsletterForm.js
import React, { useState } from 'react';
import './NewsletterForm.css';

function NewsletterForm({ user }) {
  const [subscriptionType, setSubscriptionType] = useState('free'); // Default to 'free' subscription
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const categories = ['Politics', 'Technology', 'Sports', 'Entertainment', 'Business', 'Latest News'];

  const handleSubscriptionChange = (event) => {
    setSubscriptionType(event.target.value);
  };

  const handleSingleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleMultiCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category) // Remove if already selected
        : [...prevSelected, category] // Add if not selected
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ensure user is logged in to subscribe
    if (!user) {
      alert('Please log in or sign up to subscribe.');
      return;
    }
    // Process subscription (you can expand this to connect to an API)
    alert(
      `Subscription successful for ${username} (${email}) - Subscription Type: ${subscriptionType}, Categories: ${
        subscriptionType === 'free' ? selectedCategory : selectedCategories.join(', ')
      }`
    );
  };

  return (
    <div className="newsletter-form">
      <h2>Newsletter Subscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <div className="subscription-options">
          <h3>Select Subscription Type:</h3>
          <label>
            <input
              type="radio"
              value="free"
              checked={subscriptionType === 'free'}
              onChange={handleSubscriptionChange}
            />
            Free - Choose 1 category
          </label>
          <label>
            <input
              type="radio"
              value="paid"
              checked={subscriptionType === 'paid'}
              onChange={handleSubscriptionChange}
            />
            Paid - Choose multiple categories (monthly/yearly options)
          </label>
        </div>

        {subscriptionType === 'free' && (
          <div className="category-selection">
            <label>
              Select Category:
              <select value={selectedCategory} onChange={handleSingleCategoryChange} required>
                <option value="">--Select One--</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        {subscriptionType === 'paid' && (
          <div className="category-selection">
            <h3>Select Categories:</h3>
            {categories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleMultiCategoryChange}
                />
                {category}
              </label>
            ))}
          </div>
        )}

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterForm;
