import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "WINLOGIC.CI",
      position: "Consultant & Formateur DPI",
      period: "Janvier 2025 - Présent",
      description: "Optimisation de l'adoption numérique : Formation et accompagnement de 30+ professionnels de santé sur le logiciel DPI (Dossiers Patients Informatisés). Assuré la fiabilité des données et la prise en main rapide du logiciel.",
      icon: "🏥"
    },

    {
      id: 2,
      company: "2XLBTP-CI",
      position: "Superviseur Technique - Réseaux FTTH",
      period: "Février 2024 - Février 2025",
      description: "Gestion d'équipe et Déploiement Fibre : Superviseur technique d'une équipe de 5 personnes. Pilotage du déploiement FTTH pour les opérateurs majeurs (Moov, Orange) en respectant les normes de qualité et les délais. Gestion des ressources.",
      icon: "🌐"
    },

    {
      id: 3,
      company: "PREMIUMCOMPANY SA",
      position: "Technicien Réseaux et Télécoms",
      period: "Janvier 2022 - Janvier 2024",
      description: "Expertise FTTH : Installation, raccordement et maintenance de lignes FTTH pour Orange CI. Réduction des incidents et amélioration de la qualité du service client grâce à une maintenance proactive du réseau fibre optique.",
      icon: "📡"
    },

    {
      id: 4,
      company: "Ministère du Plan et du Développement",
      position: "Stagiaire Réseaux Informatiques",
      period: "Octobre 2021 - Janvier 2022",
      description: "Administration Réseau Initial : Participation à la mise en place et à la gestion quotidienne du réseau LAN (câblage, configuration switchs) et à la maintenance corrective/préventive du parc informatique.",
      icon: "🏛️"
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title" data-aos="fade-up">Expérience Professionnelle</h2>
        {/* Suppression de la sous-titre redondant */}
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;