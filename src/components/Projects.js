import React from 'react';
import { Globe, Server, Sun, Shield, Code, Wifi } from 'lucide-react'; // Installe lucide-react si besoin
import '../styles/Projects.css';

function Projects() {
  const projects = [
      {
      id: 1,
      category: "Développement",
      icon: <Code className="p-icon" />,
      title: "Gestion d'Établissement Religieux",
      description: "Conception d'une plateforme de gestion des membres, des événements et de la comptabilité.",
      technologies: ["ReactJS", "Django REST", "PostgreSQL"],
      company: "Projet GitHub",
      period: "En cours",
    },
    
    {
      id: 2,
      category: "Développement",
      icon: <Code className="p-icon" />,
      title: "Application de Gestion Commerciale",
      description: "Développement d'une solution complète de gestion de stock et de ventes pour boutiques.",
      technologies: ["ReactJS", "Django", "PostgreSQL", "Python"],
      company: "Open Source / GitHub",
      period: "2025",
    },

    {
      id: 3,
      category: "Digitalisation",
      icon: <Server className="p-icon" />,
      title: "Consultant DPI - Système Hospitalier",
      description: "Accompagnement à la transformation digitale : formation du personnel médical et déploiement du Dossier Patient Informatisé.",
      technologies: ["DPI", "Santé Digitale", "Support Technique"],
      company: "HOPITAL GENERAL DE SINFRA",
      period: "2025",
    },

    {
      id: 4,
      category: "Réseau",
      icon: <Wifi className="p-icon" />,
      title: "Installation de Point d'Accès (AP)",
      description: "Câblage et installation de Point d'Accès.",
      technologies: ["ZTE", "TPLink", "Xiaomi"],
      company: "PERFECT CONSULTING",
      period: "2024",
    },
    
    {
      id: 5,
      category: "Énergie",
      icon: <Sun className="p-icon" />,
      title: "Ingénierie Photovoltaïque",
      description: "Étude technique et dimensionnement de systèmes solaires hybrides et solutions de pompage autonome.",
      technologies: ["PVSYST", "Solaire Hybride", "Dimensionnement"],
      company: "ALSERVCI",
      period: "2024",
    },

    {
      id: 6,
      category: "Sécurité",
      icon: <Shield className="p-icon" />,
      title: "Sécurité & Biométrie",
      description: "Mise en place de systèmes de contrôle d'accès biométriques et surveillance IP haute définition.",
      technologies: ["HIKVISION", "ZKTECO", "IP Cam", "DAHUA"],
      company: "KYKA SERVICE / Résidence KARIM",
      period: "2024",
    },


    {
      id: 7,
      category: "Réseau",
      icon: <Wifi className="p-icon" />,
      title: "Infrastructure Fibre Optique (FTTH)",
      description: "Tirage et raccordement client final pour le réseau Fibre OptiqueOrange CI.",
      technologies: ["FTTH", "Orange CI"],
      company: "Centre Culturel TIC Ivoiro-Coréen",
      period: "2023",
    },
    
    {
      id: 8,
      category: "Réseau",
      icon: <Globe className="p-icon" />,
      title: "Audit & Optimisation LAN",
      description: "Actualisation complète du réseau LAN : câblage structuré, segmentation VLAN et sécurisation des accès.",
      technologies: ["Cisco", "VLAN", "Câblage Structuré"],
      company: "Ministère du Plan et du Développement CI",
      period: "2022",
    },
    
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-up">
          Expertises & Réalisations
        </h2>
        <div className="underline"></div>
        <p className="projects-subtitle" data-aos="fade-up">
          Découvrez mes interventions techniques en infrastructure, énergie et développement logiciel.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="project-category-tag">{project.category}</div>
              
              <div className="project-header">
                <div className="project-icon-box">
                  {project.icon}
                </div>
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