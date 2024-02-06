// LoginForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your login logic here (replace this with your actual logic)
    const isSuccess = true; // Replace with your login logic result

    if (isSuccess) {
      // Redirect to a different page on successful login
      history.push('/dashboard'); // Change '/dashboard' to the desired URL
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Login</h2>
        <p>Enter your email and password</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
