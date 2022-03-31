import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login({ user, onLogin }) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <div>
      {user ? (
        <Redirect to="/" />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
