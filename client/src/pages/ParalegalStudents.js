import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import './LegalPage.css';

export default function ParalegalStudents() {
  return (
    <div className="legal-page">
      <PageHeader
        title="Paralegal Student Tutoring and Exam Preparation"
        subtitle="Individualized educational support — separate from legal representation."
        breadcrumb={[{ label: 'Paralegal Students' }]}
      />
      <section className="legal-section">
        <div className="container legal-content">
          <p>
            Heidi Melville provides individualized educational support to paralegal students who would benefit from
            additional assistance with their coursework, understanding legal and procedural concepts, developing study
            strategies, or preparing for the Law Society of Ontario's paralegal licensing examination.
          </p>

          <p>
            Tutoring sessions are tailored to the student's identified learning needs and may include reviewing publicly
            available legal principles, strengthening legal analysis, improving issue-recognition skills, developing
            effective study plans, and practising time-management and examination-writing strategies.
          </p>

          <p>
            The objective is to help students build a clearer understanding of the subject matter, develop practical
            problem-solving skills, and approach their studies and licensing examination preparation with greater
            organization and confidence.
          </p>

          <h2>Educational Services Only</h2>
          <p>
            Tutoring and examination-preparation services are educational services only. They do not constitute legal
            advice or create a paralegal-client relationship. No particular academic, examination, licensing, or
            employment outcome is represented or guaranteed.
          </p>

          <h2>Not Affiliated With the Law Society of Ontario</h2>
          <p>
            Melville Paralegal Services is not affiliated with or endorsed by the Law Society of Ontario. Tutoring does
            not involve access to, disclosure of, reproduction of, or review of confidential licensing examination
            content or restricted Law Society study materials. Students remain responsible for complying with all
            applicable Law Society examination rules, confidentiality requirements, and academic-integrity policies.
          </p>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/contact" className="btn-primary">Request a Paralegal Student Tutoring Session</Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </div>
  );
}
