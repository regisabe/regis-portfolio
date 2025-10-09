import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [

    {
      id: 1,
      title: "Consultant DPI - Système Hospitalier",
      description: "Formation et assistance du personnel médical sur l'utilisation du logiciel DPI (Dossiers Patients Informatisés) pour la digitalisation des données médicales / Administrateur système",
      technologies: ["DPI", "Formation", "Système Médical", "Support"],
      company: "WINLOGIC.CI ",
      period: "2025",
      link: "#"
    },

    {
      id: 2,
      title: "Infrastructure FTTH - Moov Africa",
      description: "Technicien réseau télécom: Déploiement complet de l'infrastructure fibre optique pour Moov Côte d'Ivoire, incluant maintenance, installation, raccordement et tests de performance.",
      technologies: ["FTTH", "Fibre Optique", "Moov CI", "Déploiement"],
      company: "2XLBTP-CI ",
      period: "2024-2025",
      link: "#"
    },
     {
      id: 3,
      title: "Gestion Technique de Chantiers",
      description: "Responsable technique : établissement d'attachements, bons de commandes, rapports de fin de travaux, gestion du stock matériel et coordination d'équipes.",
      technologies: ["Gestion", "Coordination", "Excel", "Reporting"],
      company: "2XL TELECOM ",
      period: "2024-2025",
      link: "#"
    },
    {
      id: 4,
      title: "Infrastructure FTTH - Orange CI",
      description: "Technicien Réseau Télécom: Installation, maintenance et déploiement du réseau fibre optique Orange, garantissant la connectivité haut débit pour les clients résidentiels et entreprises.",
      technologies: ["FTTH", "Orange CI", "Installation", "Maintenance"],
      company: "PREMIUMCOMPANY SA ",
      period: "2022-2024",
      link: "#"
    },
    
    {
      id: 5,
      title: "Gestion d'Infrastructure Réseau LAN",
      description: ["Mise en place et gestion de réseau local (LAN) à la Direction de l'Informatique de la Documentation et des Archives (DIDA), incluant câblage structuré, configuration et maintenance."],
      technologies: ["LAN", "Câblage", "Configuration", "WAN", "VLAN"],
      company: "Ministère du Plan et du Developpement CI ",
      period: "2021-2022",
      link: "#"
    },

    {
      id: 6,
      title: "Systèmes Photovoltaïques",
      description: "Étude, dimensionnement et installation de systèmes photovoltaïques pour solutions énergétiques durables et autonomes.",
      technologies: [ "Etude et dimensionnement","Système Hybride", "Système Isolé", "Pompage solaire"

      ],
      company: "ALSERVCI ",
      period: "2024",
      link: "#"
    },
    {
      id: 7,
      title: "Solutions Sécurité & Surveillance",
      description: "Installation complète de systèmes de sécurité : caméras IP, pointeuses biométriques, visiophones, interphones et téléphones IP pour entreprises et particuliers.Installation de systèmes d'exploitation, logiciels, mise en place de réseaux LAN, maintenance informatique et réseau pour particuliers et entreprises.",
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