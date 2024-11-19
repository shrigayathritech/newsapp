// File: UserProfile.js
import React, { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import './UserProfile.css';

function UserProfile({ user, onLogout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme from context

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div className={`user-profile ${theme}`}>
      <button className="profile-button" onClick={toggleDropdown}>
        {user?.name || 'Profile'} {/* Fallback to 'Profile' if user name is not available */}
      </button>
      {showDropdown && (
        <div className="dropdown-content">
          <p><strong>Email:</strong> {user.email}</p>
          <Link to="/edit-username">
            <button>Edit Username</button>
          </Link>
          <Link to="/saved-posts">
            <button>Saved Liked Post</button>
          </Link>
          <Link to="/media-page">
            <button>Media</button>
          </Link>
          <button onClick={toggleTheme}>Toggle Theme</button> {/* Button to toggle theme */}
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
