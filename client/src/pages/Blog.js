import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader';
import CTABanner from '../components/CTA/CTABanner';
import API from '../utils/api';
import './Blog.css';

const categories = ['All', 'ODSP', 'CPP Disability', 'Landlord Tenant', 'Small Claims', 'Human Rights', 'General'];

const fallbackPosts = [
  { _id: '1', slug: 'understanding-odsp-appeals', title: 'Understanding the ODSP Appeal Process', excerpt: 'If your ODSP application has been denied, you have rights. Learn about the internal review and Social Benefits Tribunal appeal process.', category: 'ODSP', createdAt: '2026-06-15', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80' },
  { _id: '2', slug: 'cpp-disability-severe-prolonged', title: 'CPP Disability: What "Severe and Prolonged" Really Means', excerpt: 'The CPP Disability eligibility standard requires that your disability be both severe and prolonged. This article explains what those terms mean in practice.', category: 'CPP Disability', createdAt: '2026-05-20', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80' },
  { _id: '3', slug: 'ltb-rent-arrears-landlords', title: 'Rent Arrears at the LTB: What Ontario Landlords Need to Know', excerpt: 'When a tenant falls behind on rent, the LTB process has specific requirements and timelines. Here is what landlords need to understand before filing.', category: 'Landlord Tenant', createdAt: '2026-04-10', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80' },
  { _id: '4', slug: 'small-claims-court-ontario-limit', title: 'Small Claims Court in Ontario: An Overview', excerpt: 'Ontario\'s Small Claims Court generally hears claims up to $50,000. Learn about the process, what types of claims qualify and how to prepare.', category: 'Small Claims', createdAt: '2026-03-05', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80' },
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/blog')
      .then(r => setPosts(r.data.length ? r.data : fallbackPosts))
      .catch(() => setPosts(fallbackPosts))
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  const formatDate = d => new Date(d).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="blog-page">
      <PageHeader
        title="Blog & Legal Resources"
        subtitle="Plain-language articles about Ontario paralegal practice areas. For general information only — not legal advice."
        breadcrumb={[{ label: 'Blog' }]}
      />

      <section className="blog-section">
        <div className="container">
          <div className="blog-disclaimer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>The information in these articles is for general information only and does not constitute legal advice. Laws and procedures change. Contact Melville Paralegal Services to discuss your specific situation.</p>
          </div>

          <div className="blog-categories">
            {categories.map(c => (
              <button
                key={c}
                className={`cat-btn${activeCategory === c ? ' active' : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="blog-loading">Loading articles...</div>
          ) : (
            <div className="blog-grid">
              {filtered.map((post, i) => (
                <Link key={post._id || i} to={`/resources/${post.slug}`} className="blog-card">
                  {post.image && (
                    <div className="blog-card-img">
                      <img src={post.image} alt={post.title} />
                    </div>
                  )}
                  <div className="blog-card-body">
                    {post.category && <span className="blog-cat-tag">{post.category}</span>}
                    <h3>{post.title}</h3>
                    {post.excerpt && <p>{post.excerpt}</p>}
                    <div className="blog-card-footer">
                      <span className="blog-date">{formatDate(post.createdAt)}</span>
                      <span className="blog-read-more">
                        Read more
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="blog-empty">
              <p>No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
