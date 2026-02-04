import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import '../styles/Stats.css';

// 1. Structure des données centralisée
const STATS_DATA = [
  { key: 'projects', target: 15, label: 'Projets Réalisés', icon: '🚀' },
  { key: 'clients', target: 50, label: 'Clients Satisfaits', icon: '👥' },
  { key: 'experience', target: 4, label: "Années d'Expérience", icon: '⏱️' },
  { key: 'certifications', target: 2, label: 'Certifications Obtenues', icon: '🎓' },
];

function Stats() {
  // Initialisation des compteurs à zéro
  const initialCounters = useMemo(() =>
    STATS_DATA.reduce((acc, stat) => ({ ...acc, [stat.key]: 0 }), {}),
    []
  );

  const [counters, setCounters] = useState(initialCounters);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    STATS_DATA.forEach((stat) => {
      let currentValue = 0;
      const increment = stat.target / steps;
      const key = stat.key;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.target) {
          currentValue = stat.target;
          clearInterval(timer);
        }

        // Utilisation de Math.round() pour une meilleure fluidité sur les petites valeurs
        setCounters((prev) => ({
          ...prev,
          [key]: Math.round(currentValue)
        }));
      }, stepDuration);
    });
  }, []); // Dépendances supprimées car les données sont désormais des constantes

  // Logique Intersection Observer inchangée
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = statsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated, animateCounters]);

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        {STATS_DATA.map((stat, index) => (
          <div
            className="stat-item"
            key={stat.key}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Décalage basé sur l'index
          >
            <div className="stat-icon">{stat.icon}</div>
            {/* L'ajout du '+' pour l'expérience doit être conditionnel si la stat n'est pas un nombre pur */}
            <div className="stat-number">
              {counters[stat.key]}
              {(stat.key === 'experience' || stat.key === 'certifications') ? '' : '+'}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;