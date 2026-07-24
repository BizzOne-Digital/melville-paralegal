import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../utils/api';
import './AdminDashboard.css';

// ─── Icons ──────────────────────────────────────────────
const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

// ─── Sidebar Nav ─────────────────────────────────────────
const navItems = [
  { path: '/admin', label: 'Dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
  { path: '/admin/contacts', label: 'Contact Inquiries', icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' },
  { path: '/admin/intake', label: 'Intake Requests', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' },
  { path: '/admin/testimonials', label: 'Testimonials', icon: 'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' },
  { path: '/admin/services', label: 'Services', icon: 'M12 2l3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L3 9l6-1z' },
  { path: '/admin/blog', label: 'Blog Posts', icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z' },
];

function AdminSidebar({ onClose }) {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate('/admin/login'); };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-logo">
        <div className="admin-logo-mark-sm"><span>M</span></div>
        <div>
          <span className="admin-logo-nm">MPS Admin</span>
          <span className="admin-logo-sb">Melville Paralegal</span>
        </div>
      </div>
      <nav className="admin-nav">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`admin-nav-item${location.pathname === item.path ? ' active' : ''}`}
            onClick={onClose}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            {item.label}
          </Link>
        ))}
      </nav>
      <button className="admin-logout-btn" onClick={handleLogout}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
        </svg>
        Sign Out
      </button>
    </aside>
  );
}

// ─── Dashboard Home ────────────────────────────────────
function DashboardHome() {
  const [stats, setStats] = useState({ contacts: 0, intake: 0, testimonials: 0, blog: 0 });

  useEffect(() => {
    Promise.all([
      API.get('/contact').catch(() => ({ data: [] })),
      API.get('/intake').catch(() => ({ data: [] })),
      API.get('/testimonials/admin').catch(() => ({ data: [] })),
      API.get('/blog/admin/all').catch(() => ({ data: [] })),
    ]).then(([c, i, t, b]) => {
      setStats({ contacts: c.data.length, intake: i.data.length, testimonials: t.data.length, blog: b.data.length });
    });
  }, []);

  const cards = [
    { label: 'Contact Inquiries', value: stats.contacts, path: '/admin/contacts', color: 'plum' },
    { label: 'Intake Requests', value: stats.intake, path: '/admin/intake', color: 'taupe' },
    { label: 'Testimonials', value: stats.testimonials, path: '/admin/testimonials', color: 'gold' },
    { label: 'Blog Posts', value: stats.blog, path: '/admin/blog', color: 'charcoal' },
  ];

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Heidi. Here's a summary of your site activity.</p>
      </div>
      <div className="dashboard-stats">
        {cards.map(card => (
          <Link key={card.path} to={card.path} className={`stat-card stat-${card.color}`}>
            <div className="stat-value">{card.value}</div>
            <div className="stat-label">{card.label}</div>
          </Link>
        ))}
      </div>
      <div className="dashboard-links">
        <h3>Quick Links</h3>
        <div className="quick-links">
          <a href="/" target="_blank" className="quick-link">View Website →</a>
          <Link to="/admin/blog" className="quick-link">Write Blog Post →</Link>
        </div>
      </div>
    </div>
  );
}

