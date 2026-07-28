import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieNotice.css';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('mps_cookie_ack')) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem('mps_cookie_ack', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-notice">
      <p>
        This website uses only minimal, essential cookies required for the site to function.
        See our <Link to="/privacy-policy">Privacy Policy</Link> for details.
      </p>
      <button className="btn-primary cookie-notice-btn" onClick={dismiss}>Got it</button>
    </div>
  );
}
