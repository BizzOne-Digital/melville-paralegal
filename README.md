# Melville Paralegal Services — MERN Website

Full-stack MERN website for Melville Paralegal Services, Ontario.

## Tech Stack
- **Frontend:** React 18, React Router v6, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JWT + bcryptjs
- **File Uploads:** Multer

## Design System
- **Primary:** Deep Plum #5A3749 / Dark Plum #503749
- **Accent:** Soft Taupe #C8B7A6 / Gold #B8956A
- **Text:** Warm Charcoal #2F2F2F
- **Background:** Warm White #FAF8F5
- **Fonts:** Playfair Display (headings) + Inter (body)

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Clone & Install
```bash
git clone [repo-url]
cd melville-paralegal
npm run install-all
```

### 2. Configure Server Environment
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### 3. Create Admin Account
Start the server, then call once:
```
POST http://localhost:5000/api/auth/setup
```
This creates the default admin: `admin` / `Melville2024!`
**Change the password immediately after first login.**

### 4. Run Development
```bash
# From root:
npm run dev

# Or separately:
npm run server   # Backend on :5000
npm run client   # Frontend on :3000
```

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Heidi |
| `/services` | All Services |
| `/services/:slug` | Service Detail |
| `/contact` | Contact |
| `/intake` | Free Intake Form |
| `/testimonials` | Testimonials |
| `/faq` | FAQ |
| `/pricing` | Fees & Pricing |
| `/blog` | Blog Listing |
| `/blog/:slug` | Blog Post |
| `/admin` | Admin Dashboard |

## Service Slugs
- `disability-benefits` — ODSP & CPP Disability
- `landlord-tenant` — Landlord & Tenant Board
- `human-rights` — Human Rights Tribunal
- `small-claims` — Small Claims Court
- `judgment-enforcement` — Judgment Enforcement
- `legal-research` — Legal Research & Drafting
- `notary` — Notary & Commissioner

---

## Admin Dashboard Features

| Section | Features |
|---------|----------|
| **Dashboard** | Stats overview, quick links |
| **Contact Inquiries** | View, mark as read/replied |
| **Intake Requests** | View, update status, email client |
| **Testimonials** | Add, approve, feature, delete |
| **Blog Posts** | Create, edit, publish/draft, delete |
| **Site Images** | Upload by section, active on site immediately |

### Admin Image Sections
Images uploaded to these sections replace Unsplash placeholders on the live site:
- `hero` — Homepage hero
- `about` — About section
- `team` — Team/Heidi photo
- `blog` — Blog featured images
- `services` — Service pages
- `general` — Other uses

---

## API Endpoints

### Public
```
GET  /api/testimonials          — Approved testimonials
GET  /api/blog                  — Published posts
GET  /api/blog/:slug            — Single post
GET  /api/images?section=hero   — Images by section
POST /api/contact               — Submit contact form
POST /api/intake                — Submit intake request
```

### Admin (JWT Required)
```
POST   /api/auth/login
GET    /api/contact
PATCH  /api/contact/:id
GET    /api/intake
PATCH  /api/intake/:id
GET    /api/testimonials/admin
POST   /api/testimonials
PATCH  /api/testimonials/:id
DELETE /api/testimonials/:id
GET    /api/blog/admin/all
POST   /api/blog
PUT    /api/blog/:id
DELETE /api/blog/:id
POST   /api/images              — Multipart upload
DELETE /api/images/:id
```

---

## Client Notes
- No outcome guarantees mentioned anywhere — compliant with LSO rules
- CommunityVotes 2026 Platinum Winner badge placement: Hero + Footer
- All disclaimers in place on intake form, contact form, blog posts
- Hardship pricing page does not use promotional language
- Mobile responsive across all pages
- LSO regulated statement in footer and About page

## Contact
- **Website:** www.melvilleparalegal.ca
- **Phone:** 289-981-7712 · Toll-free: 1-877-390-3946
- **Email:** connect@melvilleparalegal.ca
