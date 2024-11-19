// File: MediaPage.js
import React, { useState } from 'react';
import './MediaPage.css';

function MediaPage({ user }) {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [postDescription, setPostDescription] = useState('');
  const [media, setMedia] = useState(null);
  const [posts, setPosts] = useState([]); // State to store community posts
  const [username, setUsername] = useState(user.username || '');
  const [nickname, setNickname] = useState(user.nickname || '');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (postDescription.trim() && media) {
      const newPost = {
        id: Date.now(), // Unique ID for each post
        username,
        nickname,
        description: postDescription,
        media: URL.createObjectURL(media), // Create a URL for the media
        likes: 0,
        comments: [],
      };
      setPosts([newPost, ...posts]); // Add new post to community posts
      setPostDescription('');
      setMedia(null);
      setIsCreatingPost(false); // Hide post creation form
    }
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) { // Limit to 5 MB
      alert('File size exceeds 5 MB limit. Please choose a smaller file.');
      setMedia(null);
    } else {
      setMedia(file);
    }
  };

  const handleLikePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleCommentPost = (postId, comment) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="media-page">
      <div className="profile-section">
        <h2>Edit Creator Profile</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
        />
        <button onClick={() => alert('Profile updated!')}>Save Profile</button>
      </div>

      <h2>Community Posts</h2>
      <button onClick={() => setIsCreatingPost(!isCreatingPost)}>
        {isCreatingPost ? 'Cancel' : 'Create Post'}
      </button>
      {isCreatingPost && (
        <form className="create-post-form" onSubmit={handleCreatePost}>
          <textarea
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            placeholder="What's on your mind?"
            required
          />
          <input
            type="file"
            onChange={handleMediaChange}
            accept="image/*,video/*"
          />
          <button type="submit">Post</button>
        </form>
      )}
      
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} post={post} onLikePost={handleLikePost} onCommentPost={handleCommentPost} onDeletePost={handleDeletePost} />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}

function Post({ post, onLikePost, onCommentPost, onDeletePost }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentPost(post.id, comment);
      setComment('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <h3>{post.username}</h3>
        <span className="nickname">@{post.nickname}</span>
      </div>
      {post.media && <img src={post.media} alt="Post media" className="post-image" />}
      <p className="post-description">{post.description}</p>
      <div className="post-actions">
        <button className="action-button" onClick={() => onLikePost(post.id)}>Like ({post.likes})</button>
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            required
          />
          <button type="submit">Comment</button>
        </form>
        <button onClick={() => onDeletePost(post.id)}>Delete Post</button>
      </div>
      <div className="comments">
        {post.comments.map((c, index) => (
          <p key={index} className="comment">{c}</p>
        ))}
      </div>
    </div>
  );
}

export default MediaPage;
