import React from 'react';
import { Network, Monitor, Cpu, Users } from 'lucide-react'; // Import d'icônes pour chaque catégorie
import '../styles/Skills.css';

function Skills() {
  const skillsData = [
    {
      category: "Réseaux & Télécoms",
      icon: <Network size={20} />,
      skills: [
        "LAN / WAN / VLAN", "Fibre Optique & Cuivre", "Routage & Commutation", 
        "DNS / DHCP / IP", "Pare-feu & VPN", "Wi-Fi Professionnel"
      ]
    },
    {
      category: "Systèmes & Outils",
      icon: <Monitor size={20} />,
      skills: [
        "Windows & Linux Server", "Cisco / Mikrotik", "Virtualisation (VMware)", 
        "Téléphonie IP", "GNS3 / PVSYST / GLPI"
      ]
    },
    {
      category: "Informatique & Solaire",
      icon: <Cpu size={20} />,
      skills: [
        "Maintenance HW/SW", "Sécurité Électronique", "Solaire Photovoltaïque", 
        "Bases de données", "HTML / CSS / JS"
      ]
    },
    {
      category: "Compétences Humaines",
      icon: <Users size={20} />,
      skills: [
        "Analyse & Résolution", "Apprentissage Rapide", "Communication", 
        "Esprit d'équipe", "Transfert de Savoir"
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title" data-aos="fade-up">Expertises Techniques</h2>
        <div className="underline"></div>
        
        <div className="skills-grid">
          {skillsData.map((cat, index) => (
            <div key={index} className="skills-category-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3>{cat.category}</h3>
              </div>
              <div className="skills-tag-container">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;