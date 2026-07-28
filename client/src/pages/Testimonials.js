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

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    API.get('/testimonials')
      .then(r => setTestimonials(r.data))
      .catch(() => setTestimonials([]))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <div className="testimonials-page">
      <PageHeader
        title="Client Feedback"
        subtitle="Genuine, authorized feedback from clients who have worked with Melville Paralegal Services."
        breadcrumb={[{ label: 'Client Feedback' }]}
      />

      <section className="testimonials-grid-section">
        <div className="container">
          <div className="testimonials-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>Melville Paralegal Services publishes only genuine, authorized and verifiable client feedback. No outcome described in any feedback item should be taken as a guarantee of a similar result in another matter.</p>
          </div>

          {testimonials.length > 0 ? (
            <div className="testimonials-cards-grid">
              {testimonials.map((t, i) => (
                <div key={t._id || i} className="testimonial-card">
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
          ) : (
            loaded && <p style={{ textAlign: 'center', color: 'var(--charcoal-light)', padding: '40px 0' }}>No client feedback is currently published.</p>
          )}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
