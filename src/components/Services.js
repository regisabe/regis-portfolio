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
      features: ["Câblage", "Installation & Soudure", "Raccordement final", "Tests de continuité", "Genie civil"]
    },
    {
      id: 2,
      icon: <Settings className="s-icon" />,
      title: "Maintenance Systèmes",
      description: "Support technique complet : installation d'OS, sécurisation logicielle et optimisation matérielle.",
      features: ["Windows", "Sécurité Antivirus" , "Dépannage matériel"]
    },
    {
      id: 3,
      icon: <Share2 className="s-icon" />,
      title: "Réseaux LAN & WLAN",
      description: "Conception et configuration de réseaux locaux pour une connectivité sans faille.",
      features: ["Câblage structuré", "VLAN & MicroTik", "Domotique IP",  "Téléphonie PABX",  "Administeur Système"]
    },
    {
      id: 4,
      icon: <ShieldCheck className="s-icon" />,
      title: "Sécurité",
      description: "Installation de solutions de surveillance intelligente et contrôle d'accès biométrique et facial.",
      features: ["Caméras IP/PTZ/Solaire", "Pointeuse Biométrique et Reconnaissance faciale", "Interphonie et visiophonie IP"]
    },
    {
      id: 5,
      icon: <Sun className="s-icon" />,
      title: "Énergie Solaire",
      description: "Étude et dimensionnement de systèmes photovoltaïques pour une autonomie énergétique durable.",
      features: ["Étude et Dimensionnement", "Installation hybride isolé et pompage", "Maintenance"]
    },
    {
      id: 6,
      icon: <GraduationCap className="s-icon" />,
      title: "Conseils & Formations",
      description: "Accompagnement stratégique et formation sur les outils réseaux et logiciels spécialisés.",
      features: ["Formation sur site", "Support utilisateur", "Microsoft Office", "Conseils techniques"]
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