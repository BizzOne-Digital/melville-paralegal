import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import './Pricing.css';

const accessOptions = [
  {
    title: 'Request a Consultation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    desc: 'Complete the Prospective Client Intake Form to request a consultation to discuss the general nature of your matter and whether Melville Paralegal Services may be able to assist. Submitting the form does not guarantee that a consultation will be offered and does not create a paralegal-client relationship.',
    cta: 'Request a Consultation',
    ctaLink: '/contact',
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
    cta: 'Apply for Hardship Pricing',
    ctaLink: '/contact',
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
        title="Clear Fees and Defined Services"
        subtitle="Melville Paralegal Services offers flat-fee, stage-based, limited-scope and customized service options where appropriate."
        breadcrumb={[{ label: 'Fees' }]}
      />

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-philosophy">
            <div className="pricing-phil-text">
              <span className="section-label">Our Approach to Fees</span>
              <h2>Transparent and Explained in Advance</h2>
              <div className="divider-line" style={{ margin: '16px 0' }} />
              <p>Melville Paralegal Services may offer flat-fee, stage-based, limited-scope, hourly or customized service arrangements depending on the nature and complexity of the matter.</p>
              <p>Before work begins, clients receive written confirmation of the agreed services, professional fees, applicable HST, anticipated disbursements, payment requirements and any services excluded from the agreed scope.</p>
              <p><strong>Disbursements</strong> are expenses paid or incurred on a client's behalf in connection with the legal matter. These may include court or tribunal filing fees, process-server fees, document searches, records, reports, transcripts, courier charges, travel expenses and other third-party costs.</p>
              <p>Disbursements are separate from professional fees unless expressly included in the written engagement agreement or quote. Known or reasonably anticipated disbursements will be explained in advance whenever possible. Some additional expenses may arise as the matter progresses.</p>
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
              <h3>Request Fee Information</h3>
              <p>Contact us to receive general fee information or a written matter-specific quote before committing to any services.</p>
              <Link to="/contact" className="btn-primary phil-btn">Book</Link>
              <Link to="/contact" className="btn-secondary phil-btn" style={{ marginTop: 10 }}>Apply for Hardship Pricing</Link>
            </div>
          </div>

          <div className="pricing-principles">
            <h3>What the Written Fee Confirmation Should Explain</h3>
            <ul style={{ maxWidth: 720, margin: '0 auto 40px', color: 'var(--charcoal-light)', lineHeight: 1.9, listStyle: 'disc', paddingLeft: 20 }}>
              <li>The professional services included</li>
              <li>The professional fee and applicable HST</li>
              <li>Required advance payment or payment milestones</li>
              <li>Government and court filing fees</li>
              <li>Process-server, search, report and third-party charges</li>
              <li>Travel or attendance expenses</li>
              <li>Services excluded from the fee</li>
              <li>The cost or approval process for additional work</li>
            </ul>
            <p style={{ maxWidth: 720, margin: '0 auto 40px', color: 'var(--charcoal-light)', lineHeight: 1.8, textAlign: 'center' }}>
              Unless expressly included in writing, professional fees do not include court or tribunal filing fees, sheriff or
              enforcement fees, process-server fees, searches, third-party reports, medical or expert reports, transcripts,
              external courier charges, travel outside the agreed service area or other disbursements. No additional legal
              work will be performed without authorization where a revised fee or expanded scope is required.
            </p>
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
          <div className="pricing-principles" style={{ marginTop: 40 }}>
            <h3>Consultation Fee Credit</h3>
            <p style={{ maxWidth: 720, margin: '0 auto 24px', color: 'var(--charcoal-light)', lineHeight: 1.8, textAlign: 'center' }}>
              Where Melville Paralegal Services is retained for the same matter following a paid consultation, the
              consultation fee will be applied as a credit toward the professional fees payable under the written
              retainer. The credit does not apply to HST, court or tribunal filing fees, disbursements, travel charges or
              other third-party costs. The credit and its application will be confirmed in writing.
            </p>
            <h3>Payment and Retainer Notice</h3>
            <p style={{ maxWidth: 720, margin: '0 auto', color: 'var(--charcoal-light)', lineHeight: 1.8, textAlign: 'center' }}>
              Depending on the service, payment may be required before work begins or according to written payment
              milestones. Payment does not create a paralegal-client relationship unless Melville Paralegal Services has
              completed the conflict check, confirmed acceptance, completed required identification procedures and
              issued a written retainer agreement or other written confirmation of engagement.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
