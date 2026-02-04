import React from 'react';
import '../styles/Certifications.css';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Système Photovoltaïque",
      issuer: "ALSERVCI",
      date: "Décembre 2024",
      description: "Attestation de formation: Étude, dimensionnement et installation de systèmes photovoltaïques",
      icon: "☀️"
    },
    
    {
      id: 2,
      title: "Technicien Réseaux et Télécoms",
      issuer: "Premium Company SA/ 2XL BTP-CI",
      date: "2022-2025",
      description: "Spécialisation en configuration, installation (cablâge) et maintenance d'infrastructures réseau Fibre Optique (Orange CI, Moov CI, GVA)",
      icon: "🌐"
    },

    {
      id: 3,
      title: "Brevet Technicien Superieur (BTS)",
      issuer: "Centre Universitaire Professionalisé Abidjan",
      date: "2021",
      description: "Réseaux Informatiques et Télécomminications",
      icon: "🎓"
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