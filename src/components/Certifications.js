import React from 'react';
import { Award } from 'lucide-react';
import '../styles/Certifications.css';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Système Photovoltaïque",
      issuer: "ALSERVCI",
      date: "2024",
      description: "Étude, dimensionnement et installation de systèmes photovoltaïques (isolé, hybride et Pompage)",
      icon: "☀️"
    },

      {
      id: 4,
      title: "Technicien Réseaux et Télécoms",
      issuer: "Ecole de la FIbre / Orange Côte d'Ivoire",
      date: "2023",
      description: "Réseau Fibre Optique, Génie Civil, Installations et maintenances FTTH, et Relation Client terrain",
      icon: "🎓"
    },

    {
      id: 2,
      title: "Technicien Réseaux et Télécoms",
      issuer: "Premium Company SA",
      date: "2022",
      description: "Installation et Maintenance d'infrastructures Fibre Optique",
      icon: "🌐"
    },

    {
      id: 3,
      title: "Brevet de Technicien Supérieur (BTS)",
      issuer: "Centre Universitaire Professionalisé",
      date: "2021",
      description: "Réseaux Informatiques et Télécommunications",
      icon: "🎓"
    },
    
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title" data-aos="fade-up">Formations & Diplômes</h2>
        <div className="underline"></div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="cert-header">
                <span className="cert-badge-icon">{cert.icon}</span>
                <span className="cert-year">{cert.date}</span>
              </div>
              <div className="cert-content">
                <h3>{cert.title}</h3>
                <div className="cert-issuer">
                   <Award size={16} className="gold-icon" />
                   <span>{cert.issuer}</span>
                </div>
                <p>{cert.description}</p>
              </div>
              <div className="cert-footer">
                <div className="decoration-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;