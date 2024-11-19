// src/components/LoginSignup.js
import React, { useState } from 'react';
import './LoginSignup.css';

function LoginSignup({ onLogin, onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData); // Pass form data to set user details
  };

  return (
    <div className="login-signup-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>
        <p onClick={() => setIsSignup(!isSignup)} className="toggle-link">
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Signup"}
        </p>
      </div>
    </div>
  );
}

export default LoginSignup;
