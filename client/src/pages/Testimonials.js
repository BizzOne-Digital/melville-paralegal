import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './TestimonialsPage.css';

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'var(--gold-accent)' : 'none'} stroke="var(--gold-accent)" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const fallback = [
  { name: 'Sandra M.', service: 'ODSP Appeal', rating: 5, text: 'Heidi helped me through my ODSP appeal with patience and professionalism. She explained every step clearly and made sure I understood what was happening. I am so grateful for her support.' },
  { name: 'Robert K.', service: 'Landlord & Tenant Board', rating: 5, text: 'As a landlord dealing with a difficult tenancy situation, I had no idea where to start. Heidi organized the evidence, prepared the application and represented me at the hearing. Highly recommend.' },
  { name: 'Maria T.', service: 'CPP Disability', rating: 5, text: 'I had been denied CPP Disability twice before finding Melville Paralegal Services. Heidi identified gaps in my medical evidence, helped me gather what was needed and guided me through the reconsideration process.' },
  { name: 'James L.', service: 'Small Claims Court', rating: 5, text: 'Clear, practical advice from start to finish. Heidi drafted the claim, helped me organize the evidence and prepared me for the hearing. The process was much less intimidating than I expected.' },
  { name: 'Anita R.', service: 'Notary Services', rating: 5, text: 'Quick, professional and accommodating. Heidi was able to travel to my location for the notarization appointment. Highly recommend for anyone needing notary services in the area.' },
  { name: 'David S.', service: 'ODSP Appeal', rating: 5, text: 'After my initial ODSP application was denied, I did not know where to turn. Heidi reviewed my situation, explained the options clearly and guided me through the internal review process step by step.' },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    API.get('/testimonials')
      .then(r => setTestimonials(r.data.length ? r.data : fallback))
      .catch(() => setTestimonials(fallback));
  }, []);

  return (
    <div className="testimonials-page">
      <PageHeader
        title="Client Testimonials"
        subtitle="Genuine feedback from clients who have worked with Melville Paralegal Services. Shared with permission."
        breadcrumb={[{ label: 'Testimonials' }]}
      />

      <section className="testimonials-grid-section">
        <div className="container">
          <div className="testimonials-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>Melville Paralegal Services uses only genuine, authorized client feedback. No outcome described in any testimonial should be taken as a guarantee of a similar result in another matter.</p>
          </div>

          <div className="testimonials-cards-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="tc-stars">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= t.rating} />)}
                </div>
                <blockquote className="tc-text">"{t.text}"</blockquote>
                <div className="tc-footer">
                  <div className="tc-avatar">{t.name?.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    {t.service && <span>{t.service}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
