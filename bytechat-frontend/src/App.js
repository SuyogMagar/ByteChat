import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn';

function NavBar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-title">ByteChat</div>
      <div className="navbar-links">
        {user ? (
          <span className="navbar-username">{user.name}</span>
        ) : (
          <a href="/signin">Sign In</a>
        )}
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-content">
      <h1>Welcome to ByteChat</h1>
      <p>Your secure, modern chat platform.</p>
    </div>
  );
}

function AboutUs() {
  return <div className="home-content"><h2>About Us</h2><p>About ByteChat...</p></div>;
}

function ContactUs() {
  return <div className="home-content"><h2>Contact Us</h2><p>Contact details...</p></div>;
}

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="home-container">
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
