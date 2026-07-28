import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './BlogPost.css';

const fallbackPost = {
  title: 'Understanding the ODSP Appeal Process',
  category: 'ODSP',
  createdAt: '2026-06-15',
  image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
  content: `
    <p>If your ODSP application has been denied, or your benefits have been reduced or cancelled, you have the right to challenge that decision. The ODSP appeal process has specific steps and timelines — understanding them is the first step to protecting your rights.</p>
    <h2>Step 1: Request an Internal Review</h2>
    <p>Before you can appeal to the Social Benefits Tribunal, you must first request an internal review from your Ontario Works office. This request must be made in writing within 30 days of receiving the decision. The internal review is conducted by a manager who was not involved in the original decision.</p>
    <h2>Step 2: The Social Benefits Tribunal</h2>
    <p>If you are not satisfied with the result of your internal review, you may appeal to the Social Benefits Tribunal (SBT). The SBT is an independent adjudicative tribunal that conducts formal hearings. Appeals must generally be filed within 30 days of the internal review decision.</p>
    <h2>What Evidence Matters</h2>
    <p>The strength of your medical and functional evidence is critical to both the internal review and the SBT appeal. This includes documentation from physicians, specialists, psychologists and other regulated health professionals that directly addresses the ODSP disability criteria.</p>
    <p>Common gaps in ODSP applications include a lack of functional information — how the disability affects your daily activities and ability to work — and incomplete or outdated medical documentation.</p>
    <h2>How Melville Paralegal Services Can Help</h2>
    <p>Melville Paralegal Services assists with ODSP internal reviews and Social Benefits Tribunal appeals. Services include reviewing the decision, identifying gaps in the evidence, organizing supporting documentation, preparing written submissions and representing clients at SBT hearings.</p>
    <p>Request a consultation to discuss your situation.</p>
  `,
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/blog/${slug}`)
      .then(r => setPost(r.data))
      .catch(() => setPost(fallbackPost))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ padding: '160px 24px', textAlign: 'center', color: 'var(--charcoal-light)' }}>Loading...</div>;

  if (!post) return <div style={{ padding: '160px 24px', textAlign: 'center' }}><h2>Article not found</h2><Link to="/blog" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>Back to Blog</Link></div>;

  const formatDate = d => new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="blog-post-page">
      <PageHeader
        title={post.title}
        tag={post.category}
        breadcrumb={[{ label: 'Blog', path: '/blog' }, { label: post.title }]}
      />

      <section className="blog-post-section">
        <div className="container blog-post-grid">
          <article className="blog-post-content">
            {post.image && (
              <div className="post-hero-img">
                <img src={post.image} alt={post.title} />
              </div>
            )}

            <div className="post-meta">
              {post.category && <span className="blog-cat-tag">{post.category}</span>}
              <span className="post-date">{formatDate(post.createdAt)}</span>
            </div>

            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="post-disclaimer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p>This article is for general information only and does not constitute legal advice. Laws and procedures change. Contact Melville Paralegal Services to discuss your specific situation.</p>
            </div>

            <div className="post-cta-inline">
              <h3>Have Questions About Your Situation?</h3>
              <p>Request a consultation to discuss your matter.</p>
              <Link to="/intake" className="btn-primary">Request a Consultation</Link>
            </div>
          </article>

          <aside className="blog-post-sidebar">
            <div className="sidebar-cta-card">
              <h3>Request a Consultation</h3>
              <p>Complete the intake form — no legal advice is given at this stage, just a clear conversation about your matter.</p>
              <Link to="/intake" className="btn-primary sidebar-full-btn">Get Started</Link>
            </div>

            <div className="sidebar-contact-card">
              <h4>Contact Us</h4>
              <p>289-981-7712</p>
              <p>connect@melvilleparalegal.ca</p>
            </div>

            <div className="sidebar-links">
              <h4>Explore Services</h4>
              <ul>
                {[
                  ['disability-benefits', 'ODSP & CPP Disability'],
                  ['landlord-tenant', 'Landlord & Tenant Board'],
                  ['small-claims', 'Small Claims Court'],
                  ['notary', 'Notary & Commissioner'],
                ].map(([slug, label]) => (
                  <li key={slug}>
                    <Link to={`/services/${slug}`}>
                      {label}
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
