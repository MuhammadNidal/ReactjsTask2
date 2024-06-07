import React, { useState } from 'react';
import './App.css';

const Login = ({ handleLogout }) => {
  return (
    <div className="logged-in">
      <h1>Welcome, you are logged in!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const Logout = ({ handleLogin }) => {
  return (
    <div className="logged-out">
      <h1>Please Login First</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Login handleLogout={handleLogout} />
      ) : (
        <Logout handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
