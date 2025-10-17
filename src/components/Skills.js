import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillsData = [
    {
      category: "🌐 Réseaux & Télécoms",
      skills: [
        { name: "Configuration et maintenance de réseaux LAN / WAN", level: 70 },
        { name: "Câblage réseau (cuivre & fibre optique)", level: 95 },
        { name: "Routage et commutation (Switch, Routeur)", level: 70 },
        { name: "Gestion d'adressage IP, DNS, DHCP", level: 75 },
        { name: "Sécurité réseau de base (pare-feu, contrôle d'accès)", level: 70 },
        { name: "Mise en place de réseaux Wi-Fi professionnels", level: 90 },

      ]
    },
    {
      category: "🖥Systèmes & Outils",
      skills: [
        { name: "Installation et configuration de systèmes Windows & Linux", level: 80 },
        { name: "Utilisation d'équipements Cisco / Mikrotik / TP-Link", level: 75 },
        { name: "Virtualisation basique (ex. VirtualBox, VMware)", level: 70 },
        { name: "Notions en téléphonie IP (VoIP)", level: 70 },
        { name: "GNS3, PacketTracer, Canva, pgAdmin,Anydesk, Microsoft, PUTTY, GLpi,...", level: 95 }

      ]
    },
    {
      category: "💻 Informatique & Autres",
      skills: [
        { name: "Connaissances en HTML / CSS / JavaScript de base", level: 50 },
        { name: "Notions en maintenance informatique (hardware / software)", level: 80 },
        { name: "Gestion de petites bases de données", level: 50 },
        { name: "Installation de système de securité electronique", level: 75 },
        { name: " Etude et dimensionnement de système photovoltaïques Isolé,Hybride, Pompage solaire", level: 75 },
      ]
    },
    {
      category: "🤝 Compétences Humaines",
      skills: [
        { name: "Esprit d'équipe", level: 90 },
        { name: "Sens de l'analyse et résolution de problèmes", level: 90 },
        { name: "Capacité à apprendre rapidement", level: 90 },
        { name: "Bonne communication technique", level: 90 },
        { name: "Transfert de compétences", level: 90 }

      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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