import React from 'react';
import { Link } from 'react-router-dom';
import './ProcessSection.css';

const steps = [
  {
    step: '01',
    title: 'Tell Me What Happened',
    desc: 'Submit the short website contact form with basic contact information and a brief description of the type of assistance requested. Melville Paralegal Services will send a secure prospective-client intake form separately if the inquiry may be suitable for further review.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Review Your Options',
    desc: 'After the contact form and secure intake process are completed, a consultation may be scheduled to discuss the general nature of the matter, determine whether it falls within the permitted scope of paralegal practice and identify possible next steps.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Decide Whether to Proceed',
    desc: 'When representation is offered, you will receive a written retainer agreement describing the services, fees, payment requirements and responsibilities of both the client and Melville Paralegal Services.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2>A Simple, Transparent Process</h2>
          <div className="divider-line" />
          <p>No two legal matters are exactly alike. Melville Paralegal Services begins by identifying the legal issue, the applicable procedure, any immediate deadlines and the evidence available.</p>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <React.Fragment key={s.step}>
              <div className="process-step">
                <div className="step-number-wrap">
                  <div className="step-icon-bg">{s.icon}</div>
                  <span className="step-number">{s.step}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="step-connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="var(--taupe)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="process-disclaimer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>No paralegal-client relationship is created by submitting the contact form, completing an intake form or attending a consultation. A relationship is created only after Melville Paralegal Services completes its conflict-check and acceptance procedures, agrees to act and confirms the engagement in writing.</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/contact" className="btn-primary">Request an Initial Consultation</Link>
        </div>
      </div>
    </section>
  );
}
