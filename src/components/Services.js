import React from 'react';
import { Wifi, Settings, Share2, ShieldCheck, Sun, GraduationCap, CheckCircle2 } from 'lucide-react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: <Wifi className="s-icon" />,
      title: "Infrastructure FTTH",
      description: "Déploiement complet de réseaux fibre optique pour particuliers et entreprises (Orange, Moov, GVA).",
      features: ["Installation & Soudure", "Raccordement final", "Tests photométriques", "Audit réseau"]
    },
    {
      id: 2,
      icon: <Settings className="s-icon" />,
      title: "Maintenance Systèmes",
      description: "Support technique complet : installation d'OS, sécurisation logicielle et optimisation matérielle.",
      features: ["Windows & Linux", "Sécurité Antivirus", "Sauvegarde Cloud", "Dépannage matériel"]
    },
    {
      id: 3,
      icon: <Share2 className="s-icon" />,
      title: "Réseaux LAN & WLAN",
      description: "Conception et configuration de réseaux locaux robustes pour une connectivité sans faille.",
      features: ["Câblage structuré", "VLAN & MicroTik", "Domotique IP", "Administration Serveur"]
    },
    {
      id: 4,
      icon: <ShieldCheck className="s-icon" />,
      title: "Sécurité & Biométrie",
      description: "Installation de solutions de surveillance intelligente et contrôle d'accès biométrique.",
      features: ["Caméras IP/PTZ", "Reconnaissance faciale", "Interphonie IP", "Téléphonie PABX"]
    },
    {
      id: 5,
      icon: <Sun className="s-icon" />,
      title: "Énergie Solaire",
      description: "Étude et dimensionnement de systèmes photovoltaïques pour une autonomie énergétique durable.",
      features: ["Étude d'ensoleillement", "Dimensionnement", "Installation hybride", "Maintenance"]
    },
    {
      id: 6,
      icon: <GraduationCap className="s-icon" />,
      title: "Consulting & Formation",
      description: "Accompagnement stratégique et formation sur les outils réseaux et logiciels spécialisés (DPI).",
      features: ["Formation sur site", "Audit SI", "Support utilisateur", "Conseils techniques"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title">Expertises & Solutions</h2>
          <div className="underline"></div>
          <p className="services-subtitle">
            Une expertise technique polyvalente pour accompagner votre transformation numérique
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={14} className="check-icon" />
                    {feature}
                  </li>
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