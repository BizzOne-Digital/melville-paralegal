import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import './LegalPage.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <PageHeader
        title="Privacy Policy"
        subtitle="How Melville Paralegal Services collects, uses and protects your information."
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />
      <section className="legal-section">
        <div className="container legal-content">
          <p><em>Last updated: July 2026</em></p>

          <h2>Information We Collect</h2>
          <p>Melville Paralegal Services collects information you voluntarily provide through the Prospective Client Intake Form, the contact form, and email or phone correspondence. This may include your name, contact information, general information about your matter, and any documents you choose to send. Please do not include sensitive personal details, medical records or extensive confidential information before a retainer is in place.</p>

          <h2>How Information Is Used</h2>
          <p>Information submitted through this website is used only to review your inquiry for conflicts, scope of practice, availability and general suitability, and to respond to you. Submitting a form does not create a paralegal-client relationship.</p>

          <h2>Cookies</h2>
          <p>This website may use minimal, essential cookies required for the site to function correctly. This website does not currently use third-party advertising or analytics cookies. If that changes, this policy will be updated accordingly.</p>

          <h2>Third-Party Links</h2>
          <p>This website links to third-party resources, including the Law Society of Ontario and government websites. Melville Paralegal Services is not responsible for the privacy practices or content of external websites.</p>

          <h2>Confidentiality</h2>
          <p>Information received before a retainer is in place is not protected by solicitor-client or paralegal-client privilege. Do not submit confidential or sensitive information through this website.</p>

          <h2>Data Security</h2>
          <p>Reasonable administrative and technical safeguards are used to protect information submitted through this website. No method of transmission over the internet is completely secure.</p>

          <h2>Contact</h2>
          <p>Questions about this Privacy Policy may be directed to <a href="mailto:connect@melvilleparalegal.ca">connect@melvilleparalegal.ca</a>.</p>
        </div>
      </section>
    </div>
  );
}
