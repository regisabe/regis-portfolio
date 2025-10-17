import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "WINLOGIC",
      position: "Consultant & Formateur DPI",
      period: "Janvier 2025 - Présent",
      description: "Formation et assistance du personnel médical sur le logiciel DPI (Dossiers Patients Informatisés).",
      icon: "🏥"
    },
    {
      id: 2,
      company: "2XLBTP-CI",
      position: "Technicien Réseaux Télécoms",
      period: "Février 2024 - Février 2025",
      description: "Responsable technique : gestion d'équipes, déploiement FTTH (Moov, Orange, GVA), gestion de stock.",
      icon: "🌐"
    },
    {
      id: 3,
      company: "PREMIUMCOMPANY SA",
      position: "Technicien Réseaux et Télécoms",
      period: "Janvier 2022 - Janvier 2024",
      description: "Installation et maintenance FTTH Orange CI, déploiement réseau fibre optique.",
      icon: "📡"
    },
    {
      id: 4,
      company: "Ministère du Plan et du Développement",
      position: "Stagiaire Réseaux Informatiques",
      period: "Octobre 2021 - Janvier 2022",
      description: "Mise en place et gestion de réseau LAN, maintenance informatique.",
      icon: "🏛️"
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title" data-aos="fade-up">Expérience Professionnelle</h2>
        <p className="experience-subtitle" data-aos="fade-up" data-aos-delay="100">
          Mon parcours professionnel
        </p>
        
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