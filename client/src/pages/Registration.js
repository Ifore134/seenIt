import React, { useState } from 'react';
import axios from 'axios';
import '../stylesheets/register.css'
const Registration = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] =useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/register', {
        username,
        password,
        email
      });
      setMessage('Registration successful!');
      props.setUser(res.data)
      console.log(res.data);
    } catch (error) {
      setMessage('Registration failed!');
      console.error(error);
    }
  };

  return (
    <div id='registration-page'>
      <h2>Registration</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
            Email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;