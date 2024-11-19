// File: App.js
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LatestNews from './components/LatestNews';
import Politics from './components/Politics';
import Technology from './components/Technology';
import Sports from './components/Sports';
import Entertainment from './components/Entertainment';
import Business from './components/Business';
import NewsByRegion from './components/NewsByRegion';
import LoginSignup from './components/LoginSignup';
import UserProfile from './components/UserProfile';
import EditUsername from './components/EditUsername';
import SavedPosts from './components/SavedPosts';
import Reaction from './components/Reaction';
import { ThemeProvider } from './context/ThemeContext'; 
import NewsletterForm from './components/NewsletterForm';
import MediaPage from './components/MediaPage';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null); // State to manage user object
  const [showLoginSignup, setShowLoginSignup] = useState(false); // State for modal visibility
  const [likedPosts, setLikedPosts] = useState([]); // State for liked posts

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLoginSignup(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUpdate = (newUsername) => {
    if (user) {
      setUser((prevUser) => ({
        ...prevUser,
        name: newUsername,
      }));
    }
  };

  const handleLikeToggle = (articleId) => {
    setLikedPosts((prev) => {
      if (prev.includes(articleId)) {
        return prev.filter((id) => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  const requireAuth = (callback) => {
    if (user) {
      callback(); 
    } else {
      setShowLoginSignup(true);
    }
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/latest-news">Latest News</Link>
            <Link to="/politics">Politics</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/entertainment">Entertainment</Link>
            <Link to="/business">Business</Link>
            <Link to="/news-by-region">News by Region</Link>
            <Link to="/newsletter">Newsletter</Link> {/* Newsletter Link */}
            {user ? (
              <UserProfile user={user} onLogout={handleLogout} /> // Render profile dropdown component
            ) : (
              <button onClick={() => setShowLoginSignup(true)}>Login/Signup</button>
            )}
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest-news" element={<LatestNews />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/business" element={<Business />} />
            <Route path="/news-by-region" element={<NewsByRegion />} />
            <Route path="/edit-username" element={<EditUsername user={user} onUpdate={handleUpdate} />} />
            <Route
              path="/article/:id"
              element={
                <ArticlePage 
                  requireAuth={requireAuth} 
                  onToggleLike={handleLikeToggle} 
                  likedPosts={likedPosts}
                />
              }
            />
            <Route path="/saved-posts" element={<SavedPosts likedPosts={likedPosts} />} />
            <Route path="/newsletter" element={<NewsletterForm user={user} />} /> 
            <Route path="/media-page" element={<MediaPage user={user} />} />
          </Routes>

          {showLoginSignup && <LoginSignup onLogin={handleLogin} onClose={() => setShowLoginSignup(false)} />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

// ArticlePage component to handle individual article details
function ArticlePage({ requireAuth, onToggleLike, likedPosts }) {
  const { id } = useParams(); // Get the article ID from the URL

  return (
    <div>
      <h1>Article {id}</h1>
      <Reaction 
        articleId={id} 
        requireAuth={requireAuth} 
        onToggleLike={onToggleLike} 
        liked={likedPosts.includes(id)} // Check if the article is liked
      />
      {/* Other article details can go here */}
    </div>
  );
}

export default App;
