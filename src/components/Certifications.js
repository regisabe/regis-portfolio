import React from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Système Photovoltaïque",
      issuer: "ALSERVCI",
      date: "Décembre 2024",
      description: "Étude, dimensionnement et installation de systèmes photovoltaïques",
      icon: "☀️"
    },
    {
      id: 2,
      title: "Technicien Réseaux et Télécoms",
      issuer: "Certification Professionnelle",
      date: "2022",
      description: "Spécialisation en configuration, installation et maintenance d'infrastructures réseau",
      icon: "🎓"
    },
    {
      id: 3,
      title: "Installation FTTH",
      issuer: "Formation Professionnelle",
      date: "2022",
      description: "Installation et maintenance de réseaux fibre optique (Orange CI, Moov CI)",
      icon: "🌐"
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title" data-aos="fade-up">Formations & Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certification-card"
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>
              <p className="cert-date">{cert.date}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;