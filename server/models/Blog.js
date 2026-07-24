const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  content: { type: String, required: true },
  category: { type: String, enum: ['ODSP', 'CPP Disability', 'Landlord Tenant', 'Small Claims', 'Human Rights', 'General'], default: 'General' },
  image: String,
  isPublished: { type: Boolean, default: false },
  publishedAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
