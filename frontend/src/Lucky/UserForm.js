import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [username, setUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', {
        username,
        walletAddress,
        contactDetails
      });
      alert('User created: ' + JSON.stringify(response.data));
    } catch (error) {
      alert('Failed to create user: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="text"
        value={walletAddress}
        onChange={e => setWalletAddress(e.target.value)}
        placeholder="Wallet Address"
        required
      />
      <input
        type="text"
        value={contactDetails}
        onChange={e => setContactDetails(e.target.value)}
        placeholder="Contact Details"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
