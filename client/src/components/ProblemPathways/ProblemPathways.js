import React from 'react';
import { Link } from 'react-router-dom';
import './ProblemPathways.css';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const pathways = [
  {
    question: 'Was Your ODSP Application Denied?',
    desc: 'Assistance with internal reviews, Social Benefits Tribunal appeals, evidence organization, written submissions and hearing preparation.',
    button: 'ODSP Appeal Services',
    link: '/services/disability-benefits',
  },
  {
    question: 'Was Your CPP Disability Claim Denied?',
    desc: 'Assistance with Service Canada reconsiderations, Social Security Tribunal appeals, medical and functional evidence, written submissions and hearing preparation.',
    button: 'CPP Disability Appeal Services',
    link: '/services/disability-benefits',
  },
  {
    question: 'Are You Dealing With Rent Arrears or a Tenancy Breach?',
    desc: 'Practical legal assistance for Ontario landlords with notices, applications, evidence and Landlord and Tenant Board proceedings.',
    button: 'Landlord Legal Services',
    link: '/services/landlord-tenant',
  },
  {
    question: 'Are You a Residential Tenant Facing an LTB Matter?',
    desc: 'Selected residential tenant matters may be considered on a case-by-case basis, including responses to landlord applications, selected T2 or T6 applications, evidence organization, hearing preparation and representation before the Landlord and Tenant Board.',
    button: 'Tenant Legal Assistance',
    link: '/services/tenant-legal-assistance',
  },
  {
    question: 'Have You Experienced—or Been Accused of—Discrimination?',
    desc: 'Selected assistance for applicants and respondents in Human Rights Tribunal of Ontario matters, including applications, responses, mediation and hearings.',
    button: 'Human Rights Tribunal Services',
    link: '/services/human-rights',
  },
  {
    question: 'Are You Owed Money, Facing a Claim or Enforcing a Judgment?',
    desc: 'Representation and document preparation for Small Claims Court claims, defences, settlement, motions, hearings and selected enforcement steps.',
    button: 'Small Claims & Enforcement Services',
    link: '/services/small-claims-enforcement',
  },
  {
    question: 'Do You Need Legal Research, Written Advocacy or Document Preparation?',
    desc: 'Focused assistance with legal research, written submissions, hearing briefs, factums, demand letters, procedural correspondence and court or tribunal documents within the permitted scope of Ontario paralegal practice.',
    button: 'Legal Research & Document Drafting',
    link: '/services/legal-research',
  },
  {
    question: 'Do You Need a Document Notarized or Commissioned?',
    desc: 'Notarization is completed in person. Heidi may come to you or meet at an agreed location. Eligible affidavits and declarations may be commissioned remotely where permitted.',
    button: 'Document Services',
    link: '/services/notary',
  },
  {
    question: 'Are You a Paralegal Student Looking for Additional Support?',
    desc: 'Individualized educational support for coursework, legal and procedural concepts, study planning and preparation for the Law Society of Ontario paralegal licensing examination. Educational services only; no outcome is guaranteed.',
    button: 'Paralegal Student Tutoring',
    link: '/paralegal-students',
  },
];

export default function ProblemPathways() {
  return (
    <section className="pathways-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Find the Right Service</span>
          <h2>What Legal Issue Are You Facing?</h2>
          <div className="divider-line" />
        </div>

        <div className="pathways-grid">
          {pathways.map((p, i) => (
            <div key={i} className="pathway-card">
              <h3>{p.question}</h3>
              <p>{p.desc}</p>
              <Link to={p.link} className="pathway-link">
                {p.button} <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
