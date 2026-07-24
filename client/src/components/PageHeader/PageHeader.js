import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, breadcrumb, tag }) {
  return (
    <section className="page-header">
      <div className="container page-header-inner">
        {breadcrumb && (
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb.map((b, i) => (
              <React.Fragment key={i}>
                <span className="breadcrumb-sep">›</span>
                {b.path ? <Link to={b.path}>{b.label}</Link> : <span>{b.label}</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        {tag && <span className="page-tag">{tag}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
      <div className="page-header-wave">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="var(--warm-white)"/>
        </svg>
      </div>
    </section>
  );
}
