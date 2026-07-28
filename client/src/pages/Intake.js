import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import API from '../utils/api';
import './Intake.css';

const serviceOptions = [
  'ODSP — denial, internal review or Social Benefits Tribunal appeal',
  'CPP Disability — application, reconsideration or appeal',
  'Landlord & Tenant Board — landlord matter',
  'Residential Tenant Matter — Case-by-Case Review',
  'Human Rights Tribunal of Ontario',
  'Small Claims Court',
  'Judgment Enforcement',
  'Legal Research or Document Drafting',
  'Notary Public or Commissioner for Taking Affidavits Services',
  'Other / Not sure',
];

const initialForm = {
  firstName: '', lastName: '', preferredName: '', email: '', phone: '',
  serviceType: '', opposingParties: '', courtOrTribunal: '', fileNumber: '', knownDates: '',
  briefDescription: '', preferredContact: 'either', preferredTime: '', privacyConsent: false,
};

export default function Intake() {
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
    <div className="intake-page">
      <PageHeader
        title="Request a Consultation"
        subtitle="Complete the secure Prospective Client Intake Form to request a consultation with Melville Paralegal Services."
        breadcrumb={[{ label: 'Request a Consultation' }]}
      />

      <section className="intake-section">
        <div className="container intake-grid">
          <div className="intake-form-col">
            <div className="intake-disclaimer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>The information will be reviewed for conflicts, scope of practice, availability and general suitability. If Melville Paralegal Services may be able to assist, you will be contacted regarding the consultation format, any applicable fee and possible next steps. Submitting this form does not guarantee that a consultation or representation will be offered and does not create a paralegal-client relationship. No deadline is suspended or extended by submitting this form. Representation begins only after Melville Paralegal Services accepts the matter and confirms the engagement in writing. Please provide only general information — do not include extensive confidential detail at this stage.</p>
            </div>

            {status === 'success' && (
              <div className="form-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Your request has been submitted. We will follow up within one business day.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">There was an issue submitting the form. Please email connect@melvilleparalegal.ca directly.</div>
            )}

            <form className="intake-form contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Legal Name *</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>&nbsp;</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Name</label>
                  <input name="preferredName" value={form.preferredName} onChange={handleChange} placeholder="Optional" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="Optional" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Type of Matter *</label>
                <select name="serviceType" value={form.serviceType} onChange={handleChange} required>
                  <option value="">Select the service area that best applies</option>
                  {serviceOptions.map((o, i) => <option key={i} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Court or Tribunal (if applicable)</label>
                  <input name="courtOrTribunal" value={form.courtOrTribunal} onChange={handleChange} placeholder="e.g. Landlord and Tenant Board" />
                </div>
                <div className="form-group">
                  <label>File Number (if applicable)</label>
                  <input name="fileNumber" value={form.fileNumber} onChange={handleChange} placeholder="Optional" />
                </div>
              </div>
              <div className="form-group">
                <label>Opposing / Related Parties &amp; Known Representatives</label>
                <input name="opposingParties" value={form.opposingParties} onChange={handleChange} placeholder="Names of any opposing parties, related parties or their representatives" />
              </div>
              <div className="form-group">
                <label>Known Hearing, Appeal, Filing or Limitation Dates</label>
                <input name="knownDates" value={form.knownDates} onChange={handleChange} placeholder="List any known deadlines" />
              </div>
              <div className="form-group">
                <label>Brief Description</label>
                <textarea
                  name="briefDescription"
                  rows="4"
                  value={form.briefDescription}
                  onChange={handleChange}
                  placeholder="Describe your situation in general terms only. For example: 'I was denied ODSP and want to appeal.' Do not include medical information or extensive confidential detail at this stage."
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
                <label className="checkbox-label">
                  <input type="checkbox" name="privacyConsent" checked={form.privacyConsent} onChange={handleChange} required />
                  I consent to the collection of this information and acknowledge that submitting this form does not create a paralegal-client relationship, does not include legal advice, does not guarantee that a consultation will be offered, and does not suspend or extend any deadline. My information will be used only to assess this inquiry and respond to it.
                </label>
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Request a Consultation'}
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
                    <strong>Submit the Prospective Client Intake Form</strong>
                    <p>General information only — no extensive confidential detail required at this stage.</p>
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Review for conflicts and suitability</strong>
                    <p>Your information is reviewed for conflicts, scope of practice, availability and general suitability.</p>
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>Follow-up within 1 business day</strong>
                    <p>If Melville Paralegal Services may be able to assist, you will be contacted regarding the consultation format, any applicable fee and possible next steps.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="intake-contact-card">
              <h4>Prefer to Contact Us Directly?</h4>
              <p><strong>Phone/Text:</strong> 289-981-7712</p>
              <p><strong>Fax:</strong> 1-877-390-3946</p>
              <p><strong>Email:</strong> connect@melvilleparalegal.ca</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
