import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu pourras plus tard ajouter l'envoi vers un backend
    alert('Message envoyé ! (Simulation)');
    console.log('Données du formulaire:', formData);
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="contact-subtitle">
          N'hésitez pas à me contacter pour toute question ou opportunité
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informations de Contact</h3>
            <div className="info-box">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>regisabe@outlook.com</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">📱</div>
              <div>
                <h4>Téléphone</h4>
                <p>+225 0788900731/ +225 0757918070/ +225 0502495556</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">📍</div>
              <div>
                <h4>Localisation</h4>
                <p>Cocody, Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
            <div className="social-links">
<div className="social-links">
  <a href="https://www.linkedin.com/in/regis-demonsthene-abe" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
  <a href="https://github.com/regisabe" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
  <a href="https://facebook.com/regis.abe.1" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
</div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet du message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;