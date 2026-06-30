import React from 'react';
import './Contact.css';
import { companyInfo } from '../data/company';

function Contact() {
  return (
    <div className="contact-container">
      <div className="page-title">
        <h2>Get In Touch</h2>
        <p>Contact Bansal Motors for vehicle inquiries and quotes</p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <h3>📞 Call Us</h3>
          <p className="contact-detail">{companyInfo.phone}</p>
          <a href={`tel:${companyInfo.phone}`} className="btn-primary">Call Now</a>
        </div>

        <div className="contact-card">
          <h3>💬 WhatsApp</h3>
          <p className="contact-detail">+91 {companyInfo.whatsapp}</p>
          <a href={`https://wa.me/${companyInfo.whatsapp}`} className="btn-primary" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>📍 Visit Us</h3>
          <p className="contact-detail">{companyInfo.fullAddress}</p>
          <p className="location-tip">Location: Karnal, Haryana</p>
        </div>
      </div>

      <div className="contact-hours">
        <h3>Business Hours</h3>
        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
        <p>Sunday: 10:00 AM - 4:00 PM</p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#666' }}>Call before visiting during holidays</p>
      </div>

      <div className="note-section">
        <p>🎯 We offer best quotes on all commercial vehicles with flexible financing options and after-sales support.</p>
      </div>
    </div>
  );
}

export default Contact;
