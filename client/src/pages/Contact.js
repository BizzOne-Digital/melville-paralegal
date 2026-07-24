import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import API from '../utils/api';
import './Contact.css';

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone & Text',
    lines: ['289-981-7712', 'Toll-free: 1-877-390-3946'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    lines: ['General: connect@melvilleparalegal.ca', 'New clients: intake@melvilleparalegal.ca', 'Direct: heidi@melvilleparalegal.ca'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Mailing Address',
    lines: ['Suite 528, 420 Main Street East', 'Milton, Ontario L9T 5G3'],
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post('/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <PageHeader
        title="Contact Melville Paralegal Services"
        subtitle="Reach out by phone, email or the form below. For new client inquiries, use the intake form to book your complimentary virtual meeting."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="contact-section">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">Melville Paralegal Services serves clients across Ontario. Virtual appointments are available province-wide.</p>

            <div className="contact-cards">
              {contactInfo.map((c, i) => (
                <div key={i} className="contact-card">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <strong>{c.label}</strong>
                    {c.lines.map((line, j) => <p key={j}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-hours">
              <h4>Meeting Availability</h4>
              <p>Virtual appointments by Zoom or Google Meet are available during the day, evenings and weekends. In-person meetings in Milton, Ottawa and Northern Ontario are available by arrangement.</p>
            </div>

            <div className="contact-disclaimer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>This contact form is for general inquiries. Please do not include sensitive confidential information before a retainer is in place. Use the intake form to book your free virtual meeting.</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h2>Send a Message</h2>

            {status === 'success' && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Your message has been sent. We will be in touch shortly.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">There was an issue sending your message. Please email us directly.</div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Optional" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="General inquiry" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Please describe your inquiry in general terms. Do not include confidential information at this stage." />
              </div>
              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
