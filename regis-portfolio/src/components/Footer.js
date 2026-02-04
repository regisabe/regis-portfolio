import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ABE REGIS DEMONSTHENE</h3>
            <p>
              Technicien réseaux et télécoms.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#contact">Contacts</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📧 regisabe@outlook.com</li>
              <li>📱 +225 0788900731</li>
              <li>📍 Cocody, Abidjan, Côte d'Ivoire</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suivez-moi</h4>
            <div className="footer-social">
<div className="footer-social">
  <a href="https://www.linkedin.com/in/regis-demonsthene-abe/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
  <a href="https://github.com/regisabe" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
  <a href="https://wa.me/2250788900731" target="_blank" rel="noopener noreferrer" className="social-icon">WhatsApp</a>
  <a href="https://cal.com/regis-abe/30min" target="_blank" rel="noopener noreferrer" className="social-icon">Rendez-vous</a>


</div>            
    </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Regisabe. Tous droits réservés.</p>
          <p>Développé avec ❤️ et React.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;