import React, { useState } from 'react';
import axios from 'axios';

function TicketForm() {
  const [userId, setUserId] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [charityPercentagePreference, setCharityPercentagePreference] = useState('');
  const [charityPreference, setCharityPreference] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/tickets', {
        userId,
        ticketNumber,
        charityPercentagePreference,
        charityPreference
      });
      alert('Ticket created: ' + JSON.stringify(response.data));
    } catch (error) {
      alert('Failed to create ticket: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buy Ticket</h2>
      <input
        type="text"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="User ID"
        required
      />
      <input
        type="text"
        value={ticketNumber}
        onChange={e => setTicketNumber(e.target.value)}
        placeholder="Ticket Number"
        required
      />
      <input
        type="number"
        value={charityPercentagePreference}
        onChange={e => setCharityPercentagePreference(e.target.value)}
        placeholder="Charity Percentage"
        required
      />
      <input
        type="text"
        value={charityPreference}
        onChange={e => setCharityPreference(e.target.value)}
        placeholder="Charity Preference"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TicketForm;
