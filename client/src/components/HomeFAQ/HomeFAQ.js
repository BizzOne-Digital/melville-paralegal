import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeFAQ.css';

const faqs = [
  {
    q: 'What can Melville Paralegal Services assist with?',
    a: 'The practice’s primary focus is disability-benefit appeals, including ODSP internal reviews and Social Benefits Tribunal appeals, and CPP Disability reconsiderations and Social Security Tribunal appeals. Melville Paralegal Services also assists Ontario landlords, selected Human Rights Tribunal parties, Small Claims Court clients, judgment creditors, and people requiring Notary Public or Commissioner for Taking Affidavits services. Services are provided only where the matter falls within the permitted scope of Ontario paralegal practice.',
  },
  {
    q: 'Is there a fee for a consultation?',
    a: 'Consultation fees, where applicable, will be confirmed before the appointment. If Melville Paralegal Services is retained for the same matter following a paid consultation, the consultation fee will be credited toward the professional fees under the written retainer. The credit does not apply to HST, filing fees, disbursements, travel charges or third-party costs.',
  },
  {
    q: 'Does booking make me a client?',
    a: 'No. Submitting the website contact form, completing a later intake form, booking a consultation, sending an email or making an inquiry does not create a paralegal-client relationship. A relationship is created only after Melville Paralegal Services agrees to act and confirms the engagement in writing.',
  },
  {
    q: 'Where does Melville Paralegal Services serve clients?',
    a: 'Melville Paralegal Services serves clients across Ontario, with a main office in Milton and a satellite office in New Liskeard, Ontario. Many tribunal, disability-benefit and Small Claims Court matters can be managed through virtual meetings, telephone calls, email and electronic document exchange. Acceptance depends on the type of proceeding, required appearances, deadlines, location and circumstances of the matter.',
  },
  {
    q: 'Are results guaranteed?',
    a: 'No. Outcomes depend on the evidence, applicable law, conduct of the parties and decisions made by courts, tribunals and other decision-makers.',
  },
  {
    q: 'How much will my matter cost?',
    a: 'Fees depend on the service, complexity, procedural stage, document volume and attendance requirements. Fees and anticipated additional costs are discussed and confirmed in writing before work begins.',
  },
];

function HomeFAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`home-faq-item${open ? ' open' : ''}`}>
      <button className="home-faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="home-faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="home-faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function HomeFAQ() {
  return (
    <section className="home-faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Common Questions</span>
          <h2>Frequently Asked Questions</h2>
          <div className="divider-line" />
        </div>
        <div className="home-faq-list">
          {faqs.map((f, i) => <HomeFAQItem key={i} q={f.q} a={f.a} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/faq" className="btn-secondary">View All FAQs</Link>
        </div>
      </div>
    </section>
  );
}
