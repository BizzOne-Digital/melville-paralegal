import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './Services.css';

const fallbackServices = [
  {
    slug: 'disability-benefits',
    title: 'Disability Benefits Appeals',
    tag: 'Primary Focus',
    featured: true,
    summary: 'Primary focus: ODSP internal reviews and Social Benefits Tribunal appeals, plus CPP Disability reconsiderations and Social Security Tribunal appeals.',
    highlights: ['ODSP internal reviews', 'Social Benefits Tribunal appeals', 'CPP Disability reconsiderations', 'Social Security Tribunal appeals', 'Evidence organization & gaps analysis', 'Written submissions & hearing preparation'],
  },
  {
    slug: 'landlord-tenant',
    title: 'Landlord Legal Services',
    tag: 'Landlord Services',
    featured: false,
    summary: 'Legal assistance for landlords involving unpaid rent, tenancy breaches, termination notices, applications, hearings and selected post-order steps.',
    highlights: ['Rent arrears & persistent late payment', 'Notices of termination & applications', 'Tenant interference & property damage', "Landlord's own-use proceedings", 'LTB hearing preparation & representation', 'Selected post-order steps'],
  },
  {
    slug: 'tenant-legal-assistance',
    title: 'Tenant Legal Assistance — Select Matters',
    tag: 'Select Matters',
    featured: false,
    summary: 'Residential tenant matters are considered selectively and on a case-by-case basis. Melville Paralegal Services may assist with reviewing landlord applications, preparing a response, selected T2 or T6 applications, organizing evidence, hearing preparation and representation before the Landlord and Tenant Board.',
    highlights: ['Reviewing landlord applications', 'Preparing a response', 'Selected T2 or T6 applications', 'Organizing evidence', 'Hearing preparation', 'LTB representation where retained'],
  },
  {
    slug: 'human-rights',
    title: 'Human Rights Tribunal',
    tag: 'Select Matters',
    featured: false,
    summary: 'Selected assistance for applicants and respondents involving discrimination, harassment, accommodation, reprisal and Human Rights Tribunal proceedings.',
    highlights: ['HRTO applications & responses', 'Discrimination & accommodation matters', 'Mediation & settlement discussions', 'Disclosure & hearing preparation', 'Evidence organization', 'Selected hearing representation'],
  },
  {
    slug: 'small-claims-enforcement',
    title: 'Small Claims Court & Judgment Enforcement',
    tag: 'Civil Matters',
    featured: false,
    summary: 'Claims, defences, motions, settlement discussions, hearings, trials and selected post-judgment enforcement procedures.',
    highlights: ['Demand letters & Plaintiff\'s Claims', 'Defences & Defendant\'s Claims', 'Settlement conferences & motions', 'Trial representation', 'Debtor examinations & garnishments', 'Writs of seizure and sale'],
  },
  {
    slug: 'legal-research',
    title: 'Legal Research & Document Drafting',
    tag: 'Document Services',
    featured: false,
    summary: 'Focused legal research, written advocacy and document preparation within the permitted scope of Ontario paralegal practice.',
    highlights: ['Legal research memoranda', 'Written submissions & hearing briefs', 'Factums', 'Demand & procedural correspondence', 'Affidavits & statutory declarations', 'Court and tribunal documents'],
  },
  {
    slug: 'notary',
    title: 'Notary Public & Commissioner for Taking Affidavits',
    tag: 'Notarial Services',
    featured: false,
    summary: 'In-person notarization, mobile or agreed-location appointments, and eligible in-person or remote commissioning services.',
    highlights: ['Signature notarization', 'Certified true copies', 'Consent-to-travel documents', 'Commissioning of affidavits', 'Statutory declarations', 'Eligible remote commissioning'],
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
        title="Focused Legal Services"
        subtitle="Melville Paralegal Services provides focused representation and limited-scope assistance in selected Ontario legal matters. Choose the service area that most closely matches your situation."
        breadcrumb={[{ label: 'Legal Services' }]}
      />

      <section className="services-list-section">
        <div className="container">
          <div className="services-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>Every matter is assessed individually. Acceptance is subject to conflict checking, paralegal scope of practice, availability, deadlines, adequate preparation time and completion of the required retainer process.</p>
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
            <p>Request a consultation. Melville Paralegal Services will review the general nature of your matter and let you know whether it may be able to help.</p>
            <Link to="/contact" className="btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
