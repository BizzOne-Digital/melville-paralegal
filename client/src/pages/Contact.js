import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import API from '../utils/api';
import './Contact.css';

const serviceOptions = [
  'ODSP Disability Benefits',
  'CPP Disability',
  'Landlord and Tenant Board — Landlord Services',
  'Landlord and Tenant Board — Residential Tenant Matter (select matters, case by case)',
  'Human Rights Tribunal — Select Matters',
  'Small Claims Court',
  'Judgment Enforcement',
  'Legal Research and Document Drafting',
  'Notary Public Services',
  'Commissioner for Taking Affidavits / Commissioning',
  'Paralegal Student Tutoring and Exam Preparation',
  'Other / Not Sure Which Service I Need',
];

const initialForm = {
  fullName: '', phone: '', email: '', city: '',
  serviceType: '', briefDescription: '', deadlineDate: '', consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/intake', form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <PageHeader
        title="Request an Initial Consultation"
        subtitle="Start with the basic details of your matter."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Prospective clients should first submit this short contact form. Melville Paralegal Services will review the basic
              inquiry and, where appropriate, send a secure prospective-client intake form to be completed before a
              consultation is scheduled. This form is not the intake form and should not be used to send detailed confidential
              information or extensive documents.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div>
                  <strong>Phone &amp; Text</strong>
                  <p>289-981-7712</p>
                  <p>Fax: 1-877-390-3946</p>
                </div>
              </div>
              <div className="contact-card">
                <div>
                  <strong>Email</strong>
                  <p>General Inquiries: connect@melvilleparalegal.ca</p>
                  <p>Direct: heidi@melvilleparalegal.ca</p>
                </div>
              </div>
              <div className="contact-card">
                <div>
                  <strong>Main Office &amp; Mailing Address</strong>
                  <p>Suite 528, 420 Main Street East</p>
                  <p>Milton, Ontario L9T 5G3</p>
                </div>
              </div>
              <div className="contact-card">
                <div>
                  <strong>Satellite Office</strong>
                  <p>New Liskeard, Ontario — appointments by arrangement</p>
                </div>
              </div>
            </div>

            <div className="contact-hours">
              <h4>Appointments</h4>
              <p>Virtual, telephone and in-person legal appointments are available by arrangement. Flexible evening and weekend appointments are available by appointment, subject to availability and the nature of the service required.</p>
            </div>

            <div className="contact-disclaimer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>Please do not send original documents or extensive confidential records until requested. Email, website forms and other electronic communications may not be completely secure.</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Request an Initial Consultation</h2>
            <p style={{ color: 'var(--charcoal-light)', fontSize: '0.9rem', marginBottom: 16 }}>
              Please provide your basic contact information and select the service you are seeking. Do not include confidential
              information or upload legal documents through this form. Melville Paralegal Services will review your inquiry
              and, where the matter may be suitable for the practice, will send a secure intake form to be completed before a
              consultation is scheduled.
            </p>

            {status === 'success' && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Thank you. Your contact request has been received. Submitting the form does not mean that Melville Paralegal Services has agreed to represent you. If the matter may be suitable for further review, Melville Paralegal Services will send you a secure prospective-client intake form to complete before a consultation is scheduled. Continue to monitor and comply with all existing court, tribunal and filing deadlines unless Melville Paralegal Services confirms in writing that it has accepted responsibility for the matter.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">There was an issue sending your request. Please email connect@melvilleparalegal.ca directly.</div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} required placeholder="Your phone number" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input id="city" name="city" value={form.city} onChange={handleChange} required placeholder="Your city or municipality" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="serviceType">Service Needed *</label>
                <select id="serviceType" name="serviceType" value={form.serviceType} onChange={handleChange} required>
                  <option value="">Select the service you are seeking</option>
                  {serviceOptions.map((o, i) => <option key={i} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="briefDescription">Briefly Describe Your Matter</label>
                <textarea
                  id="briefDescription"
                  name="briefDescription"
                  rows="4"
                  value={form.briefDescription}
                  onChange={handleChange}
                  placeholder="General description only. Do not include confidential information or upload documents through this form."
                />
              </div>
              <div className="form-group">
                <label htmlFor="deadlineDate">Upcoming Deadline or Hearing Date, If Any</label>
                <input id="deadlineDate" name="deadlineDate" value={form.deadlineDate} onChange={handleChange} placeholder="Optional" />
              </div>

              <div className="intake-consent">
                <label className="checkbox-label">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                  I consent to being contacted and acknowledge that submitting this form does not create a paralegal-client relationship and does not confirm that Melville Paralegal Services has agreed to represent me.
                </label>
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>

              <p style={{ fontSize: '0.78rem', color: 'var(--charcoal-light)', marginTop: 12 }}>
                Your information is sent securely to Melville Paralegal Services. If your matter may be suitable for the practice,
                Melville Paralegal Services will contact you with the next steps and provide a secure intake form before scheduling
                a consultation. Any applicable consultation fee will be confirmed before the meeting is scheduled. If Melville
                Paralegal Services is retained for the same matter following the consultation, the consultation fee will be
                credited toward the professional fees under the written retainer. The credit does not apply to HST, filing fees,
                disbursements or third-party costs.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
