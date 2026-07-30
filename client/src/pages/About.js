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
        subtitle="Heidi Melville, Licensed Paralegal."
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
                <span>Licensed Paralegal</span>
                <span>Licence No. P15789</span>
              </div>
            </div>
          </div>

          <div className="story-content">
            <span className="section-label">Founder &amp; Principal Paralegal</span>
            <h2>Heidi Melville, Licensed Paralegal</h2>
            <div className="divider-line" style={{ margin: '16px 0' }} />

            <p>Melville Paralegal Services is an Ontario paralegal practice serving clients across the province, with its main office in Milton and an additional office location in New Liskeard, Ontario. The practice was established to provide focused, practical and clearly defined legal services. Its objective is to help clients understand the applicable legal process, organize the necessary information and make informed decisions about their matters.</p>

            <p>Melville Paralegal Services is operated by Heidi Melville, a paralegal licensed by the Law Society of Ontario, Licence No. P15789.</p>

            <p>Heidi's practice focuses primarily on disability-benefit appeals and residential landlord matters. She assists clients with Ontario Disability Support Program internal reviews and appeals before the Social Benefits Tribunal, as well as Canada Pension Plan disability reconsideration requests and appeals before the Social Security Tribunal.</p>

            <p>A substantial part of Heidi's practice is dedicated to representing and assisting Ontario landlords in matters before the Landlord and Tenant Board. Her services may include advice and assistance concerning notices, applications, rent arrears, termination of tenancies, damage claims, document and evidence preparation, hearing preparation and representation at hearings. Where appropriate and within permitted paralegal scope, she also assists with the enforcement of Landlord and Tenant Board orders through the Ontario Small Claims Court.</p>

            <p>Heidi also assists clients with Small Claims Court proceedings, judgment-enforcement matters, and the preparation of court and tribunal documents connected to proceedings within Ontario paralegal scope. She also provides Notary Public and Commissioner for Taking Affidavits services. Residential tenant matters and other legal matters are considered individually and accepted on a case-by-case basis.</p>

            <p>Heidi brings an organized and thorough approach to her work. She understands that legal proceedings can feel intimidating and overwhelming and takes the time to explain the applicable process, identify available options and help clients make informed decisions about how they wish to proceed. Her approach is direct and respectful, recognizing that every legal matter may affect a person, family, business, property or livelihood.</p>

            <p>Heidi has experience in legal writing, document preparation, case organization, procedural research and advocacy. Her professional background also includes proposal and request-for-proposal writing, contract documentation and project coordination. This experience contributes to her structured approach to reviewing detailed information and presenting complex issues clearly.</p>

            <p>Her work in disability-benefit matters is also informed by decades of personal experience navigating chronic illness and complex administrative systems. This perspective provides insight into some of the practical barriers clients may experience while preserving the objectivity, diligence and professionalism required of a legal representative.</p>

            <p>At Melville Paralegal Services, Heidi is committed to honest communication, transparent service and careful preparation. Each matter is assessed individually to determine whether it falls within the permitted scope of Ontario paralegal practice and whether Melville Paralegal Services is able to provide appropriate assistance.</p>

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
            <p>Heidi Melville is a paralegal licensed by the Law Society of Ontario, Licence No. P15789. Licensed paralegals are subject to professional standards, ethical obligations and continuing education requirements. You can verify any Ontario paralegal's licence at the LSO's public directory.</p>
          </div>
          <a href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory" target="_blank" rel="noreferrer" className="btn-secondary">Verify through the Law Society of Ontario</a>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
