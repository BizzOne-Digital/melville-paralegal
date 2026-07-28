import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import './About.css';

const values = [
  { title: 'Compassionate', desc: 'Melville Paralegal Services aims to provide respectful, patient and client-centred service. Legal problems can be stressful, and Heidi takes time to listen to every client.' },
  { title: 'Intelligent', desc: 'Careful legal research, thorough document review and strategic preparation are the foundation of every file.' },
  { title: 'Transparent', desc: 'Melville Paralegal Services provides clear information about the agreed scope, process, fees and next procedural steps.' },
  { title: 'Accessible', desc: 'Ontario-wide virtual services; in-person meetings in Milton and New Liskeard / Temiskaming Shores by arrangement. Flexible scheduling including evenings and weekends.' },
];

export default function About() {
  return (
    <div className="about-page">
      <PageHeader
        title="About Melville Paralegal Services"
        subtitle="A personal, professional Ontario paralegal practice founded on clear advice, careful preparation and genuine care for every client."
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
                <span>Law Society of Ontario</span>
              </div>
            </div>
          </div>

          <div className="story-content">
            <span className="section-label">Founder & Principal</span>
            <h2>Why I Started Melville Paralegal Services</h2>
            <div className="divider-line" style={{ margin: '16px 0' }} />

            <p>I created Melville Paralegal Services to offer legal services that are clear, practical and personal. Legal problems can be stressful and overwhelming, especially when someone is already dealing with illness, disability, financial pressure or conflict.</p>

            <p>My goal is to make the process easier to understand and to ensure that clients feel heard, respected and supported. I take the time to listen, explain the process in plain language and develop a practical strategy based on the facts and evidence.</p>

            <p>My primary focus is disability advocacy, including ODSP and CPP Disability appeals. I also assist with landlord and tenant matters, select human rights cases, Small Claims Court, judgment enforcement, legal research and document drafting, and notary and commissioning services.</p>

            <p>I believe clients deserve honest advice, careful preparation and a clear understanding of their options.</p>

            <blockquote className="about-quote">
              "Helping clients navigate legal processes with compassion, clarity, strategy and confidence."
            </blockquote>

            <div className="about-locations">
              <h4>Service Areas</h4>
              <p>Ontario-wide virtual services; in-person meetings in <strong>Milton</strong> and <strong>New Liskeard / Temiskaming Shores</strong> by arrangement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Approach</span>
            <h2>The Melville Paralegal Services Approach</h2>
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

      <section className="about-lso">
        <div className="container about-lso-inner">
          <div className="lso-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--plum-deep)" strokeWidth="1.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div>
            <h3>Regulated by the Law Society of Ontario</h3>
            <p>Heidi Melville is a Licensed Paralegal regulated by the Law Society of Ontario. Licensed paralegals are subject to professional standards, ethical obligations and continuing education requirements. You can verify any Ontario paralegal's licence at the LSO's public directory.</p>
          </div>
          <a href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal/lawyer-and-paralegal-directory" target="_blank" rel="noreferrer" className="btn-secondary">Verify through the Law Society of Ontario</a>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
