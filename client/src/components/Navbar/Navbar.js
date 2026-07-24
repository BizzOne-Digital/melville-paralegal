import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect y="3" width="22" height="2" rx="1" fill="currentColor"/>
    <rect y="10" width="22" height="2" rx="1" fill="currentColor"/>
    <rect y="17" width="22" height="2" rx="1" fill="currentColor"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-top-bar">
        <div className="container nav-top-inner">
          <span className="nav-top-text">
            <PhoneIcon /> 289-981-7712 &nbsp;|&nbsp; Toll-Free: 1-877-390-3946 &nbsp;|&nbsp; connect@melvilleparalegal.ca
          </span>
          <Link to="/intake" className="nav-top-cta">Book Free Consultation</Link>
        </div>
      </div>
      <nav className="nav-main">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Melville Paralegal Services" className="logo-img" />
          </Link>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/intake" className="btn-primary nav-cta-btn">
            Free Consultation
          </Link>

          <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/intake" className="mobile-cta">Book Free Consultation</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
