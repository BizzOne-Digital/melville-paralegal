import React, { useState, useEffect } from 'react';
import API from '../../utils/api';
import './TestimonialsSection.css';

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'var(--gold-accent)' : 'none'} stroke="var(--gold-accent)" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M6 18h6l-4 8H4l2-8zm14 0h6l-4 8h-4l2-8z" fill="var(--plum-light)" stroke="var(--plum-deep)" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const fallbackTestimonials = [
  {
    name: 'Sandra M.',
    service: 'ODSP Appeal',
    rating: 5,
    text: 'Heidi helped me through my ODSP appeal with patience and professionalism. She explained every step clearly and made sure I understood what was happening. I am so grateful for her support.',
  },
  {
    name: 'Robert K.',
    service: 'Landlord & Tenant Board',
    rating: 5,
    text: 'As a landlord dealing with a difficult tenancy situation, I had no idea where to start. Heidi organized the evidence, prepared the application and represented me at the hearing. Highly recommend.',
  },
  {
    name: 'Maria T.',
    service: 'CPP Disability',
    rating: 5,
    text: 'I had been denied CPP Disability twice before finding Melville Paralegal Services. Heidi identified gaps in my medical evidence, helped me gather what was needed and guided me through the reconsideration process.',
  },
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    API.get('/testimonials')
      .then(r => setTestimonials(r.data.length ? r.data : fallbackTestimonials))
      .catch(() => setTestimonials(fallbackTestimonials));
  }, []);

  const t = testimonials[active] || fallbackTestimonials[0];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Client Testimonials</span>
          <h2>What Clients Say</h2>
          <div className="divider-line" />
          <p>These testimonials represent genuine client feedback shared with permission.</p>
        </div>

        {testimonials.length > 0 && (
          <div className="testimonial-featured">
            <div className="testimonial-quote-icon"><QuoteIcon /></div>
            <div className="testimonial-stars">
              {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= t.rating} />)}
            </div>
            <blockquote className="testimonial-text">"{t.text}"</blockquote>
            <div className="testimonial-author">
              <div className="author-avatar">
                {t.name?.charAt(0)}
              </div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.service}</span>
              </div>
            </div>

            {testimonials.length > 1 && (
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot${i === active ? ' active' : ''}`}
                    onClick={() => setActive(i)}
                    aria-label={`View testimonial ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
