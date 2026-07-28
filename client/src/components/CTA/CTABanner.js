import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>Ready to Take the Next Step?</h2>
          <p>Complete the Prospective Client Intake Form to request a consultation. Submitting the form does not guarantee that a consultation will be offered and does not create a paralegal-client relationship.</p>
        </div>
        <div className="cta-actions">
          <Link to="/intake" className="btn-primary cta-main-btn">Request a Consultation</Link>
          <Link to="/contact" className="btn-outline-white">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
