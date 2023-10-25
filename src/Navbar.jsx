import React, { useState } from 'react';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="nav-logo">
        <a href="/">Logo</a>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isOpen ? 'active' : ''}`}></div>
      </div>
    </nav>
  );
}
export default Navbar;