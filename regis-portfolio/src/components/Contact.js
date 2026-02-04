import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // gardé pour afficher le message à l’écran
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Configuration EmailJS
    const serviceID = 'service_6qrzer2';
    const templateID = 'template_2wvpbvl';
    const publicKey = 'u-aRiRyhot8D1Bc82';

    // Paramètres du template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'regisabe@outlook.com'
    };

    // Envoi de l'email
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title" data-aos="fade-up">
          Contactez-moi
        </h2>
        <p
          className="contact-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Contactez-moi pour toute question, demande de devis ou opportunité professionnelle.
        </p>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
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
                <p>+225 07889008731</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-icon">📍</div>
              <div>
                <h4>Localisation</h4>
                <p>Cocody-Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
            <div className="social-links">
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/regis-demonsthene-abe/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/regisabe" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://wa.me/2250788900731" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
              <a href="https://cal.com/regis-abe/30min" target="_blank" rel="noopener noreferrer" className="social-link">Rendez-vous</a>
            
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre Nom & Prenoms"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="votre.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Sujet du message"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {/* Messages de confirmation */}
            {status === 'success' && (
              <p className="message-success">
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            )}
            {status === 'error' && (
              <p className="message-error">
                ❌ Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
