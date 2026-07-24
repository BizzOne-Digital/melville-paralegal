import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import API from '../utils/api';
import './Intake.css';

const serviceOptions = [
  'ODSP — denial, internal review or Social Benefits Tribunal appeal',
  'CPP Disability — application, reconsideration or appeal',
  'Landlord & Tenant Board — landlord matter',
  'Human Rights Tribunal of Ontario',
  'Small Claims Court',
  'Judgment Enforcement',
  'Legal Research or Document Drafting',
  'Notary Public or Commissioner Services',
  'Other / Not sure',
];

export default function Intake() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    serviceType: '', briefDescription: '',
    preferredContact: 'either', preferredTime: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await API.post('/intake', form);
      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', serviceType: '', briefDescription: '', preferredContact: 'either', preferredTime: '' });
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="intake-page">
      <PageHeader
        title="Book Your Free Intake Meeting"
        subtitle="A complimentary virtual meeting by Zoom or Google Meet to discuss the general nature of your matter. No legal advice, no obligation — just a clear conversation."
        breadcrumb={[{ label: 'Free Intake Meeting' }]}
      />

      <section className="intake-section">
        <div className="container intake-grid">
          <div className="intake-form-col">
            <div className="intake-disclaimer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>This form is for booking an initial intake meeting only. Please provide only general information. Do not include sensitive personal details, medical records or confidential information at this stage. Completing this form does not create a paralegal-client relationship.</p>
            </div>

            {status === 'success' && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Your intake request has been submitted. We will follow up within one business day to confirm your appointment.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">There was an issue submitting the form. Please email intake@melvilleparalegal.ca directly.</div>
            )}

            <form className="intake-form contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Optional" />
                </div>
              </div>
              <div className="form-group">
                <label>Type of Matter *</label>
                <select name="serviceType" value={form.serviceType} onChange={handleChange} required>
                  <option value="">Select the service area that best applies</option>
                  {serviceOptions.map((o, i) => <option key={i} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Brief Description</label>
                <textarea
                  name="briefDescription"
                  rows="4"
                  value={form.briefDescription}
                  onChange={handleChange}
                  placeholder="Describe your situation in general terms only. For example: 'I was denied ODSP and want to appeal.' Do not include medical information, case numbers or confidential details at this stage."
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <select name="preferredContact" value={form.preferredContact} onChange={handleChange}>
                    <option value="either">Either</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Preferred Availability</label>
                  <input name="preferredTime" value={form.preferredTime} onChange={handleChange} placeholder="e.g. Weekday afternoons, evenings" />
                </div>
              </div>

              <div className="intake-consent">
                <p>By submitting this form, you acknowledge that this does not constitute a paralegal-client relationship, does not include legal advice, and that your information will be used only to respond to your inquiry and assess whether MPS may be able to assist.</p>
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Intake Request'}
              </button>
            </form>
          </div>

          <aside className="intake-sidebar">
            <div className="intake-info-card">
              <h3>What to Expect</h3>
              <ol className="intake-steps">
                <li>
                  <span>1</span>
                  <div>
                    <strong>Submit this form</strong>
                    <p>General information only — no confidential details required at this stage.</p>
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Confirmation within 1 business day</strong>
                    <p>We will follow up to confirm your free virtual meeting time.</p>
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>Virtual meeting (Zoom or Google Meet)</strong>
                    <p>Brief discussion of your matter, possible services, fees and next steps.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="intake-contact-card">
              <h4>Prefer to Contact Us Directly?</h4>
              <p><strong>Phone/Text:</strong> 289-981-7712</p>
              <p><strong>Toll-free:</strong> 1-877-390-3946</p>
              <p><strong>Email:</strong> intake@melvilleparalegal.ca</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
