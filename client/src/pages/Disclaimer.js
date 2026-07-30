import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import './LegalPage.css';

export default function Disclaimer() {
  return (
    <div className="legal-page">
      <PageHeader
        title="Website Disclaimer"
        subtitle="Please read this disclaimer carefully before using this website."
        breadcrumb={[{ label: 'Website Disclaimer' }]}
      />
      <section className="legal-section">
        <div className="container legal-content">
          <p><em>Last updated: July 2026</em></p>

          <h2>No Legal Advice</h2>
          <p>The information on this website is provided for general information only and does not constitute legal advice. Laws, regulations and procedures referenced on this website change over time. Use of this website, including submitting the contact form or the Prospective Client Intake Form, does not create a paralegal-client relationship and does not suspend or extend any deadline, limitation period or filing requirement.</p>

          <h2>Heidi Melville is a Licensed Paralegal</h2>
          <p>Heidi Melville is a paralegal licensed by the Law Society of Ontario, Licence No. P15789. Licensed paralegals are authorized to provide legal services within specific areas permitted by Ontario law and the Law Society of Ontario. You can verify any Ontario paralegal's licence at the Law Society of Ontario's public Lawyer and Paralegal Directory.</p>

          <h2>No Guaranteed Outcome</h2>
          <p>No outcome in any legal or tribunal proceeding can be guaranteed. Results depend on the specific facts, evidence, applicable law and the decision-maker. Nothing on this website should be interpreted as a promise or guarantee regarding the outcome of any matter.</p>

          <h2>Client Feedback</h2>
          <p>Any client feedback published on this website is genuine, authorized and shared with permission. No outcome described in any feedback item should be taken as a guarantee of a similar result in another matter.</p>

          <h2>Third-Party Links</h2>
          <p>This website contains links to third-party websites, including the Law Society of Ontario and government resources, for convenience only. Melville Paralegal Services does not endorse and is not responsible for the content of third-party websites, and their presence does not suggest any endorsement by those organizations.</p>

          <h2>Limitation of Liability</h2>
          <p>Melville Paralegal Services makes reasonable efforts to keep the information on this website accurate and current but does not warrant that it is complete, accurate or up to date. Melville Paralegal Services is not liable for any loss or damage arising from reliance on information contained on this website.</p>

          <h2>Contact</h2>
          <p>Questions about this disclaimer may be directed to <a href="mailto:connect@melvilleparalegal.ca">connect@melvilleparalegal.ca</a>.</p>
        </div>
      </section>
    </div>
  );
}
