import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [

    {
      id: 1,
      title: "Consultant DPI - Système Hospitalier",
      description: "Formation et support du personnel médical à l'utilisation du logiciel DPI pour la digitalisation des dossiers patients.",
      technologies: ["DPI", "Formation", "Système Médical", "Support"],
      company: "EPHD SINFRA ",
      period: "2025",
      link: "#"
    },

    {
      id: 2,
      title: "Installation Réseau Fibre Optique (FTTH)",
      description: "Installation Réseau FTTH",
      technologies: ["FTTH", "Fibre Optique", "Orange CI"],
      company: "Centre Culturel et des TIC Ivoiro-Coréen A.O ",
      period: "2023",
      link: "#"
    },
     {
      id: 3,
      title: "Maison connecté",
      description: "Cablage reseau fibre optique et reseau LAN, installation de Baie Informatique de points d'acces ...",
      technologies: ["Cablage", "LAN", "VOIP", "ExtenderWifi"],
      company: "RESIDENCE DOUMBIA ",
      period: "2023",
      link: "#"
    },
    {
      id: 4,
      title: "Solution de Telephonie IP",
      description: "Installation et maintenance du réseau fibre optique Orange, assurant une connectivité haut débit pour particuliers et entreprises.",
      technologies: ["FTTH", "Orange CI", "Installation", "Maintenance"],
      company: "ASER-BTPCI SARL ",
      period: "2024",
      link: "#"
    },
    
    {
      id: 5,
      title: "Gestion d'Infrastructure Réseau LAN",
      description: ["Actualistaion du Réseau LAN de la Direction Informatique de la Documentation et des Archives : câblage structuré, configuration et maintenance.."],
      technologies: ["LAN", "Câblage", "Configuration", "WAN", "VLAN"],
      company: "Ministère du Plan et du Developpement CI ",
      period: "Décembre 2022",
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
      description: "Installation et Configuration de Pointeuse Biométrique.",
      technologies: ["IKVISION", "Biométrie", "IP", "Sécurité"],
      company: "KYKA SERVICE SARL ",
      period: "AVRIL 2024",
      link: "#"
    },
   
    {
      id: 8,
      title: "Solutions Sécurité & Surveillance",
      description: "Installation et Configuration de Camera de Surveillances.",
      technologies: ["IKVISION", "Biométrie", "IP", "Sécurité", "ZKTECO"],
      company: "Residence KARIM SINFRA ",
      period: "SEPTEMBRE2025",
      link: "#"
    },

    {
      id: 9,
      title: "Regis-Portfolio",
      description: "Creation de Portfolio.",
      technologies: ["HTLM", "PYTHON", "CSS", "ReactJS"],
      company: "Regis Abe ",
      period: "OCTOBRE 2025",
      link: "#"
    },
    
   {
      id: 10,
      title: "Creation d'application de Gestion de Site WEb",
      description: "Creation d'une Application de Gestion de Boutique",
      technologies: ["HTLM", "PYTHON", "CSS", "ReactJS", "Django"],
      company: "Projet Github ",
      period: "JUIN 2025",
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