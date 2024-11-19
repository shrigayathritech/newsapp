import React, { useState } from 'react';
import './EditUsername.css';

function EditUsername({ user, onUpdate }) {
  const [newUsername, setNewUsername] = useState(user?.name || ''); // Use optional chaining

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername) {
      onUpdate(newUsername);
      alert('Username updated successfully!'); // Notify user of success
    }
  };

  return (
    <div className="edit-username">
      <h2>Edit Username</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Username:
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditUsername;
