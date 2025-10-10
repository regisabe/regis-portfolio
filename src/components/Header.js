import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>REGIS_Portfolio</h2>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
 
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Accueil</a></li>
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
          <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="#cv_regis_abe" onClick={closeMenu}>CV_REGIS_ABE</a></li>

        </ul>
      </nav>
  

    </header>
  );
}

export default Header;
