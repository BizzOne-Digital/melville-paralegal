import React from 'react';
import { Link } from 'react-router-dom';
import './ProcessSection.css';

const steps = [
  {
    step: '01',
    title: 'Book Your Free Intake Meeting',
    desc: 'Schedule a complimentary virtual meeting by Zoom or Google Meet. We discuss the general nature of your matter and whether MPS may be able to assist.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Review & Strategy',
    desc: 'Once retained, Heidi reviews your documents, identifies the key issues and develops a practical strategy based on the evidence and applicable law.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Preparation & Representation',
    desc: 'Heidi prepares submissions, organizes evidence and represents you at hearings. You are kept informed at every stage so you always know what to expect.',
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
          <p>No surprises, no confusion. Just clear guidance from your first contact through to resolution.</p>
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
          <p>The intake meeting does not constitute legal advice or create a paralegal-client relationship. No outcome is guaranteed.</p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/intake" className="btn-primary">Start with a Free Meeting</Link>
        </div>
      </div>
    </section>
  );
}
