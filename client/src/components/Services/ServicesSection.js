import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const services = [
  {
    slug: 'disability-benefits',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: 'ODSP & CPP Disability',
    tag: 'Primary Focus',
    desc: 'Assistance with ODSP denials, internal reviews, CPP Disability applications, reconsiderations and appeals. Compassionate support for every step of the process.',
    featured: true,
  },
  {
    slug: 'landlord-tenant',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Landlord & Tenant Board',
    tag: 'Landlord Services',
    desc: 'Rent arrears, tenancy breaches, LTB applications and hearings. Clear guidance for Ontario residential landlords navigating complex tenancy issues.',
    featured: false,
  },
  {
    slug: 'human-rights',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/>
      </svg>
    ),
    title: 'Human Rights Tribunal',
    tag: 'Select Matters',
    desc: 'Assistance with select discrimination and accommodation matters under the Ontario Human Rights Code. Careful, strategic preparation of HRTO applications.',
    featured: false,
  },
  {
    slug: 'small-claims',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    title: 'Small Claims Court',
    tag: 'Civil Matters',
    desc: 'Unpaid accounts, contracts, property damage and consumer disputes. From demand letters through to trial representation within Small Claims jurisdiction.',
    featured: false,
  },
  {
    slug: 'judgment-enforcement',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'Judgment Enforcement',
    tag: 'Post-Judgment',
    desc: 'A judgment is only the beginning. Assistance with enforcement planning, garnishments, writs of seizure and sale, and debtor examinations.',
    featured: false,
  },
  {
    slug: 'notary',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'Notary & Commissioner',
    tag: 'Document Services',
    desc: 'Notarizing signatures, certifying copies, commissioning affidavits and statutory declarations. Mobile notary available; eligible documents commissioned remotely.',
    featured: false,
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2>Legal Services Tailored to Your Situation</h2>
          <div className="divider-line" />
          <p>Every client deserves honest advice, careful preparation and a clear understanding of their options.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`service-card${s.featured ? ' featured' : ''}`}
            >
              {s.tag && <span className="service-tag">{s.tag}</span>}
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-link">
                Learn more <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <p>Not sure which service applies to your situation?</p>
          <Link to="/intake" className="btn-primary">Request a Consultation</Link>
        </div>
      </div>
    </section>
  );
}
