import React from 'react';
import { Network, Monitor, Cpu, Users, Palette } from 'lucide-react'; 
import '../styles/Skills.css';

function Skills() {
  const skillsData = [
    {
      category: "Réseaux & Télécoms",
      icon: <Network size={30} />,
      skills: [
        "LAN / WAN / VLAN", "Fibre Optique & Cuivre", 
        "DNS / DHCP / IP", "Pare-feu & VPN", "Wi-Fi Professionnel", "Caméra IP/PTZ/Solaire"
      ]
    },
    {
      category: "Systèmes & Outils",
      icon: <Monitor size={30} />,
      skills: [
        "Windows Server", "Cisco / Mikrotik / TP-Link", "ZTE / Huawei / Nokia", 
        "Téléphonie PABX/PBX", "GNS3 / PVSYST / GLPI", "Maitrise des outils IA (Gemini, Chat GTP, Claude etc...)"
      ]
    },
    {
      category: "Design",
      icon: <Palette size={30} />,
      skills: [
        "Affiches & Flyers", "CV Professionnels", "Cartes de visite", 
        "Montage Photo", "Identité Visuelle / Canva"
      ]
    },
    {
      category: "Informatique & Solaire",
      icon: <Cpu size={30} />,
      skills: [
        "Maintenance HW/SW", "Sécurité Électronique", "Solaire Photovoltaïque", 
        "Bases de données", "HTML / CSS / JS"
      ]
    },
    {
      category: "Compétences Humaines",
      icon: <Users size={30} />,
      skills: [
        "Analyse & Résolution", "Apprentissage Rapide", "Communication", 
        "Esprit d'équipe", "Transfert de Savoir",
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