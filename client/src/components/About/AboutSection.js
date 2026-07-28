import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const stats = [
  { number: 'LSO', label: 'Licensed Paralegal' },
  { number: 'ON', label: 'Ontario-Wide Virtual Services' },
  { number: '2026', label: 'Platinum Award Winner' },
];

const values = [
  { label: 'Compassion', desc: 'Melville Paralegal Services aims to provide respectful, patient and client-centred service.' },
  { label: 'Clarity', desc: 'Plain-language explanations of the process, scope and options.' },
  { label: 'Strategy', desc: 'Practical preparation based on facts, evidence and process.' },
  { label: 'Confidence', desc: 'Melville Paralegal Services provides clear information about the agreed scope, process, fees and next procedural steps.' },
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
          <span className="section-label">About Melville Paralegal Services</span>
          <h2>Legal Services That Are Clear, Practical and Personal</h2>
          <div className="divider-line" style={{ margin: '16px 0' }} />
          <p className="about-intro">
            I created Melville Paralegal Services to offer legal help that puts people first. Legal problems can be stressful and overwhelming — especially when someone is already dealing with illness, disability, financial pressure or conflict.
          </p>
          <p className="about-body">
            My goal is to make the process easier to understand and to ensure that clients feel heard, respected and supported. I take the time to listen, explain the process in plain language and develop a practical strategy based on the facts and evidence.
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

          <Link to="/about" className="btn-primary">Meet Heidi</Link>
        </div>
      </div>
    </section>
  );
}
