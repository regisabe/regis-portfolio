import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Bonjour, je suis <span>ABE REGIS DEMONSTHENE</span></h1>
        <h2>Informaticien Réseaux et Telecommunications</h2>
        <p>Je crée et maintiens des infrastructures réseaux et télécoms modernes et efficaces.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;