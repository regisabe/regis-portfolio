import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/TON_FORM_ID', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        alert('✅ Message envoyé avec succès !');
      } else {
        setStatus('error');
        alert('❌ Erreur lors de l\'envoi.');
      }
    } catch (error) {
      setStatus('error');
      alert('❌ Erreur réseau.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* ... reste du code identique ... */}
        
        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" name="name" required placeholder="Votre nom" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="votre.email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" name="subject" required placeholder="Sujet du message" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows="5" placeholder="Votre message..."></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;