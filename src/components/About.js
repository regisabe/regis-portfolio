import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/profile.jpg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Titre de la section */}
        <h2 className="section-title" data-aos="fade-up">
          À Propos de Moi
        </h2>
        
        {/* Contenu principal */}
        <div className="about-content">
          {/* Image de profil */}
          <div className="about-image" data-aos="fade-right">
            <img 
              src={profileImage} 
              alt="Portrait de Regis" 
              className="profile-img round" 
            />
          </div>
          
          {/* Texte et informations */}
          <div className="about-text" data-aos="fade-left">
            <h3>INFORMATICIEN RÉSEAUX ET TÉLÉCOMMUNICATIONS</h3>
            
            <p>
              Informaticien réseau et télécoms, passionné par les technologies numériques et les solutions innovantes. J’aime connecter les systèmes, optimiser les infrastructures et assurer une communication fiable, tout en développant constamment mes compétences.
            </p>
            
            <p>
            </p>
            
            {/* Informations de contact */}
            <div className="about-info">
              <div className="info-item">
                <strong>Email :</strong> regisabe@outlook.com
              </div>
              <div className="info-item">
                <strong>Telephone :</strong> 0788900731
              </div>
              <div className="info-item">
                <strong>Disponibilité :</strong> Ouvert aux opportunités
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
 