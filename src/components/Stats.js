import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import '../styles/Stats.css';

function Stats() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    certifications: 0
  });

  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // ✅ Correction : on mémorise targetValues avec useMemo
  const targetValues = useMemo(
    () => ({
      projects: 50,
      clients: 30,
      experience: 4,
      certifications: 5
    }),
    []
  );

  // ✅ animateCounters ne dépend plus d’un objet recréé à chaque rendu
  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targetValues).forEach((key) => {
      let currentValue = 0;
      const increment = targetValues[key] / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValues[key]) {
          currentValue = targetValues[key];
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });
  }, [targetValues]);

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
        <div className="stat-item" data-aos="fade-up">
          <div className="stat-icon">🚀</div>
          <div className="stat-number">{counters.projects}+</div>
          <div className="stat-label">Projets Réalisés</div>
        </div>

        <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
          <div className="stat-icon">👥</div>
          <div className="stat-number">{counters.clients}+</div>
          <div className="stat-label">Clients Satisfaits</div>
        </div>

        <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-icon">⏱️</div>
          <div className="stat-number">{counters.experience}+</div>
          <div className="stat-label">Années d'Expérience</div>
        </div>

        <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
          <div className="stat-icon">🎓</div>
          <div className="stat-number">{counters.certifications}+</div>
          <div className="stat-label">Certifications</div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
