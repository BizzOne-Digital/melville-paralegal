import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './ServiceDetail.css';

const fallbackServiceData = {
  'disability-benefits': {
    title: 'ODSP & CPP Disability',
    tag: 'Primary Focus',
    subtitle: 'Compassionate, strategic assistance with Ontario and federal disability benefit processes.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    intro: 'Disability benefits exist to support people who cannot work due to illness or disability — but the application and appeal process can be complex, confusing and emotionally exhausting. Melville Paralegal Services provides practical assistance at every stage of the ODSP and CPP Disability processes.',
    important: 'ODSP and CPP Disability are separate programs with different eligibility criteria, application processes and appeal bodies. MPS clearly distinguishes both processes and explains which applies to your situation.',
    sections: [
      {
        title: 'ODSP — Ontario Disability Support Program',
        body: 'ODSP is a provincial income support program administered by the Ministry of Children, Community and Social Services. Eligibility requires meeting both financial and disability criteria. If your ODSP application is denied or cancelled, you have the right to request an internal review and, if unsuccessful, to appeal to the Social Benefits Tribunal.',
        items: ['ODSP denials and cancellations', 'Internal review requests', 'Social Benefits Tribunal appeals', 'Reviewing the decision and medical records', 'Identifying gaps in the evidence', 'Organizing medical and functional evidence', 'Preparing written submissions', 'Hearing preparation and representation'],
      },
      {
        title: 'CPP Disability — Canada Pension Plan Disability',
        body: 'CPP Disability is a federal benefit administered by Service Canada. To qualify, you must have made sufficient CPP contributions and have a disability that is both severe and prolonged. If denied, you may request a reconsideration and, if still denied, appeal to the Social Security Tribunal of Canada.',
        items: ['CPP Disability applications', 'Reconsideration requests', 'Social Security Tribunal appeals', 'Reviewing medical records and functional reports', 'Organizing evidence and identifying gaps', 'Written submissions and hearing preparation', 'Representation at the General Division and Appeal Division'],
      },
    ],
    disclaimer: 'No outcome is guaranteed. Results depend on the individual circumstances, the medical evidence, applicable eligibility criteria and the decision-maker. MPS provides honest assessments and will not accept a file where there is no reasonable basis for the appeal.',
  },
  'landlord-tenant': {
    title: 'Landlord & Tenant Board',
    tag: 'Landlord Services',
    subtitle: 'Practical LTB assistance for Ontario residential landlords.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    intro: 'Dealing with a difficult tenancy can be stressful, time-consuming and costly. Melville Paralegal Services helps Ontario residential landlords understand their rights, prepare the right documents and navigate the Landlord and Tenant Board process.',
    important: 'Select tenant matters may also be accepted based on the issues, evidence and availability. Contact MPS to discuss your situation.',
    sections: [
      {
        title: 'Landlord Services at the LTB',
        body: 'MPS assists landlords with a range of residential tenancy matters before the Landlord and Tenant Board. The LTB process has specific procedural requirements. Proper preparation of notices and applications — and organized evidence — are essential to a well-presented case.',
        items: ['Rent arrears and persistent late payment', 'Tenant conduct and disturbance', 'Property damage', 'Substantial interference with reasonable enjoyment', 'Unauthorized occupants', "Landlord's own use", 'Preparing and reviewing notices', 'Filing LTB applications', 'Evidence organization', 'Settlement discussions', 'Hearing preparation and representation'],
      },
    ],
    disclaimer: 'MPS represents landlords only in most LTB matters. Select tenant matters may be accepted based on circumstances and availability. LTB processes and timelines are subject to change. Outcomes depend on individual facts and the evidence presented.',
  },
  'human-rights': {
    title: 'Human Rights Tribunal of Ontario',
    tag: 'Select Matters',
    subtitle: 'Assistance with select discrimination and accommodation matters under the Ontario Human Rights Code.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    intro: 'The Ontario Human Rights Code protects people from discrimination in areas such as employment, housing and services based on protected grounds including disability, race, sex and other characteristics. MPS accepts select human rights matters based on the issues, evidence and availability.',
    important: 'Not all human rights matters fall within the permitted scope of paralegal practice. MPS will clearly advise whether your matter can be assisted and, if not, help identify appropriate referrals.',
    sections: [
      {
        title: 'HRTO — Select Matters',
        body: 'Assistance is available with select discrimination and accommodation matters, including disability-related accommodation, housing discrimination and related issues. Each matter is assessed individually.',
        items: ['Reviewing the circumstances and evidence', 'HRTO application preparation', 'Responding to HRTO applications', 'Organizing supporting evidence', 'Preparing written submissions', 'Mediation and settlement preparation', 'Hearing preparation and representation'],
      },
    ],
    disclaimer: 'HRTO matters are accepted on a selective basis. Acceptance depends on the issues, evidence, the scope of paralegal practice and availability. No outcome is guaranteed.',
  },
  'small-claims': {
    title: 'Small Claims Court',
    tag: 'Civil Matters',
    subtitle: 'Assistance for individuals and small businesses with Small Claims Court matters in Ontario.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    intro: "Small Claims Court in Ontario handles civil disputes up to $35,000. The process can be straightforward — but procedural missteps, missing deadlines or poorly organized evidence can undermine an otherwise strong case. MPS helps individuals and small businesses present their matters clearly and effectively.",
    important: 'Small Claims Court has specific procedural timelines and requirements. Early legal assistance helps avoid procedural errors that can affect the outcome of your claim.',
    sections: [
      {
        title: 'Small Claims Court Services',
        body: 'MPS assists with both claims and defences in Small Claims Court, from initial demand letters through to trial representation.',
        items: ['Unpaid accounts and invoices', 'Contract disputes', 'Property damage', 'Consumer disputes', 'Demand letters', "Plaintiff's Claims", 'Defences', "Defendant's Claims", 'Settlement conferences', 'Motions and negotiations', 'Hearing preparation and trial representation'],
      },
    ],
    disclaimer: "Ontario's Small Claims Court monetary limit is currently $35,000. MPS cannot assist with matters outside the permitted scope of paralegal practice. No outcome is guaranteed.",
  },
  'judgment-enforcement': {
    title: 'Judgment Enforcement',
    tag: 'Post-Judgment',
    subtitle: 'Helping Ontario judgment creditors take practical steps toward recovering what they are owed.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    intro: 'Winning a judgment is only the first step. A court order does not automatically result in payment — you must take enforcement steps to recover the money owed. MPS assists judgment creditors with enforcement planning and legally available enforcement procedures.',
    important: 'Recovery cannot be guaranteed and depends on the debtor\'s income, assets and financial circumstances. MPS provides an honest assessment of enforcement options and realistic expectations before proceeding.',
    sections: [
      {
        title: 'Judgment Enforcement Services',
        body: 'MPS assists with planning and pursuing legally available enforcement procedures after a Small Claims Court or other civil judgment.',
        items: ['Enforcement planning', 'Payment demands', 'Debtor examinations (examination in aid of execution)', 'Wage garnishments', 'Bank account garnishments', 'Writs of seizure and sale', 'Credit bureau reporting where applicable', 'Enforcement correspondence'],
      },
    ],
    disclaimer: 'Recovery depends entirely on the debtor\'s income, assets and financial circumstances. Not all judgments are collectible. MPS provides honest assessments and will not pursue enforcement that is unlikely to result in any recovery.',
  },
  'legal-research': {
    title: 'Legal Research & Document Drafting',
    tag: 'Document Services',
    subtitle: 'Focused legal research and written advocacy within the permitted scope of Ontario paralegal practice.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    intro: 'Not every legal matter requires full representation. MPS provides limited-scope legal research, written advocacy and document drafting services for matters within the permitted scope of Ontario paralegal practice.',
    important: 'Limited-scope services are confirmed in writing and do not include ongoing representation unless expressly agreed. MPS is clear about what is and is not included in each engagement.',
    sections: [
      {
        title: 'Research & Drafting Services',
        body: 'These services are available independently or as part of broader representation. Each engagement is confirmed in writing.',
        items: ['Legal research memoranda', 'Written opinions within permitted scope', 'Hearing briefs and factums', 'Written submissions', 'Demand letters', 'Cease-and-desist letters', 'Settlement proposals', 'Procedural correspondence', 'Affidavits', 'Statutory declarations', 'Court and tribunal documents'],
      },
    ],
    disclaimer: 'Document drafting does not constitute legal advice and does not create a full representation relationship unless confirmed in writing. MPS can only draft documents within the permitted scope of Ontario paralegal practice.',
  },
  'notary': {
    title: 'Notary Public & Commissioner of Oaths',
    tag: 'Notarial Services',
    subtitle: 'In-person and mobile notary services, and remote commissioning where Ontario regulations permit.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
    intro: 'Many legal, financial and government documents require notarization or commissioning by an authorized person. Heidi Melville is both a Notary Public and Commissioner for Taking Affidavits, and is available in person and by mobile appointment.',
    important: 'Ontario currently does not authorize online notarization. Notarization requires an in-person meeting. Eligible documents may be commissioned remotely by video appointment when Ontario Regulation 431/20 requirements are met. Clients should confirm that the receiving organization will accept a remotely commissioned document before booking a remote appointment.',
    sections: [
      {
        title: 'Notary Public Services',
        body: 'Notarization must be completed in person. Heidi can meet clients at an agreed location or travel to them by appointment. Travel charges may apply.',
        items: ['Notarizing signatures', 'Certified true copies', 'Consent-to-travel documents', 'Invitation letters', 'Other documents requiring a notary public', 'Mobile notary (travel to client or agreed location)', 'Serving Milton, Ottawa and Northern Ontario'],
      },
      {
        title: 'Commissioner of Oaths Services',
        body: 'Eligible documents may be commissioned remotely by video appointment where Ontario Regulation 431/20 requirements are met.',
        items: ['Commissioning affidavits', 'Statutory declarations', 'Oaths and affirmations', 'Remote commissioning by video (where eligible)', 'In-person commissioning available'],
      },
    ],
    disclaimer: 'Ontario currently does not permit online notarization. Remote commissioning is subject to specific regulatory requirements. Not all organizations accept remotely commissioned documents — clients should confirm acceptance before booking.',
  },
};

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5L5 9.5L11 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(fallbackServiceData[slug]);
  const [allServices, setAllServices] = useState(
    Object.entries(fallbackServiceData).map(([k, v]) => ({ slug: k, title: v.title }))
  );
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setNotFound(false);
    setService(fallbackServiceData[slug]);
    API.get(`/services/${slug}`)
      .then(r => setService(r.data))
      .catch(() => { if (!fallbackServiceData[slug]) setNotFound(true); });
  }, [slug]);

  useEffect(() => {
    API.get('/services')
      .then(r => { if (r.data && r.data.length) setAllServices(r.data); })
      .catch(() => {});
  }, []);

  if (!service || notFound) {
    return (
      <div style={{ padding: '160px 24px', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Link to="/services" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>View All Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <PageHeader
        title={service.title}
        subtitle={service.subtitle}
        tag={service.tag}
        breadcrumb={[{ label: 'Services', path: '/services' }, { label: service.title }]}
      />

      <section className="service-detail-section">
        <div className="container service-detail-grid">
          <div className="service-detail-content">
            <div className="service-hero-img">
              <img src={service.image} alt={service.title} />
            </div>

            <p className="service-intro">{service.intro}</p>

            {service.important && (
              <div className="service-important">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>{service.important}</p>
              </div>
            )}

            {service.sections.map((sec, i) => (
              <div key={i} className="service-section-block">
                <h3>{sec.title}</h3>
                {sec.body && <p className="section-body">{sec.body}</p>}
                <ul className="service-items-list">
                  {sec.items.map((item, j) => (
                    <li key={j}>
                      <span className="check-badge"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="service-disclaimer-box">
              <p><strong>Please note:</strong> {service.disclaimer}</p>
            </div>
          </div>

          <aside className="service-detail-sidebar">
            <div className="sidebar-cta-card">
              <h3>Ready to Discuss Your Matter?</h3>
              <p>Book a complimentary virtual intake meeting with Heidi to determine whether MPS can assist.</p>
              <Link to="/intake" className="btn-primary sidebar-full-btn">Book Free Meeting</Link>
              <div className="sidebar-divider" />
              <div className="sidebar-contact">
                <p><strong>Call or Text</strong></p>
                <a href="tel:+12899817712">289-981-7712</a>
                <p style={{ marginTop: 8 }}><strong>Email</strong></p>
                <a href="mailto:intake@melvilleparalegal.ca">intake@melvilleparalegal.ca</a>
              </div>
            </div>

            <div className="sidebar-other-services">
              <h4>Other Services</h4>
              <ul>
                {allServices
                  .filter(v => v.slug !== slug)
                  .slice(0, 5)
                  .map(v => (
                    <li key={v.slug}>
                      <Link to={`/services/${v.slug}`}>
                        <span>{v.title}</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
