import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const handleScrollTop = () => {
    // Scroll to top after routing completes
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={handleScrollTop}>
          GENESIS
        </Link>
      </div>
      {/* <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/artists">Artists</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/aftercare">Aftercare</Link></li>
      </ul> */}
    </nav>
  );
}
