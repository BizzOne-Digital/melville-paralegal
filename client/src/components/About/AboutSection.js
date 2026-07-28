import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const stats = [
  { number: 'LSO', label: 'Licensed Paralegal' },
  { number: 'ON', label: 'Ontario-Wide Virtual Services' },
  { number: '2026', label: 'Platinum Award Winner' },
];

const values = [
  { label: 'Compassionate Service', desc: 'Legal problems often arise during stressful periods. Clients are treated with kindness, patience, dignity and respect.' },
  { label: 'Intelligent Analysis', desc: 'Legal issues, evidence and procedural options are reviewed carefully and explained in clear language.' },
  { label: 'Careful Preparation', desc: 'Documents, evidence, deadlines and procedural requirements are organized before the matter moves forward.' },
  { label: 'Transparent Fees', desc: 'The scope of work, professional fees, applicable taxes and anticipated additional costs are confirmed in writing.' },
];

export default function AboutSection({ aboutImage }) {
  return (
    <section className="about-section">
      <div className="container about-grid">
        <div className="about-image-col">
          <div className="about-image-wrap">
            <img
              src={aboutImage || '/home.png'}
              alt="Heidi Melville, Licensed Paralegal"
              className="about-img"
            />
            <div className="about-img-accent" />
          </div>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">Why Clients Choose Melville Paralegal Services</span>
          <h2>Meet Heidi Melville</h2>
          <div className="divider-line" style={{ margin: '16px 0' }} />
          <p className="about-intro">
            Heidi Melville is the Principal Paralegal and owner of Melville Paralegal Services. She provides compassionate, practical and well-prepared legal assistance, with a primary focus on ODSP and CPP Disability matters, together with landlord representation, select residential tenant matters, human rights, Small Claims Court, legal research, document drafting and document services.
          </p>
          <p className="about-body">
            Heidi recognizes that legal problems often arise during stressful and uncertain periods. Her goal is to ensure that clients feel heard, understand their options and are supported throughout the process, while receiving honest, intelligent and well-prepared legal representation.
          </p>

          <div className="about-values">
            {values.map((v, i) => (
              <div key={i} className="value-item">
                <div className="value-dot" />
                <div>
                  <strong>{v.label}</strong>
                  <span>{v.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-signature">
            <p className="signature-quote">
              "Helping clients navigate legal processes with compassion, clarity, strategy and confidence."
            </p>
            <div className="signature-attr">
              <div className="signature-line" />
              <div>
                <strong>Heidi Melville</strong>
                <span>Licensed Paralegal · Law Society of Ontario</span>
              </div>
            </div>
          </div>

          <Link to="/about" className="btn-primary">Learn More About Heidi</Link>
        </div>
      </div>
    </section>
  );
}
