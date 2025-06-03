import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">GENESIS</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/artists">Artists</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/aftercare">Aftercare</Link></li>
      </ul>
    </nav>
  );
}
