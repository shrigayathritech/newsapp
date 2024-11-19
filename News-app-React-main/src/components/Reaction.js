import React, { useState, useEffect } from 'react';
import './Reaction.css';

const Reaction = ({ articleId, requireAuth, onToggleLike }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the articleId is in the likedPosts array and set the liked state accordingly
    setLiked(false); // This should check against the global likedPosts if you pass it down
  }, [articleId]);

  const handleReaction = () => {
    requireAuth(() => {
      setLiked((prevLiked) => {
        const newLikedStatus = !prevLiked;
        onToggleLike(articleId); // Call the function to toggle the like state
        return newLikedStatus;
      });
      console.log(`Article ${articleId} ${liked ? 'unliked' : 'liked'}`);
    });
  };

  return (
    <div className="reaction-container">
      <button onClick={handleReaction} className={`reaction-button ${liked ? 'liked' : ''}`}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>
    </div>
  );
};

export default Reaction;
