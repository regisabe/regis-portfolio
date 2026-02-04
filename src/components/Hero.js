import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import CV from '../assets/CV_REGIS_ABE.pdf';

function Hero() {
  const titles = [
    "Technicien Réseau & Télécoms",
    "Spécialiste FTTH",
    "Spécialiste Réseaux",
    "Technicien Certifié",
    "Expert Cablage reseaux",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Bonjour, je suis <span>REGIS DEMONSTHENE ABE</span></h1>
        <h2 className="animated-title">{titles[titleIndex]}</h2>
        <p>Connecter les systèmes, optimiser les infrastructures, garantir la performance.</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>

          {/* ✅ Lien fonctionnel pour ouvrir ton CV */}
          <a 
            href={CV} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-third"
          >
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
