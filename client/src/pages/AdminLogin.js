import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../utils/api';
import './AdminLogin.css';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const r = await API.post('/auth/login', form);
      login(r.data.user, r.data.token);
      navigate('/admin');
    } catch {
      setError('Invalid username or password.');
    }
    setLoading(false);
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-logo">
          <div className="admin-logo-mark"><span>M</span></div>
          <div>
            <span className="admin-logo-name">Melville</span>
            <span className="admin-logo-sub">Admin Panel</span>
          </div>
        </div>

        <h2>Sign In</h2>
        <p className="admin-login-sub">Access the MPS admin dashboard</p>

        {error && <div className="admin-error">{error}</div>}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
              required
              placeholder="Admin username"
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn-primary admin-login-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="admin-back-link">
          <a href="/">← Back to website</a>
        </p>
      </div>
    </div>
  );
}
