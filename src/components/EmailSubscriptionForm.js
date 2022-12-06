

import React, { useState } from 'react';

const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    if (!email.trim()) {
      setError('Please enter a valid email address.');
      return;
    }

    // Submit the email address to the database or email marketing service
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess(true);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Thank you for subscribing!</p>}
      <label>
        Email:
        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <button type="submit">Subscribe</button>
    </form>
  );
};
export default EmailSubscriptionForm;