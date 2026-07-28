import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>Take the Next Step With Clear Information</h2>
          <p>You do not need to understand every form, rule or procedure before asking for help. Start by providing the basic details of your matter. Melville Paralegal Services will determine whether the practice may be able to assist and explain the next appropriate step.</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn-primary cta-main-btn">Request an Initial Consultation</Link>
          <Link to="/contact" className="btn-outline-white">Send a Contact Request</Link>
        </div>
      </div>
    </section>
  );
}
