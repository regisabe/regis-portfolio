import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [

    {
      id: 1,
      title: "Consultant DPI - Système Hospitalier",
      description: "Formation et support du personnel médical à l’utilisation du logiciel DPI pour la digitalisation des dossiers patients.",
      technologies: ["DPI", "Formation", "Système Médical", "Support"],
      company: "WINLOGIC.CI ",
      period: "2025",
      link: "#"
    },

    {
      id: 2,
      title: "Infrastructure FTTH - Moov Africa",
      description: "Déploiement et maintenance de l'infrastructure fibre optique pour Moov Côte d'Ivoire, incluant installation, raccordement et tests de performance.",
      technologies: ["FTTH", "Fibre Optique", "Moov CI", "Déploiement"],
      company: "2XLBTP-CI ",
      period: "2024-2025",
      link: "#"
    },
     {
      id: 3,
      title: "Gestion Technique de Chantiers",
      description: "gestion des commandes, rapports de travaux, suivi du stock et coordination d'équipes..",
      technologies: ["Gestion", "Coordination", "Excel", "Reporting"],
      company: "2XL TELECOM ",
      period: "2024-2025",
      link: "#"
    },
    {
      id: 4,
      title: "Infrastructure FTTH - Orange CI",
      description: "Installation et maintenance du réseau fibre optique Orange, assurant une connectivité haut débit pour particuliers et entreprises.",
      technologies: ["FTTH", "Orange CI", "Installation", "Maintenance"],
      company: "PREMIUMCOMPANY SA ",
      period: "2022-2024",
      link: "#"
    },
    
    {
      id: 5,
      title: "Gestion d'Infrastructure Réseau LAN",
      description: ["Mise en place et gestion du réseau LAN à la DIDA : câblage structuré, configuration et maintenance.."],
      technologies: ["LAN", "Câblage", "Configuration", "WAN", "VLAN"],
      company: "Ministère du Plan et du Developpement CI ",
      period: "2021-2022",
      link: "#"
    },

    {
      id: 6,
      title: "Systèmes Photovoltaïques",
      description: "Étude et dimensionnement de systèmes photovoltaïques pour solutions énergétiques durables et autonomes.",
      technologies: [ "Etude et dimensionnement","Système Hybride", "Système Isolé", "Pompage solaire"],
      company: "ALSERVCI ",
      period: "2024",
      link: "#"
    },
    {
      id: 7,
      title: "Solutions Sécurité & Surveillance",
      description: "Installation et maintenance de systèmes de sécurité (caméras IP, biométrie, visiophones, interphones, téléphones IP) et de réseaux LAN, ainsi que déploiement de systèmes d'exploitation et logiciels pour particuliers et entreprises.",
      technologies: ["Caméras IP", "Biométrie", "VoIP", "Sécurité"],
      company: "Freelance ",
      period: "2022-Présent",
      link: "#"
    },
   
   
   
    
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-up">
          Mes Réalisations Professionnelles
        </h2>
        <p className="projects-subtitle" data-aos="fade-up" data-aos-delay="100">
          Projets et missions réalisés en entreprise et en freelance
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="project-header">
                <div className="project-icon">🌐</div>
                <div className="project-meta">
                  <span className="project-company">{project.company}</span>
                  <span className="project-period">{project.period}</span>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;