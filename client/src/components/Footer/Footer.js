import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const LSOLogo = () => (
  <img
    src={`${process.env.PUBLIC_URL}/lso-logo.png`}
    alt="Law Society of Ontario"
    className="lso-footer-logo"
  />
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Melville Paralegal Services" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Heidi Melville, Licensed Paralegal (Ontario). Compassionate, intelligent advocacy with a primary focus on ODSP
              and CPP Disability appeals, followed by Ontario landlord matters, Human Rights Tribunal proceedings, Small
              Claims Court and judgment enforcement, and Notary Public / Commissioner for Taking Affidavits services.
            </p>
            <div className="footer-award">
              <img
                src={`${process.env.PUBLIC_URL}/homepage-award.png`}
                alt="CommunityVotes Milton 2026 Platinum Winner — Paralegals category"
                className="footer-award-img"
              />
            </div>
            <a
              href="https://lso.ca/home"
              target="_blank"
              rel="noreferrer"
              className="footer-lso-link"
              aria-label="Law Society of Ontario"
            >
              <LSOLogo />
            </a>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/disability-benefits">Disability Benefits Appeals</Link></li>
              <li><Link to="/services/landlord-tenant">Landlord Legal Services</Link></li>
              <li><Link to="/services/tenant-legal-assistance">Tenant Legal Assistance</Link></li>
              <li><Link to="/services/human-rights">Human Rights Tribunal</Link></li>
              <li><Link to="/services/small-claims-enforcement">Small Claims & Enforcement</Link></li>
              <li><Link to="/services/legal-research">Legal Research & Drafting</Link></li>
              <li><Link to="/services/notary">Notary & Commissioner</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/about">About Heidi</Link></li>
              <li><Link to="/services">Legal Services</Link></li>
              <li><Link to="/paralegal-students">Paralegal Students</Link></li>
              <li><Link to="/fees">Fees</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/testimonials">Client Feedback</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/disclaimer">Website Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <PhoneIcon />
                <div>
                  <a href="tel:+12899817712">289-981-7712</a>
                  <span>Fax: 1-877-390-3946</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <EmailIcon />
                <div>
                  <a href="mailto:connect@melvilleparalegal.ca">connect@melvilleparalegal.ca</a>
                  <a href="mailto:heidi@melvilleparalegal.ca">heidi@melvilleparalegal.ca</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <MapPinIcon />
                <div>
                  <span>Milton office / mailing address: Suite 528, 420 Main Street East, Milton, Ontario</span>
                  <span>Northern Ontario office: New Liskeard / Temiskaming Shores — appointments by arrangement</span>
                  <span>Serving clients across Ontario</span>
                </div>
              </div>
            </div>
            <Link to="/contact" className="btn-primary footer-btn">Request an Initial Consultation</Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="footer-disclaimer">
        <div className="container">
          <p>
            Heidi Melville is a paralegal licensed by the Law Society of Ontario, Licence No. P15789.
            The information on this website is provided for general informational purposes only and does not constitute
            legal advice. Submitting an inquiry or intake form does not create a paralegal-client relationship.
            Representation begins only after Melville Paralegal Services agrees to act and confirms the engagement in
            writing. Email, website forms and other electronic communications may not be completely secure — do not
            send highly sensitive personal information, original documents or extensive confidential records unless
            requested and an appropriate transmission method has been confirmed. No outcome is guaranteed. Results
            depend on the evidence, applicable law, conduct of the parties and decisions of the court, tribunal or other
            decision-maker.
          </p>
          <p style={{ marginTop: 10 }}>
            The logo of the Law Society of Ontario is a trademark owned by the Law Society of Ontario.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Melville Paralegal Services. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
