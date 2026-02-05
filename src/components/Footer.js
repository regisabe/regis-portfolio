import React from 'react';
/* Remplacement de MessageSquare par MessageCircle pour l'icône WhatsApp */
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Calendar } from 'lucide-react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Section Identité */}
          <div className="footer-section brand">
            <h3>ABE REGIS DEMONSTHENE</h3>
            <p>Technicien réseaux et télécoms spécialisé en infrastructures fibre optique et énergie solaire.</p>
          </div>

          {/* Section Navigation */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Section Contact Express */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><Mail size={20} /> regisabe@outlook.com</li>
              <li><Phone size={20} /> +225 0788900731 / 0502495556</li>
              <li><MapPin size={20} /> Cocody, Abidjan</li>
            </ul>
          </div>

          {/* Section Réseaux */}
          <div className="footer-section">
            <h4>Suivez-moi</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/regis-demonsthene-abe/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={30} /></a>
              <a href="https://github.com/regisabe" target="_blank" rel="noopener noreferrer" title="GitHub"><Github size={30} /></a>
              <a href="https://wa.me/2250788900731" target="_blank" rel="noopener noreferrer" title="WhatsApp"><MessageCircle size={30} /></a>
              <a href="https://cal.com/regis-abe/30min" target="_blank" rel="noopener noreferrer" title="Prendre RDV"><Calendar size={30} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} <strong>Regisabe</strong>. Tous droits réservés.</p>
          <p className="footer-dev">Développé avec <span>React.js</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;