import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './ServiceDetail.css';

const fallbackServiceData = {
  'disability-benefits': {
    title: 'Disability Benefits Appeals: ODSP and CPP Disability',
    tag: 'Primary Focus',
    subtitle: 'Compassionate, Organized Advocacy When Disability Benefits Are Denied',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    intro: 'A disability-benefit denial can be difficult to understand, particularly when the applicant is already managing significant medical, functional and financial challenges. Disability-benefit appeals are a primary focus of Melville Paralegal Services. Heidi assists with selected Ontario Disability Support Program (ODSP) appeals and Canada Pension Plan Disability (CPP-D) reconsiderations and appeals.',
    important: 'CPP-D and ODSP apply different legal tests, so the evidence and submissions must be tailored to the specific program and stage of appeal.',
    sections: [
      {
        title: 'ODSP Appeal Assistance',
        items: ['Reviewing the ODSP denial decision and applicable deadlines', 'Preparing or reviewing the request for internal review', 'Reviewing the Disability Determination Package and reasons for denial', 'Organizing medical, functional and personal evidence', 'Identifying evidentiary gaps and additional supporting information', 'Preparing written submissions for the Social Benefits Tribunal', 'Preparing the appellant and witnesses for the hearing', 'Representation at a Social Benefits Tribunal hearing', 'Reviewing the Tribunal\'s decision and explaining available next steps'],
      },
      {
        title: 'CPP Disability Appeal Assistance',
        body: 'For CPP Disability matters, services may include reviewing the Service Canada decision, preparing or strengthening a request for reconsideration, organizing medical and employment evidence, preparing an appeal to the Social Security Tribunal, written submissions, hearing preparation and representation where retained. The evidence should explain why the medical conditions prevent the person from working regularly and how the limitations have affected work capacity over time.',
        items: [],
      },
      {
        title: 'Building the Medical, Functional and Work-Capacity Evidence',
        items: ['Creating a medical, functional, employment and procedural chronology', 'Reviewing medical reports, treatment records and functional evidence', 'Identifying missing evidence, inconsistencies and changes in condition', 'Connecting the evidence to the applicable ODSP or CPP-D legal test', 'Preparing the appellant\'s testimony and written account', 'Explaining the tribunal process and preparing for questions in advance'],
      },
    ],
    disclaimer: 'No representative can guarantee that an ODSP or CPP Disability appeal will be allowed. Decisions are made by Service Canada, the Social Benefits Tribunal or the Social Security Tribunal based on the evidence and the applicable legal test.',
  },
  'landlord-tenant': {
    title: 'Ontario Landlord Legal Services',
    tag: 'Landlord Services',
    subtitle: 'Practical Assistance for Landlords Navigating the LTB Process',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    intro: 'Ontario residential tenancy proceedings are document-driven and deadline-sensitive. Errors in a notice, application, service method or calculation can delay a proceeding or affect the relief requested. Melville Paralegal Services assists landlords with selected matters under the Residential Tenancies Act and before the Landlord and Tenant Board.',
    important: 'The appropriate notice or application depends on the specific facts. A form should not be selected or served until the circumstances and available evidence have been reviewed.',
    sections: [
      {
        title: 'Landlord Matters',
        items: ['Rent arrears and persistent late payment', 'Notices of termination and landlord applications', 'Tenant interference, substantial interference or property damage', 'Unauthorized occupants or other tenancy breaches', "Landlord's own-use proceedings", 'Agreements to terminate a tenancy', 'Responses to selected tenant applications', 'LTB hearing preparation and representation', 'Review of LTB orders', 'Selected post-order or enforcement-related steps'],
      },
      {
        title: 'Rent Arrears and Applications',
        body: 'When rent is unpaid, accurate calculations and proper service are essential. Services may include reviewing the tenancy information, calculating arrears, preparing the appropriate notice or application, organizing the rent ledger and evidence, and preparing for mediation or hearing.',
        items: [],
      },
      {
        title: 'Tenant Conduct, Damage or Interference',
        body: 'Not every concern supports immediate termination. Before proceeding, the facts should be examined to determine what occurred, when it occurred, who witnessed it, whether it is continuing, what prior warnings were given and what supporting records exist. Melville Paralegal Services can review the information, identify evidentiary gaps and assist with the appropriate procedural response.',
        items: [],
      },
      {
        title: 'LTB Hearing Representation',
        items: ['Reviewing the notice, application and supporting documents', 'Preparing a chronology and organizing exhibits', 'Identifying relevant witnesses and preparing questions', 'Discussing settlement options', 'Preparing the client for testimony', 'Representation at the scheduled hearing'],
      },
    ],
    disclaimer: 'A hearing date should be provided as early as possible. Acceptance is subject to availability, conflict checking, adequate preparation time and completion of the retainer requirements.',
  },
  'tenant-legal-assistance': {
    title: 'Tenant Legal Assistance — Residential Tenant Matters Considered Case by Case',
    tag: 'Select Matters',
    subtitle: 'Residential Tenant Matters — Case-by-Case Review',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    intro: 'Melville Paralegal Services primarily represents landlords in residential tenancy proceedings. However, select residential tenant matters may be accepted on a case-by-case basis where the legal issues, available evidence, procedural stage, urgency, hearing requirements and current practice capacity make the matter suitable.',
    important: 'Acceptance is not guaranteed. Every prospective tenant matter is subject to conflict checking, permitted paralegal scope, document and evidence review, available preparation time and a written retainer agreement.',
    sections: [
      {
        title: 'Tenant Services May Include',
        items: ['Reviewing a landlord application and identifying the issues requiring a response', 'Preparing a response and organizing supporting documents and evidence', 'Assisting with selected T2 or T6 applications involving tenant rights, maintenance or repair concerns', 'Preparing chronologies, exhibits and hearing materials', 'Preparing the tenant and witnesses for an LTB hearing', 'Representation before the Landlord and Tenant Board where retained'],
      },
    ],
    disclaimer: 'Residential tenant matters may be accepted on a case-by-case basis. Acceptance depends on the legal and procedural issues, available evidence, applicable deadlines, conflicts of interest, the stage of the proceeding, the services requested and Melville Paralegal Services\' capacity. Submitting an inquiry does not guarantee that the matter will be accepted.',
  },
  'human-rights': {
    title: 'Ontario Human Rights Tribunal Services',
    tag: 'Select Matters',
    subtitle: 'Respectful Advocacy in Discrimination and Harassment Matters',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    intro: 'Human rights matters can be deeply personal and emotionally difficult. Melville Paralegal Services provides compassionate, organized assistance in selected matters before the Human Rights Tribunal of Ontario (HRTO), subject to case assessment, scope of practice and availability. Heidi may assist applicants who believe they experienced discrimination or harassment and respondents who must answer an HRTO application.',
    important: 'Human rights matters may involve strict limitation periods and procedural deadlines. Prospective clients should seek advice promptly and continue monitoring all existing deadlines unless Melville Paralegal Services confirms in writing that it has accepted the matter.',
    sections: [
      {
        title: 'Selected Human Rights Services',
        items: ['Reviewing the alleged discrimination, harassment, accommodation issue or reprisal', 'Assessing available documents, communications and witness evidence', 'Preparing or reviewing an HRTO application or response', 'Identifying procedural issues and evidentiary gaps', 'Preparing for mediation and settlement discussions', 'Disclosure, witness and hearing preparation', 'Responding to tribunal directions, requests and preliminary issues', 'Representation at selected HRTO mediations or hearings where retained'],
      },
      {
        title: 'The Connection to a Code-Protected Ground',
        body: 'Unfair or harmful treatment is not automatically discrimination under Ontario\'s Human Rights Code. The evidence must support a connection between the treatment and a protected ground in a social area covered by the Code. Careful fact review is therefore essential before an application or response is prepared.',
        items: [],
      },
      {
        title: 'Applicant and Respondent Representation',
        body: 'Melville Paralegal Services may assist either applicants or respondents, but never opposing parties in the same or a related matter. Acceptance is subject to a conflict check, sufficient preparation time and a written retainer agreement.',
        items: [],
      },
    ],
    disclaimer: 'HRTO matters are accepted on a selective basis. Acceptance depends on the issues, evidence, the scope of paralegal practice and availability. No outcome is guaranteed.',
  },
  'small-claims-enforcement': {
    title: 'Ontario Small Claims Court and Judgment Enforcement Services',
    tag: 'Civil Matters',
    subtitle: 'Claims, Defences, Resolution and Post-Judgment Enforcement',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    intro: 'Small Claims Court is intended to be more accessible than higher courts, but parties must still comply with procedural rules, limitation periods, evidence requirements and court orders. Melville Paralegal Services assists individuals and businesses with selected claims, defences and post-judgment enforcement steps within the permitted jurisdiction and paralegal scope of practice.',
    important: 'Do not ignore a Small Claims Court claim. Failure to respond may permit the plaintiff to take steps to obtain judgment without your participation.',
    sections: [
      {
        title: 'Types of Matters',
        items: ['Unpaid invoices, loans and other debts', 'Breach of contract', 'Property damage', 'Consumer disputes', 'Claims involving services or workmanship', "Landlord-related claims outside the LTB's jurisdiction", 'Defence of Small Claims Court proceedings', 'Settlement conferences, motions and assessment hearings', 'Trials', 'Post-judgment enforcement'],
      },
      {
        title: 'Starting or Defending a Claim',
        body: 'Starting a claim may include reviewing the evidence, identifying the proposed defendant, considering limitation-period issues, preparing a demand letter or Plaintiff\'s Claim, organizing supporting documents, arranging filing and service, and preparing for later stages where retained. A defendant generally has a limited period in which to respond after service. Defence services may include reviewing the Plaintiff\'s Claim, assessing possible defences, preparing the Defence, considering a Defendant\'s Claim and preparing for conferences, motions or trial.',
        items: [],
      },
      {
        title: 'Settlement and Resolution',
        body: 'Settlement may reduce cost, delay and uncertainty. Melville Paralegal Services can assist with settlement proposals, offers to settle, payment arrangements, minutes of settlement, consent documents and preparation for settlement conferences.',
        items: [],
      },
      {
        title: 'Judgment Enforcement Services',
        body: 'A judgment confirms the debt — it does not automatically produce payment. When a judgment debtor does not pay voluntarily, the creditor may need to use court-authorized enforcement procedures.',
        items: ['Written demands for payment', 'Negotiated payment arrangements', 'Debtor examinations and requests for financial disclosure', 'Garnishment proceedings', 'Writs of seizure and sale', 'Available searches and third-party reports', 'Renewal or maintenance of enforcement documents', 'Court attendances relating to enforcement'],
      },
    ],
    disclaimer: 'The availability of an enforcement procedure does not guarantee recovery. A debtor may have limited income, exempt assets, competing creditors or no identifiable assets. A legally valid claim does not necessarily mean that recovery will be practical or financially worthwhile.',
  },
  'legal-research': {
    title: 'Legal Research & Document Drafting',
    tag: 'Document Services',
    subtitle: 'Focused legal research and written advocacy within the permitted scope of Ontario paralegal practice.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    intro: 'Not every legal matter requires full representation. Melville Paralegal Services provides limited-scope legal research, written advocacy and document drafting services for matters within the permitted scope of Ontario paralegal practice.',
    important: 'Limited-scope legal research, document review or drafting does not include continuing representation, filing, service, negotiations or hearing attendance unless expressly included in a written agreement. The services included, any legal advice provided and the limits of the engagement will be confirmed in writing.',
    sections: [
      {
        title: 'Research & Drafting Services',
        body: 'These services are available independently or as part of broader representation. Each engagement is confirmed in writing.',
        items: ['Legal research memoranda', 'Written opinions within permitted scope', 'Hearing briefs and factums', 'Written submissions', 'Demand letters', 'Cease-and-desist letters', 'Settlement proposals', 'Procedural correspondence', 'Affidavits', 'Statutory declarations', 'Court and tribunal documents'],
      },
    ],
    disclaimer: 'Limited-scope legal research, document review or drafting does not include continuing representation, filing, service, negotiations or hearing attendance unless expressly included in a written agreement. The services included, any legal advice provided and the limits of the engagement will be confirmed in writing. Melville Paralegal Services can only draft documents within the permitted scope of Ontario paralegal practice.',
  },
  'notary': {
    title: 'Notary Public and Commissioner for Taking Affidavits Services',
    tag: 'Notarial Services',
    subtitle: 'In-Person Notarization and Convenient Commissioning Services',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80',
    intro: 'Melville Paralegal Services provides appointment-based Notary Public and Commissioner for Taking Affidavits services. Notarial acts are completed in person. Heidi can travel to the client or meet at an agreed location. Eligible affidavits and declarations may be commissioned remotely when the document, recipient requirements and circumstances permit and all legal and professional conditions can be satisfied.',
    important: 'Ontario does not currently permit a notary public to perform notarial acts without the person being physically present. Services such as certifying a true copy, witnessing or attesting the execution of a document, or notarizing a signature must therefore be completed during an in-person appointment.',
    sections: [
      {
        title: 'Heidi Will Come to You — or Meet You',
        body: 'Mobile notary appointments may be available at a home, hospital, care facility, workplace or another agreed location, subject to availability, travel distance, accessibility, safety and any facility requirements. A mutually convenient meeting location may also be arranged.',
        items: [],
      },
      {
        title: 'Remote Commissioning May Be Available',
        body: 'Ontario permits oaths and declarations to be administered remotely when the statutory conditions in O. Reg. 431/20 are met. Suitable affidavits or declarations may be commissioned by real-time video appointment, provided identity, communication, document handling, signing and record requirements can be satisfied. The receiving organization may impose additional requirements or may decline a remotely commissioned document.',
        items: [],
      },
      {
        title: 'Available Services',
        items: ['Commissioning affidavits and statutory declarations, in person or remotely where eligible', 'Administering oaths or affirmations', 'Witnessing, certifying and attesting signatures or document execution in person', 'Certifying true copies of original documents in person', 'Consent-to-travel documents and declarations', 'Invitation letters and supporting declarations', 'Proof-of-identity and document-verification services', 'Pension, benefit and administrative declarations'],
      },
      {
        title: 'What to Bring',
        items: ['The complete document', 'Valid, current government-issued identification', 'Instructions provided by the receiving organization', 'All persons who must sign', 'Any required witnesses', 'The original document where a certified true copy or other notarial act is required'],
      },
    ],
    disclaimer: 'Clients are responsible for confirming the receiving organization\'s requirements, including whether remote commissioning is accepted, whether witnesses are required and whether authentication or an apostille is needed after notarization. Melville Paralegal Services does not guarantee acceptance by a receiving organization, foreign authority or third party.',
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
              <p>Request a consultation to determine whether Melville Paralegal Services may be able to assist.</p>
              <Link to="/contact" className="btn-primary sidebar-full-btn">Request a Consultation</Link>
              <div className="sidebar-divider" />
              <div className="sidebar-contact">
                <p><strong>Call or Text</strong></p>
                <a href="tel:+12899817712">289-981-7712</a>
                <p style={{ marginTop: 8 }}><strong>Email</strong></p>
                <a href="mailto:connect@melvilleparalegal.ca">connect@melvilleparalegal.ca</a>
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
