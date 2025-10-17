import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: "🌐",
      title: "Installation Réseau FTTH",
      description: "Déploiement complet de réseaux fibre optique pour particuliers et entreprises (Orange CI, Moov CI, GVA).",
      features: ["Installation fibre", "Raccordement", "Tests de performance", "Maintenances"]
    },
    {
      id: 2,
      icon: "🔧",
      title: "Maintenance Informatique",
      description: "Support technique complet : installation de systèmes, logiciels, configuration réseau et dépannage.",
      features: ["Windows/Linux", "Antivirus", "Sauvegarde", "Optimisation", "Ordinateurs"]
    },
    {
      id: 3,
      icon: "📡",
      title: "Infrastructure Réseau LAN",
      description: "Conception, installation et configuration de réseaux locaux pour optimiser votre connectivité.",
      features: ["Câblage structuré", "Configuration", "LAN,WLAN,VLAN", "Administrateur Systeme", "Microtique", "Domotique"]
    },
    {
      id: 4,
      icon: "📹",
      title: "Systèmes de Sécurité",
      description: "Installation de solutions de surveillance et contrôle d'accès pour sécuriser vos locaux.",
      features: ["Caméras IP", "Biométrie", "Interphone", "Téléphone IP"]
    },
    {
      id: 5,
      icon: "☀️",
      title: "Énergie Solaire",
      description: "Étude, et dimensionnement de systèmes photovoltaïques pour l'autonomie énergétique.",
      features: ["Étude de faisabilité", "Dimensionnement","Devis", "Maintenance"]
    },
    {
      id: 6,
      icon: "🎓",
      title: "Formation & Consulting",
      description: "Formation professionnelle sur les systèmes réseau, télécoms et logiciels spécialisés.",
      features: ["Formation sur site", "Documentation", "Support", "Conseils"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title" data-aos="fade-up">Mes Services</h2>
        <p className="services-subtitle" data-aos="fade-up" data-aos-delay="100">
          Solutions professionnelles en réseaux, télécoms et systèmes informatiques
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;