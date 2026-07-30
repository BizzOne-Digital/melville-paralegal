import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
  </svg>
);

const ScaleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/><path d="M3 9h18M3 15h18"/>
    <path d="M3 9l3 6M18 9l3 6"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7L5.5 10.5L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const badges = [
  { icon: <ShieldIcon />, text: 'Our Paralegals are Licensed by the Law Society of Ontario' },
  { icon: <HeartIcon />, text: 'Clear Scope of Work and Written Fees' },
  { icon: <ScaleIcon />, text: 'Direct Communication With Your Paralegal' },
];

const highlights = [
  'ODSP & CPP Disability Appeals',
  'Landlord & Tenant Board',
  'Small Claims Court & Enforcement',
  'Notary & Commissioner for Taking Affidavits',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="hero"
      style={{
        background: `url(${process.env.PUBLIC_URL}/hero-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background pattern */}
      <div className="hero-bg-pattern" />

      <div className="hero-grid container">
        {/* Left — Content */}
        <div className={`hero-content${visible ? ' visible' : ''}`}>
          <span className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Melville Paralegal Services
          </span>

          <h1 className="hero-headline">
            Compassionate Guidance.
            <span className="hero-highlight"> Intelligent Advocacy.</span>
          </h1>

          <p className="hero-tagline">
            Helping clients navigate legal processes with compassion, clarity, strategy and confidence.
          </p>

          <p className="hero-supporting-copy">
            Legal and disability-benefit issues can feel complicated, time-sensitive and overwhelming. Melville Paralegal
            Services provides compassionate, well-prepared assistance to people appealing ODSP and CPP Disability
            decisions, as well as Ontario landlords, Human Rights Tribunal parties and Small Claims Court clients. You
            will receive clear information, thoughtful legal analysis, honest assessments and respectful support based
            on the circumstances of your matter.
          </p>

          <ul className="hero-checklist">
            {highlights.map((h, i) => (
              <li key={i}>
                <span className="check-icon"><CheckIcon /></span>
                {h}
              </li>
            ))}
          </ul>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary hero-btn-main">
              Request a Disability Appeal Consultation <ArrowIcon />
            </Link>
            <a href="tel:+12899817712" className="btn-secondary">
              Call or Text 289-981-7712
            </a>
          </div>

          <div className="hero-badges">
            {badges.map((b, i) => (
              <div className="hero-badge" key={i}>
                <span className="badge-icon">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          <div className="hero-award-line">
            <img
              src={`${process.env.PUBLIC_URL}/homepage-award.png`}
              alt="CommunityVotes Milton 2026 Platinum Winner — Paralegals category"
              className="hero-award-badge-img"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--warm-white)"/>
        </svg>
      </div>
    </section>
  );
}
