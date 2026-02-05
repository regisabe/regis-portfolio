import React, { useState, useEffect } from 'react';
// Remplacement de MessageSquare par MessageCircle pour un look plus "WhatsApp"
import { Mail, Phone, MapPin, Linkedin, MessageCircle, Calendar } from 'lucide-react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const serviceID = 'service_6qrzer2';
    const templateID = 'template_2wvpbvl';
    const publicKey = 'u-aRiRyhot8D1Bc82';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'regisabe@outlook.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('error'))
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header" data-aos="fade-up">
          <h2 className="section-title">Contactez-moi</h2>
          <div className="underline"></div>
          <p className="contact-subtitle">
            Une question ou un projet ? Je suis à votre écoute pour toute collaboration.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Parlons de votre projet</h3>

            <div className="info-box">
              <div className="info-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>regisabe@outlook.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon"><Phone size={20} /></div>
              <div>
                <h4>Téléphone</h4>
                <p>+225 0788900731 / +225 0502495556</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon"><MapPin size={20} /></div>
              <div>
                <h4>Localisation</h4>
                <p>Cocody-Abidjan, Côte d'Ivoire</p>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Suivez-moi</h4>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/regis-demonsthene-abe/" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <Linkedin size={30} />
                </a>
                {/* Icône WhatsApp mise à jour */}
                <a href="https://wa.me/2250788900731" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                  <MessageCircle size={30} />
                </a>
                <a href="https://cal.com/regis-abe/30min" target="_blank" rel="noopener noreferrer" className="social-btn calendar">
                  <Calendar size={30} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
            <div className="form-row">
              <div className="form-group">
                <label>Nom complet</label>
                <input type="text" name="name" required placeholder="Ex: Jean Koffi" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" required placeholder="jean.koffi@mail.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Sujet</label>
              <input type="text" name="subject" required placeholder="Demande de devis fibre / Solaire/ Téléphonie, Entretien ..." value={formData.subject} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required rows="5" placeholder="Détaillez votre besoin ici..." value={formData.message} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? 'Envoi...' : 'Envoyer le message'}
            </button>

            {status === 'success' && <p className="status-msg success">✅ Message envoyé ! Je reviens vers vous rapidement.</p>}
            {status === 'error' && <p className="status-msg error">❌ Échec de l'envoi. Veuillez réessayer.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;