// ─── Contacts Manager ──────────────────────────────────
function ContactsManager() {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    API.get('/contact').then(r => setContacts(r.data));
  }, []);

  const updateStatus = async (id, status) => {
    await API.patch(`/contact/${id}`, { status });
    setContacts(prev => prev.map(c => c._id === id ? { ...c, status } : c));
    if (selected?._id === id) setSelected(prev => ({ ...prev, status }));
  };

  const statusColor = { new: '#e74c3c', read: '#f39c12', replied: '#27ae60' };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Contact Inquiries</h1>
        <p>{contacts.filter(c => c.status === 'new').length} new messages</p>
      </div>
      <div className="admin-list-grid">
        <div className="admin-list">
          {contacts.map(c => (
            <div key={c._id} className={`admin-list-item${selected?._id === c._id ? ' active' : ''}`} onClick={() => setSelected(c)}>
              <div className="list-item-main">
                <strong>{c.name}</strong>
                <span>{c.subject || 'General inquiry'}</span>
              </div>
              <div className="list-item-meta">
                <span className="status-dot" style={{ background: statusColor[c.status] }} />
                <span className="list-item-date">{new Date(c.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
          {contacts.length === 0 && <div className="admin-empty">No inquiries yet.</div>}
        </div>

        {selected && (
          <div className="admin-detail-panel">
            <div className="detail-header">
              <div>
                <h3>{selected.name}</h3>
                <span>{selected.email} {selected.phone && `· ${selected.phone}`}</span>
              </div>
              <button className="detail-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="detail-subject">{selected.subject}</div>
            <div className="detail-message">{selected.message}</div>
            <div className="detail-actions">
              {['new', 'read', 'replied'].map(s => (
                <button key={s} className={`status-btn${selected.status === s ? ' active' : ''}`} onClick={() => updateStatus(selected._id, s)}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <a href={`mailto:${selected.email}`} className="btn-primary reply-btn">Reply via Email</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Intake Manager ───────────────────────────────────
function IntakeManager() {
  const [intakes, setIntakes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    API.get('/intake').then(r => setIntakes(r.data));
  }, []);

  const updateStatus = async (id, status) => {
    await API.patch(`/intake/${id}`, { status });
    setIntakes(prev => prev.map(i => i._id === id ? { ...i, status } : i));
    if (selected?._id === id) setSelected(prev => ({ ...prev, status }));
  };

  const statusColor = { new: '#e74c3c', contacted: '#f39c12', accepted: '#27ae60', declined: '#95a5a6' };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Intake Requests</h1>
        <p>{intakes.filter(i => i.status === 'new').length} new requests</p>
      </div>
      <div className="admin-list-grid">
        <div className="admin-list">
          {intakes.map(item => (
            <div key={item._id} className={`admin-list-item${selected?._id === item._id ? ' active' : ''}`} onClick={() => setSelected(item)}>
              <div className="list-item-main">
                <strong>{item.firstName} {item.lastName}</strong>
                <span>{item.serviceType?.substring(0, 40)}...</span>
              </div>
              <div className="list-item-meta">
                <span className="status-dot" style={{ background: statusColor[item.status] }} />
                <span className="list-item-date">{new Date(item.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
          {intakes.length === 0 && <div className="admin-empty">No intake requests yet.</div>}
        </div>

        {selected && (
          <div className="admin-detail-panel">
            <div className="detail-header">
              <div>
                <h3>{selected.firstName} {selected.lastName}</h3>
                <span>{selected.email} {selected.phone && `· ${selected.phone}`}</span>
              </div>
              <button className="detail-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="detail-field"><strong>Service Type:</strong> {selected.serviceType}</div>
            <div className="detail-field"><strong>Preferred Contact:</strong> {selected.preferredContact}</div>
            {selected.preferredTime && <div className="detail-field"><strong>Availability:</strong> {selected.preferredTime}</div>}
            {selected.briefDescription && <div className="detail-message">{selected.briefDescription}</div>}
            <div className="detail-actions">
              {['new', 'contacted', 'accepted', 'declined'].map(s => (
                <button key={s} className={`status-btn${selected.status === s ? ' active' : ''}`} onClick={() => updateStatus(selected._id, s)}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
              <a href={`mailto:${selected.email}`} className="btn-primary reply-btn">Email Client</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Testimonials Manager ─────────────────────────────
function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ name: '', service: '', rating: 5, text: '' });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    API.get('/testimonials/admin').then(r => setTestimonials(r.data));
  }, []);

  const toggle = async (id, field) => {
    const t = testimonials.find(t => t._id === id);
    const update = { [field]: !t[field] };
    await API.patch(`/testimonials/${id}`, update);
    setTestimonials(prev => prev.map(t => t._id === id ? { ...t, ...update } : t));
  };

  const approve = async id => {
    const update = { isApproved: true, isDenied: false };
    await API.patch(`/testimonials/${id}`, update);
    setTestimonials(prev => prev.map(t => t._id === id ? { ...t, ...update } : t));
  };

  const deny = async id => {
    if (!window.confirm('Deny this testimonial? It will not be shown on the site.')) return;
    const update = { isApproved: false, isDenied: true, isFeatured: false };
    await API.patch(`/testimonials/${id}`, update);
    setTestimonials(prev => prev.map(t => t._id === id ? { ...t, ...update } : t));
  };

  const deleteT = async id => {
    if (!window.confirm('Delete this testimonial?')) return;
    await API.delete(`/testimonials/${id}`);
    setTestimonials(prev => prev.filter(t => t._id !== id));
  };

  const addTestimonial = async e => {
    e.preventDefault();
    await API.post('/testimonials', { ...form, isApproved: true });
    const r = await API.get('/testimonials/admin');
    setTestimonials(r.data);
    setForm({ name: '', service: '', rating: 5, text: '' });
    setAdding(false);
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Testimonials</h1>
        <button className="btn-primary" onClick={() => setAdding(!adding)}>{adding ? 'Cancel' : '+ Add Testimonial'}</button>
      </div>

      {adding && (
        <div className="admin-form-card">
          <h3>Add Approved Testimonial</h3>
          <form onSubmit={addTestimonial} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="form-row">
              <div className="form-group"><label>Client Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required /></div>
              <div className="form-group"><label>Service</label><input value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} placeholder="e.g. ODSP Appeal" /></div>
            </div>
            <div className="form-group"><label>Rating (1-5)</label><input type="number" min="1" max="5" value={form.rating} onChange={e => setForm({ ...form, rating: parseInt(e.target.value) })} /></div>
            <div className="form-group"><label>Testimonial Text</label><textarea rows="4" value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} required /></div>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Save Testimonial</button>
          </form>
        </div>
      )}

      <div className="testimonials-admin-list">
        {testimonials.map(t => (
          <div key={t._id} className="testimonial-admin-item">
            <div className="ta-body">
              <strong>{t.name}</strong> {t.service && <span className="ta-service">· {t.service}</span>}
              <span className={`pub-badge${t.isApproved ? ' pub' : ''}`} style={{ marginLeft: 8, ...(t.isDenied ? { background: '#fdecea', color: '#c0392b' } : {}) }}>
                {t.isApproved ? 'Approved' : t.isDenied ? 'Denied' : 'Pending'}
              </span>
              <p>"{t.text}"</p>
            </div>
            <div className="ta-actions">
              {!t.isApproved && (
                <button className="toggle-btn" onClick={() => approve(t._id)}>Approve</button>
              )}
              {!t.isDenied && (
                <button className="delete-btn" onClick={() => deny(t._id)}>Deny</button>
              )}
              <button className={`toggle-btn${t.isFeatured ? ' featured' : ''}`} onClick={() => toggle(t._id, 'isFeatured')} disabled={!t.isApproved}>
                {t.isFeatured ? '★ Featured' : 'Feature'}
              </button>
              <button className="delete-btn" onClick={() => deleteT(t._id)}>Delete</button>
            </div>
          </div>
        ))}
        {testimonials.length === 0 && <div className="admin-empty">No testimonials yet.</div>}
      </div>
    </div>
  );
}

// ─── Services Manager ──────────────────────────────────
const emptyServiceForm = {
  title: '', slug: '', tag: '', featured: false, summary: '', highlightsText: '',
  subtitle: '', image: '', intro: '', important: '', disclaimer: '',
  order: 0, isActive: true, sections: [],
};

function toServiceForm(s) {
  return {
    ...emptyServiceForm,
    ...s,
    highlightsText: (s.highlights || []).join('\n'),
    sections: (s.sections || []).map(sec => ({ title: sec.title || '', body: sec.body || '', itemsText: (sec.items || []).join('\n') })),
  };
}

function fromServiceForm(form) {
  return {
    title: form.title, slug: form.slug, tag: form.tag, featured: form.featured, summary: form.summary,
    highlights: form.highlightsText.split('\n').map(s => s.trim()).filter(Boolean),
    subtitle: form.subtitle, image: form.image, intro: form.intro, important: form.important,
    disclaimer: form.disclaimer, order: Number(form.order) || 0, isActive: form.isActive,
    sections: form.sections.map(sec => ({
      title: sec.title, body: sec.body,
      items: sec.itemsText.split('\n').map(s => s.trim()).filter(Boolean),
    })),
  };
}

function ServicesManager() {
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyServiceForm);

  useEffect(() => {
    API.get('/services/admin/all').then(r => setServices(r.data));
  }, []);

  const openNew = () => { setForm(emptyServiceForm); setEditing('new'); };
  const openEdit = s => { setForm(toServiceForm(s)); setEditing(s._id); };

  const save = async e => {
    e.preventDefault();
    const payload = fromServiceForm(form);
    if (editing === 'new') {
      const r = await API.post('/services', payload);
      setServices(prev => [...prev, r.data]);
    } else {
      const r = await API.put(`/services/${editing}`, payload);
      setServices(prev => prev.map(s => s._id === editing ? r.data : s));
    }
    setEditing(null);
  };

  const del = async id => {
    if (!window.confirm('Delete this service?')) return;
    await API.delete(`/services/${id}`);
    setServices(prev => prev.filter(s => s._id !== id));
  };

  const genSlug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const addSection = () => setForm({ ...form, sections: [...form.sections, { title: '', body: '', itemsText: '' }] });
  const updateSection = (i, field, value) => {
    const sections = form.sections.map((sec, idx) => idx === i ? { ...sec, [field]: value } : sec);
    setForm({ ...form, sections });
  };
  const removeSection = i => setForm({ ...form, sections: form.sections.filter((_, idx) => idx !== i) });

  if (editing !== null) {
    return (
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>{editing === 'new' ? 'New Service' : 'Edit Service'}</h1>
          <button className="btn-secondary" onClick={() => setEditing(null)}>← Back</button>
        </div>
        <div className="admin-form-card">
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="form-group">
              <label>Title</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value, slug: editing === 'new' ? genSlug(e.target.value) : form.slug })} required />
            </div>
            <div className="form-row">
              <div className="form-group"><label>Slug</label><input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} required /></div>
              <div className="form-group"><label>Tag</label><input value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} placeholder="e.g. Primary Focus" /></div>
            </div>
            <div className="form-group"><label>Summary (shown on Services list)</label><textarea rows="2" value={form.summary} onChange={e => setForm({ ...form, summary: e.target.value })} /></div>
            <div className="form-group"><label>Highlights (one per line, shown on Services list)</label><textarea rows="4" value={form.highlightsText} onChange={e => setForm({ ...form, highlightsText: e.target.value })} /></div>
            <div className="form-row">
              <label className="checkbox-label"><input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} /> Featured</label>
              <label className="checkbox-label"><input type="checkbox" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} /> Active (visible on site)</label>
              <div className="form-group"><label>Order</label><input type="number" value={form.order} onChange={e => setForm({ ...form, order: e.target.value })} style={{ width: 80 }} /></div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '8px 0' }} />
            <strong>Detail Page</strong>
            <div className="form-group"><label>Subtitle</label><input value={form.subtitle} onChange={e => setForm({ ...form, subtitle: e.target.value })} /></div>
            <div className="form-group"><label>Image URL</label><input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} placeholder="https://..." /></div>
            <div className="form-group"><label>Intro</label><textarea rows="3" value={form.intro} onChange={e => setForm({ ...form, intro: e.target.value })} /></div>
            <div className="form-group"><label>Important Note</label><textarea rows="2" value={form.important} onChange={e => setForm({ ...form, important: e.target.value })} /></div>

            <strong>Sections</strong>
            {form.sections.map((sec, i) => (
              <div key={i} className="admin-form-card" style={{ background: '#faf8f7' }}>
                <div className="form-group"><label>Section Title</label><input value={sec.title} onChange={e => updateSection(i, 'title', e.target.value)} /></div>
                <div className="form-group"><label>Body</label><textarea rows="2" value={sec.body} onChange={e => updateSection(i, 'body', e.target.value)} /></div>
                <div className="form-group"><label>Items (one per line)</label><textarea rows="4" value={sec.itemsText} onChange={e => updateSection(i, 'itemsText', e.target.value)} /></div>
                <button type="button" className="delete-btn" onClick={() => removeSection(i)}>Remove Section</button>
              </div>
            ))}
            <button type="button" className="btn-secondary" onClick={addSection} style={{ alignSelf: 'flex-start' }}>+ Add Section</button>

            <div className="form-group"><label>Disclaimer</label><textarea rows="2" value={form.disclaimer} onChange={e => setForm({ ...form, disclaimer: e.target.value })} /></div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button type="submit" className="btn-primary">Save Service</button>
              <button type="button" className="btn-secondary" onClick={() => setEditing(null)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Services</h1>
        <button className="btn-primary" onClick={openNew}>+ New Service</button>
      </div>
      <div className="blog-admin-list">
        {services.map(s => (
          <div key={s._id} className="blog-admin-item">
            <div className="ba-main">
              <strong>{s.title}</strong>
              <span>{s.tag} · order {s.order}</span>
            </div>
            <div className="ba-actions">
              <span className={`pub-badge${s.isActive ? ' pub' : ''}`}>{s.isActive ? 'Active' : 'Hidden'}</span>
              <button className="btn-secondary btn-sm" onClick={() => openEdit(s)}>Edit</button>
              <button className="delete-btn" onClick={() => del(s._id)}>Delete</button>
            </div>
          </div>
        ))}
        {services.length === 0 && <div className="admin-empty">No services yet. Create your first service.</div>}
      </div>
    </div>
  );
}

// ─── Blog Manager ─────────────────────────────────────
function BlogManager() {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', slug: '', excerpt: '', content: '', category: 'General', isPublished: false, image: '' });

  useEffect(() => {
    API.get('/blog/admin/all').then(r => setPosts(r.data));
  }, []);

  const openNew = () => {
    setForm({ title: '', slug: '', excerpt: '', content: '', category: 'General', isPublished: false, image: '' });
    setEditing('new');
  };

  const openEdit = post => {
    setForm({ ...post });
    setEditing(post._id);
  };

  const save = async e => {
    e.preventDefault();
    if (editing === 'new') {
      const r = await API.post('/blog', form);
      setPosts(prev => [r.data, ...prev]);
    } else {
      const r = await API.put(`/blog/${editing}`, form);
      setPosts(prev => prev.map(p => p._id === editing ? r.data : p));
    }
    setEditing(null);
  };

  const del = async id => {
    if (!window.confirm('Delete this post?')) return;
    await API.delete(`/blog/${id}`);
    setPosts(prev => prev.filter(p => p._id !== id));
  };

  const genSlug = title => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  if (editing !== null) {
    return (
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>{editing === 'new' ? 'New Blog Post' : 'Edit Post'}</h1>
          <button className="btn-secondary" onClick={() => setEditing(null)}>← Back</button>
        </div>
        <div className="admin-form-card">
          <form onSubmit={save} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="form-group">
              <label>Title</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value, slug: genSlug(e.target.value) })} required />
            </div>
            <div className="form-row">
              <div className="form-group"><label>Slug</label><input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} required /></div>
              <div className="form-group">
                <label>Category</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                  {['ODSP', 'CPP Disability', 'Landlord Tenant', 'Small Claims', 'Human Rights', 'General'].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="form-group"><label>Excerpt</label><textarea rows="2" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} /></div>
            <div className="form-group"><label>Image URL (Unsplash or uploaded)</label><input value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} placeholder="https://..." /></div>
            <div className="form-group"><label>Content (HTML)</label><textarea rows="16" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} required style={{ fontFamily: 'monospace', fontSize: '0.82rem' }} /></div>
            <label className="checkbox-label">
              <input type="checkbox" checked={form.isPublished} onChange={e => setForm({ ...form, isPublished: e.target.checked })} />
              Published
            </label>
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="submit" className="btn-primary">Save Post</button>
              <button type="button" className="btn-secondary" onClick={() => setEditing(null)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Blog Posts</h1>
        <button className="btn-primary" onClick={openNew}>+ New Post</button>
      </div>
      <div className="blog-admin-list">
        {posts.map(p => (
          <div key={p._id} className="blog-admin-item">
            <div className="ba-main">
              <strong>{p.title}</strong>
              <span>{p.category} · {new Date(p.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="ba-actions">
              <span className={`pub-badge${p.isPublished ? ' pub' : ''}`}>{p.isPublished ? 'Published' : 'Draft'}</span>
              <button className="btn-secondary btn-sm" onClick={() => openEdit(p)}>Edit</button>
              <button className="delete-btn" onClick={() => del(p._id)}>Delete</button>
            </div>
          </div>
        ))}
        {posts.length === 0 && <div className="admin-empty">No blog posts yet. Create your first post.</div>}
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-dashboard">
      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}
      <AdminSidebar onClose={() => setSidebarOpen(false)} />

      <div className="admin-main">
        <div className="admin-topbar">
          <button className="admin-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <rect y="3" width="22" height="2" rx="1" fill="currentColor"/>
              <rect y="10" width="22" height="2" rx="1" fill="currentColor"/>
              <rect y="17" width="22" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
          <span className="admin-topbar-title">Melville Paralegal Services — Admin</span>
          <a href="/" target="_blank" className="admin-view-site">View Site →</a>
        </div>

        <div className="admin-content">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/contacts" element={<ContactsManager />} />
            <Route path="/intake" element={<IntakeManager />} />
            <Route path="/testimonials" element={<TestimonialsManager />} />
            <Route path="/services" element={<ServicesManager />} />
            <Route path="/blog" element={<BlogManager />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
