import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import './FAQ.css';

const faqs = [
  {
    cat: 'General',
    items: [
      { q: 'What is a licensed paralegal?', a: 'A Licensed Paralegal is a regulated legal professional authorized by the Law Society of Ontario to provide legal services in specific areas, including tribunal proceedings, Small Claims Court and summary conviction offences. Heidi Melville is a Licensed Paralegal regulated by the Law Society of Ontario.' },
      { q: 'How is a paralegal different from a lawyer?', a: 'Lawyers can practise in all areas of law. Licensed paralegals in Ontario are authorized to provide legal services within specific permitted areas. For matters within a paralegal\'s permitted scope, the quality of service and legal skills are held to a professional regulatory standard.' },
      { q: 'Are your fees transparent?', a: 'Yes. Fees are explained clearly before a retainer is signed. A written quote or current pricing guide is provided before services begin. Government fees, filing fees, service fees and other third-party costs are separate from professional fees and are explained as they arise.' },
      { q: 'Can you guarantee an outcome?', a: 'No. No outcome in legal proceedings can be guaranteed. MPS provides careful preparation, honest advice and strategic representation — but results depend on the facts, evidence, applicable law and the decision-maker.' },
    ],
  },
  {
    cat: 'ODSP & CPP Disability',
    items: [
      { q: 'What is the difference between ODSP and CPP Disability?', a: 'ODSP (Ontario Disability Support Program) is a provincial income support program for Ontario residents with disabilities who meet income and asset criteria. CPP Disability is a federal employment insurance benefit for people who have made sufficient CPP contributions and have a severe and prolonged disability. They have different eligibility criteria, application processes and appeal bodies.' },
      { q: 'I was denied ODSP. Can you help me appeal?', a: 'Yes. MPS assists with ODSP internal reviews and appeals to the Social Benefits Tribunal. The first step is a free intake meeting to review the general circumstances and assess whether the appeal has a reasonable basis.' },
      { q: 'Can you help with my CPP Disability application, or only with appeals?', a: 'Both. MPS can assist with CPP Disability applications, reconsiderations and appeals to the Social Security Tribunal. Starting with a well-prepared application can reduce delays and avoid the need for multiple appeals.' },
    ],
  },
  {
    cat: 'Process & Meetings',
    items: [
      { q: 'What happens at the free intake meeting?', a: 'The complimentary intake meeting is a brief virtual meeting by Zoom or Google Meet. It gives you an opportunity to describe the general nature of your matter and allows Heidi to determine whether MPS may be able to assist. It does not include legal advice, a detailed document review or an assessment of the merits. Attending the meeting does not create a paralegal-client relationship.' },
      { q: 'Do I need to travel for appointments?', a: 'No. Most services are provided virtually across Ontario. For matters requiring in-person meetings, Heidi is available in Milton, Ottawa and Northern Ontario by arrangement. Mobile notary appointments are available for documents requiring in-person notarization.' },
      { q: 'Are evening and weekend appointments available?', a: 'Yes. Flexible scheduling including evenings and weekends is available by appointment.' },
    ],
  },
  {
    cat: 'Fees & Access',
    items: [
      { q: 'Is there a hardship pricing option?', a: 'In limited circumstances, reduced professional fees, limited-scope services or alternative arrangements may be available through a confidential hardship-pricing application. Approval is based on individual circumstances, the nature of the matter and practice capacity, and is never guaranteed. Third-party costs are not reduced unless expressly confirmed in writing.' },
      { q: 'What are limited-scope services?', a: 'Limited-scope services involve assisting with a specific task — such as drafting a document, preparing a submission or conducting research — without taking on full representation. The scope of the engagement is confirmed in writing before work begins.' },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d={open ? 'M4 9H14' : 'M9 4V14M4 9H14'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="faq-page">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about Melville Paralegal Services, our processes, and what to expect."
        breadcrumb={[{ label: 'FAQ' }]}
      />

      <section className="faq-section">
        <div className="container faq-grid">
          <div className="faq-content">
            {faqs.map((section, i) => (
              <div key={i} className="faq-category">
                <h3 className="faq-cat-title">{section.cat}</h3>
                <div className="faq-list">
                  {section.items.map((item, j) => (
                    <FAQItem key={j} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="faq-sidebar">
            <div className="faq-sidebar-card">
              <div className="sidebar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
              <h4>Have a Different Question?</h4>
              <p>Book a complimentary virtual intake meeting to discuss the general nature of your matter.</p>
              <a href="/intake" className="btn-primary sidebar-btn">Book Free Meeting</a>
            </div>

            <div className="faq-sidebar-contact">
              <h4>Contact Us Directly</h4>
              <p>289-981-7712</p>
              <p>connect@melvilleparalegal.ca</p>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
