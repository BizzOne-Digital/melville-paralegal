import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import './About.css';

const values = [
  { title: 'Kindness', desc: 'Clients are treated with patience, dignity and genuine respect.' },
  { title: 'Compassion', desc: 'The human impact of legal problems is recognized without losing focus on the legal issues.' },
  { title: 'Intelligence', desc: 'Legal analysis, evidence and strategy are approached thoughtfully and carefully.' },
  { title: 'Honesty', desc: 'Clients receive candid information about strengths, weaknesses, costs and risks.' },
  { title: 'Integrity', desc: 'Services are provided professionally, ethically and within the permitted scope of Ontario paralegal practice.' },
  { title: 'Preparation', desc: 'Effective advocacy begins with organized evidence, accurate documents and attention to procedure.' },
];

const practiceFocus = [
  'ODSP internal reviews and appeals before the Social Benefits Tribunal',
  'CPP Disability reconsiderations and appeals before the Social Security Tribunal',
  'Landlord representation before the Landlord and Tenant Board',
  'Residential tenant representation may be accepted selectively and on a case-by-case basis, including selected responses, T2/T6 matters, hearing preparation and LTB representation',
  'Selected applications and responses before the Human Rights Tribunal of Ontario',
  'Small Claims Court claims, defences and selected judgment-enforcement steps',
  'In-person Notary Public services',
  'In-person and eligible remote commissioning of affidavits and declarations',
];

const approach = [
  'Listening carefully to the client\'s circumstances and objectives',
  'Reviewing documents, evidence and procedural requirements in detail',
  'Explaining legal issues in understandable language',
  'Identifying strengths, weaknesses and practical risks',
  'Preparing organized documents, timelines and hearing materials',
  'Exploring reasonable settlement options where appropriate',
  'Providing respectful, focused advocacy at hearings and court attendances',
];

export default function About() {
  return (
    <div className="about-page">
      <PageHeader
        title="About Heidi Melville & Melville Paralegal Services"
        subtitle="Heidi Melville, Licensed Paralegal, P15789 (Ontario)."
        breadcrumb={[{ label: 'About' }]}
      />

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="story-image-col">
            <div className="story-img-wrap">
              <img
                src="/about.png"
                alt="Heidi Melville, Licensed Paralegal"
              />
            </div>
            <div className="heidi-card">
              <div className="heidi-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <strong>Heidi Melville</strong>
                <span>Licensed Paralegal, P15789</span>
                <span>Law Society of Ontario</span>
              </div>
            </div>
          </div>

          <div className="story-content">
            <span className="section-label">Founder &amp; Principal Paralegal</span>
            <h2>Heidi Melville, Licensed Paralegal</h2>
            <div className="divider-line" style={{ margin: '16px 0' }} />

            <p>Melville Paralegal Services is an Ontario paralegal practice serving clients across the province, with a main office in Milton and a satellite office in New Liskeard, Ontario. The practice was established to provide focused, practical and clearly defined legal services — not to overwhelm clients with legal terminology, but to help them understand the process, organize the necessary information and make informed decisions about their matter. Melville Paralegal Services is operated by Heidi Melville, a Licensed Paralegal regulated by the Law Society of Ontario.</p>

            <p>Heidi Melville is a Licensed Paralegal and the founder of Melville Paralegal Services, an Ontario-based practice committed to providing clients with clear, practical and compassionate legal assistance. Heidi's practice focuses primarily on disability-benefit appeals and residential landlord matters. She assists clients with Ontario Disability Support Program internal reviews and appeals before the Social Benefits Tribunal, as well as CPP Disability reconsideration requests and appeals before the Social Security Tribunal.</p>

            <p>A substantial part of Heidi's practice is dedicated to representing and assisting Ontario landlords with matters before the Landlord and Tenant Board. Her services include guidance regarding notices, applications, rent arrears, termination of tenancies, damage claims, hearing preparation, representation at hearings, and the enforcement of Landlord and Tenant Board orders through the Small Claims Court, where appropriate.</p>

            <p>Heidi also assists clients with Small Claims Court proceedings, judgment enforcement, court and tribunal document preparation within Ontario paralegal scope, and Notary Public and Commissioner for Taking Affidavits services. Tenant matters and other legal matters are considered on a case-by-case basis.</p>

            <p>Heidi brings an organized and thorough approach to each matter. She understands that legal proceedings can feel intimidating and overwhelming and takes the time to explain the applicable process, identify the available options, and help clients make informed decisions about how they wish to proceed. Her approach is direct, respectful, and grounded in the understanding that every legal matter affects a real person, family, business, property, or livelihood.</p>

            <p>Heidi has experience in legal writing, document preparation, case organization, procedural research, and advocacy. Her professional background also includes proposal and RFP writing, contract documentation, and project coordination, strengthening her ability to analyze detailed information and present complex issues clearly and effectively.</p>

            <p>Her work in disability-benefit matters is informed by both professional knowledge and decades of lived experience navigating chronic illness and complex systems. This perspective allows Heidi to approach disability-related matters with a meaningful understanding of the practical barriers clients may face while maintaining the objectivity, diligence, and professionalism required of a legal representative.</p>

            <p>At Melville Paralegal Services, Heidi is committed to honest communication, transparent service, and careful preparation. Each matter is assessed individually to determine whether it falls within the permitted scope of Ontario paralegal practice and whether the firm is able to provide appropriate assistance.</p>

            <blockquote className="about-quote">
              "Helping clients navigate legal processes with compassion, clarity, strategy and confidence."
            </blockquote>

            <div className="about-locations">
              <h4>Service Areas</h4>
              <p>Ontario-wide virtual services; in-person meetings in <strong>Milton</strong> and <strong>New Liskeard, Ontario</strong> by arrangement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Heidi's Approach</span>
            <h2>How Every Matter Is Handled</h2>
            <div className="divider-line" />
          </div>
          <ul className="approach-list">
            {approach.map((a, i) => (
              <li key={i}>
                <span className="value-dot" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-values-section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Professional Values</span>
            <h2>What Guides Every File</h2>
            <div className="divider-line" />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-num">0{i + 1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Practice Focus</span>
            <h2>Areas of Practice</h2>
            <div className="divider-line" />
          </div>
          <ul className="approach-list">
            {practiceFocus.map((p, i) => (
              <li key={i}>
                <span className="value-dot" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-lso">
        <div className="container about-lso-inner">
          <div className="lso-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--plum-deep)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div>
            <h3>Licensed by the Law Society of Ontario</h3>
            <p>Heidi Melville is a Licensed Paralegal regulated by the Law Society of Ontario. Licensed paralegals are subject to professional standards, ethical obligations and continuing education requirements. You can verify any Ontario paralegal's licence at the LSO's public directory.</p>
          </div>
          <a href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory" target="_blank" rel="noreferrer" className="btn-secondary">Verify through the Law Society of Ontario</a>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
