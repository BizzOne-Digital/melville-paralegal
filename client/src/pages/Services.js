import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './Services.css';

const fallbackServices = [
  {
    slug: 'disability-benefits',
    title: 'ODSP & CPP Disability',
    tag: 'Primary Focus',
    featured: true,
    summary: 'Assistance with ODSP denials, internal reviews, Social Benefits Tribunal appeals, and CPP Disability applications, reconsiderations and appeals to the Social Security Tribunal.',
    highlights: ['ODSP denials & internal reviews', 'Social Benefits Tribunal', 'CPP Disability applications', 'CPP Disability reconsiderations & appeals', 'Evidence organization & gaps analysis', 'Written submissions & hearing preparation'],
  },
  {
    slug: 'landlord-tenant',
    title: 'Landlord & Tenant Board',
    tag: 'Landlord Services',
    featured: false,
    summary: 'Assistance for Ontario residential landlords dealing with rent arrears, persistent late payment, tenant conduct, property damage, substantial interference and other LTB matters.',
    highlights: ['Rent arrears & late payment', 'LTB notices & applications', 'Evidence organization & hearings', 'Settlement discussions', 'Unauthorized occupants', 'Landlord\'s own use applications'],
  },
  {
    slug: 'human-rights',
    title: 'Human Rights Tribunal',
    tag: 'Select Matters',
    featured: false,
    summary: 'Assistance with select discrimination and accommodation matters under the Ontario Human Rights Code, including HRTO applications, mediation and hearing preparation.',
    highlights: ['HRTO applications & responses', 'Disability accommodation matters', 'Written submissions', 'Mediation preparation', 'Hearing preparation', 'Evidence organization'],
  },
  {
    slug: 'small-claims',
    title: 'Small Claims Court',
    tag: 'Civil Matters',
    featured: false,
    summary: 'Assistance for individuals and small businesses with claims and defences involving unpaid accounts, contracts, property damage and other Small Claims matters.',
    highlights: ["Demand letters", "Plaintiff's Claims & Defences", 'Settlement conferences', 'Motions & negotiations', 'Trial representation', 'Defendant\'s Claims'],
  },
  {
    slug: 'judgment-enforcement',
    title: 'Judgment Enforcement',
    tag: 'Post-Judgment',
    featured: false,
    summary: 'A court judgment does not automatically result in payment. MPS assists judgment creditors with enforcement planning and legally available enforcement procedures.',
    highlights: ['Enforcement planning', 'Payment demands', 'Debtor examinations', 'Garnishments', 'Writs of seizure & sale', 'Credit bureau reporting'],
  },
  {
    slug: 'legal-research',
    title: 'Legal Research & Drafting',
    tag: 'Document Services',
    featured: false,
    summary: 'Focused legal research and drafting within the permitted scope of Ontario paralegal practice, including memoranda, submissions, correspondence and court documents.',
    highlights: ['Legal research memoranda', 'Written opinions', 'Demand & cease-and-desist letters', 'Affidavits & statutory declarations', 'Settlement proposals', 'Hearing briefs & submissions'],
  },
  {
    slug: 'notary',
    title: 'Notary Public & Commissioner',
    tag: 'Notarial Services',
    featured: false,
    summary: 'In-person notarization and mobile notary services, as well as remote commissioning of affidavits and statutory declarations where Ontario Regulation 431/20 requirements are met.',
    highlights: ['Signature notarization', 'Certified true copies', 'Consent-to-travel documents', 'Commissioning of affidavits', 'Statutory declarations', 'Remote commissioning available'],
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Services() {
  const [services, setServices] = useState(fallbackServices);

  useEffect(() => {
    API.get('/services')
      .then(r => { if (r.data && r.data.length) setServices(r.data); })
      .catch(() => {});
  }, []);

  return (
    <div className="services-page">
      <PageHeader
        title="Legal Services"
        subtitle="Melville Paralegal Services provides practical, compassionate legal assistance across a range of Ontario matters. No outcome is guaranteed — but you will always have clear, honest guidance."
        breadcrumb={[{ label: 'Services' }]}
      />

      <section className="services-list-section">
        <div className="container">
          <div className="services-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>ODSP and CPP Disability matters are the primary focus of this practice. All services are subject to availability, conflict checking and scope of Ontario paralegal regulation.</p>
          </div>

          <div className="services-full-list">
            {services.map((s) => (
              <div key={s.slug} className={`service-row${s.featured ? ' featured' : ''}`}>
                <div className="service-row-header">
                  {s.tag && <span className="service-tag">{s.tag}</span>}
                  <h2>{s.title}</h2>
                  <p>{s.summary}</p>
                </div>
                <div className="service-row-body">
                  <ul className="service-highlights">
                    {s.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="check-badge"><CheckIcon /></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${s.slug}`} className="btn-primary service-detail-btn">
                    Full Details <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-intake-note">
            <h3>Not Sure Where You Fit?</h3>
            <p>Book a complimentary virtual intake meeting. Heidi will briefly discuss the general nature of your matter and let you know whether MPS may be able to help — before any commitment is required.</p>
            <Link to="/intake" className="btn-primary">Book Free Meeting</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
