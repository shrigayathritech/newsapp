// File: MainContent.js
import React from 'react';
import Post from './Post'; // Component to display individual posts

const MainContent = () => {
  // Sample data - replace with actual data fetching logic
  const posts = [
    { id: 1, content: "This is a text post" },
    { id: 2, content: "This is another text post" },
  ];

  return (
    <div className="content-container">
      {posts.map(post => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
};

export default MainContent;
