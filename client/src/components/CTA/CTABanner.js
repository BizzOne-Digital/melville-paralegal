import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>Ready to Take the Next Step?</h2>
          <p>Book a complimentary virtual intake meeting to discuss your matter. No obligation, no legal advice — just a clear conversation about whether MPS can help.</p>
        </div>
        <div className="cta-actions">
          <Link to="/intake" className="btn-primary cta-main-btn">Book Free Meeting</Link>
          <Link to="/contact" className="btn-outline-white">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
