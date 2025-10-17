import React, { useState, useEffect, useRef } from 'react';
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

  const targetValues = {
    projects: 50,
    clients: 30,
    experience: 4,
    certifications: 5
  };

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

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
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
  };

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