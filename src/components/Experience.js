import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      company: "WINLOGIC.CI",
      position: "Consultant & Formateur DPI",
      period: "Janvier 2025 - Aujourd'hui",
      description: "Optimisation de l'adoption numérique : Formation et accompagnement de 100+ professionnels de santé sur le logiciel DPI. Assuré la fiabilité des données et la prise en main rapide.",
      icon: "🏥"
    },
    
      {
      id: 2,
      company: "HOPITAL GENERAL DE SINFRA",
      position: "Informaticien Réseau et maintenance",
      period: "Fevrier 2025 - Aujourd'hui",
      description: "Gestion du réseau DPI (Dossiers Patients Informatisés) Maintenance Informatique preventives et curatives, Assistance Techniques aux équipes médicales.",
      icon: "🏥"
    },

    {
      id: 3,
      company: "2XL TELECOM",
      position: "Responsable Technique par Intérime",
      period: "Octobre 2024 - Février 2025",
      description: "Gestion d'équipe et Déploiement Fibre : Pilotage du déploiement FTTH pour Moov et Orange. Supervision d'une équipe de 5 personnes et gestion des ressources.",
      icon: "🌐📡"
    },

    {
      id: 4,
      company: "2XLBTP-CI",
      position: "Technicien réseaux Informatiques et Télécoms",
      period: "Février 2024 - Février 2025",
      description: "Technicien terrain - installation, maintenance, déploiement FTTH: tirage et gestion de câbles, raccordement des abonnés organisation et réalisation des chantiers, test de continuité et de perfermence, mise en service des équipements (MOOV AFRICA, GVA) .",
      icon: "📡"
    },

    {
      id: 5,
      company: "PREMIUMCOMPANY SA",
      position: "Technicien Réseaux et Télécoms",
      period: "Janvier 2022 - Janvier 2024",
      description: "Expertise FTTH : Installation et raccordement pour Orange CI. Amélioration de la qualité de service grâce à une maintenance proactive du réseau fibre.",
      icon: "📡"
    },

    {
      id: 6,
      company: "Ministère du Plan et du Développement (Direction Informatique de la Documentation et des Archives)",
      position: "Stagiaire Réseaux Informatiques",
      period: "Octobre 2021 - Janvier 2022",
      description: "Technicien Réseau : Participation à la gestion du réseau LAN (câblage, configuration switchs) et maintenance des équipements informatique.",
      icon: "🌐🏛️"
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title" data-aos="fade-up">Expérience Professionnelle</h2>
        <div className="underline"></div>
        
        <div className="timeline-compact">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="timeline-card"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <div className="timeline-left">
                <div className="timeline-icon-circle">{exp.icon}</div>
                <div className="timeline-connector"></div>
              </div>
              
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="timeline-date">{exp.period}</span>
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                </div>
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