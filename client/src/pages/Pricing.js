import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import './Pricing.css';

const accessOptions = [
  {
    title: 'Complimentary Virtual Intake Meeting',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    desc: 'A complimentary introductory meeting by Zoom or Google Meet to discuss the general nature of your matter and whether MPS may be able to assist. Does not include legal advice or a detailed assessment. Booking does not create a paralegal-client relationship.',
    cta: 'Book Free Meeting',
    ctaLink: '/intake',
    highlight: true,
  },
  {
    title: 'Hardship Pricing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    desc: 'Reduced professional fees, limited-scope services or alternative arrangements may be available in limited circumstances through a confidential hardship-pricing application. Subject to individual circumstances, the nature of the matter and practice capacity. Not guaranteed. Only effective when confirmed in writing.',
    note: 'Government fees, filing fees, process-serving expenses, searches, reports and other third-party costs are not reduced unless expressly confirmed.',
    highlight: false,
  },
  {
    title: 'Flexible Appointments',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    desc: 'Flexible evening and weekend appointments are available by arrangement. Virtual appointments are available across Ontario.',
    highlight: false,
  },
  {
    title: 'Mobile Notary Appointments',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    desc: 'Heidi may travel to the client or meet the client at an agreed location for documents requiring in-person notarization. Mobile and travel charges may apply.',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="pricing-page">
      <PageHeader
        title="Fees & Pricing"
        subtitle="Melville Paralegal Services provides professional legal services with transparent, clearly explained fees. A written quote or pricing guide is provided before any work begins."
        breadcrumb={[{ label: 'Pricing' }]}
      />

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-philosophy">
            <div className="pricing-phil-text">
              <span className="section-label">Our Approach to Fees</span>
              <h2>Transparent, Explained in Advance</h2>
              <div className="divider-line" style={{ margin: '16px 0' }} />
              <p>Legal fees at Melville Paralegal Services are presented as professional service options, not commercial products. Before any retainer is signed, fees are clearly explained — including what is and is not included.</p>
              <p>Detailed fees are provided through a current, dated pricing guide or a written matter-specific quote. Fees vary depending on the nature and scope of the matter.</p>
              <p>Government fees, filing fees, process-serving expenses, searches, reports and other third-party costs are separate from professional fees and are explained clearly as they arise.</p>
            </div>
            <div className="pricing-phil-card">
              <div className="phil-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>Request a Quote</h3>
              <p>Contact us to receive a current pricing guide or a written matter-specific quote before committing to any services.</p>
              <Link to="/contact" className="btn-primary phil-btn">Contact for Pricing</Link>
              <p className="phil-note">No obligation. No surprise fees.</p>
            </div>
          </div>

          <div className="pricing-principles">
            <h3>What to Expect from Our Fees</h3>
            <div className="principles-grid">
              {[
                { title: 'Explained before you commit', desc: 'Fees are always explained clearly before a retainer is signed. You will know what you are paying for.' },
                { title: 'Written confirmation', desc: 'All fee arrangements are confirmed in writing. Verbal agreements are not sufficient.' },
                { title: 'No hidden third-party costs', desc: 'Government fees, filing fees and other disbursements are explained separately and in advance.' },
                { title: 'No guarantees of outcome', desc: 'Professional fees are charged for services provided, not for outcomes. No result can be guaranteed.' },
              ].map((p, i) => (
                <div key={i} className="principle-item">
                  <div className="principle-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7L5.5 10.5L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="access-options-section">
            <h2 style={{ marginBottom: 8 }}>Access Options</h2>
            <p style={{ color: 'var(--charcoal-light)', marginBottom: 40, fontSize: '0.95rem' }}>The following options are available to ensure legal services are accessible:</p>
            <div className="access-grid">
              {accessOptions.map((o, i) => (
                <div key={i} className={`access-card${o.highlight ? ' highlight' : ''}`}>
                  <div className="access-icon">{o.icon}</div>
                  <h3>{o.title}</h3>
                  <p>{o.desc}</p>
                  {o.note && <p className="access-note">{o.note}</p>}
                  {o.cta && <Link to={o.ctaLink} className="btn-primary access-cta">{o.cta}</Link>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
