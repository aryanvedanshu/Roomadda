import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#d48166', padding: '1rem', textAlign: 'center' }}>
      <h1>Room Adda</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/services">Services</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
