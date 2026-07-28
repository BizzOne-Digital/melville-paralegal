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
    title: 'Disability Benefits Appeals',
    tag: 'Primary Focus',
    desc: 'ODSP internal reviews and Social Benefits Tribunal appeals, plus CPP Disability reconsiderations and Social Security Tribunal appeals.',
    featured: true,
  },
  {
    slug: 'landlord-tenant',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Landlord Legal Services',
    tag: 'Landlord Services',
    desc: 'Legal assistance for landlords involving unpaid rent, tenancy breaches, termination notices, applications, hearings and selected post-order steps.',
    featured: false,
  },
  {
    slug: 'tenant-legal-assistance',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/>
      </svg>
    ),
    title: 'Tenant Legal Assistance',
    tag: 'Select Matters',
    desc: 'Residential tenant matters considered selectively and on a case-by-case basis, including responses to landlord applications and selected T2 or T6 applications.',
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
    desc: 'Selected assistance for applicants and respondents involving discrimination, harassment, accommodation, reprisal and Human Rights Tribunal proceedings.',
    featured: false,
  },
  {
    slug: 'small-claims-enforcement',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    title: 'Small Claims & Enforcement',
    tag: 'Civil Matters',
    desc: 'Claims, defences, motions, settlement discussions, hearings, trials and selected post-judgment enforcement procedures.',
    featured: false,
  },
  {
    slug: 'legal-research',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Legal Research & Document Drafting',
    tag: 'Document Services',
    desc: 'Focused legal research, written advocacy and document preparation within the permitted scope of Ontario paralegal practice.',
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
    title: 'Notary & Commissioner for Taking Affidavits',
    tag: 'Document Services',
    desc: 'In-person notarization, mobile or agreed-location appointments, and eligible in-person or remote commissioning services.',
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
          <span className="section-label">Focused Legal Services</span>
          <h2>Melville Paralegal Services Provides Focused Representation</h2>
          <div className="divider-line" />
          <p>Limited-scope assistance in selected Ontario legal matters. Choose the service area that most closely matches your situation.</p>
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
          <Link to="/contact" className="btn-primary">Request a Consultation</Link>
        </div>
      </div>
    </section>
  );
}
