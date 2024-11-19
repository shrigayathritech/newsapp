import React, { useState } from 'react';

function EditProfile({ username, email }) {
  const [name, setName] = useState(username);

  const handleSave = () => {
    // Implement save functionality (e.g., API call to save updated name)
    alert(`Profile updated to: ${name}`);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <p>Email: {email}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Edit your name"
      />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default EditProfile;
