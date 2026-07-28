import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import ProblemPathways from '../components/ProblemPathways/ProblemPathways';
import ServicesSection from '../components/Services/ServicesSection';
import AboutSection from '../components/About/AboutSection';
import ProcessSection from '../components/Process/ProcessSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import HomeFAQ from '../components/HomeFAQ/HomeFAQ';
import CTABanner from '../components/CTA/CTABanner';
import './HomeExtras.css';

export default function Home() {
  return (
    <main style={{ paddingTop: '112px' }}>
      <Hero />
      <ProblemPathways />

      <section className="focused-support-section">
        <div className="container">
          <span className="section-label">Focused Legal Support</span>
          <h2>Legal Guidance Built Around Your Actual Situation</h2>
          <p>
            No two legal matters are exactly alike. Melville Paralegal Services begins by identifying the legal issue,
            the applicable procedure, any immediate deadlines and the evidence available. You will receive a realistic
            explanation of:
          </p>
          <ul className="focused-support-list">
            <li>• The legal process that may apply</li>
            <li>• The documents or evidence that may be required</li>
            <li>• The services Melville Paralegal Services can provide</li>
            <li>• The anticipated legal fees and additional costs</li>
            <li>• The practical risks and limitations of proceeding</li>
            <li>• The next procedural steps</li>
          </ul>
          <p style={{ marginTop: 16 }}>
            Legal representation is not about making unrealistic promises. It is about being prepared, understanding
            the process and making informed decisions.
          </p>
        </div>
      </section>

      <ServicesSection />
      <AboutSection />
      <ProcessSection />

      <section className="fees-preview-section">
        <div className="container">
          <span className="section-label">Fees Preview</span>
          <h2>Clear Fees Before Work Begins</h2>
          <p>
            Whenever appropriate, Melville Paralegal Services offers flat-fee, stage-based or limited-scope service
            options. Before you retain the practice, you will receive written information identifying the services
            included, the professional fee, applicable HST, anticipated disbursements and services outside the quoted
            scope.
          </p>
          <Link to="/fees" className="btn-primary">Review Fee Information</Link>
        </div>
      </section>

      <TestimonialsSection />
      <HomeFAQ />
      <CTABanner />
    </main>
  );
}
