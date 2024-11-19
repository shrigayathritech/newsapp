import React from 'react';

function SavedPosts({ likedPosts }) {
  return (
    <div className="saved-posts">
      <h2>Saved Liked Posts</h2>
      {likedPosts.length === 0 ? (
        <p>No liked posts available.</p>
      ) : (
        likedPosts.map((post, index) => (
          <div key={index} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedPosts;
