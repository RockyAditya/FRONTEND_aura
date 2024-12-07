import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/UserLogin.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const usernameRegex = /^[a-zA-Z]+$/; // Regex for alphabetic characters only

    if (!username || !password) {
      alert('Please fill in all fields.');
    } else if (!usernameRegex.test(username)) {
      alert('Username must contain only alphabetic characters.');
    } else if (username.toLowerCase() === 'admin') {
      alert('Welcome, Admin!');
      navigate('/admin'); // Redirect to /admin if username is 'admin'
    } else {
      alert('Login successful! Welcome, ' + username);
      navigate('/horigin'); // Redirect to /horigin for other usernames
    }
  };

  return (
    <div className='bg'>
      <div className="centered">
        <div className="book">
          <div className="cover">
            <p>Login Here</p>
          </div>
          <div className="login-container">
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
