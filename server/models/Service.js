const mongoose = require('mongoose');

const serviceSectionSchema = new mongoose.Schema({
  title: String,
  body: String,
  items: [String],
}, { _id: false });

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  tag: String,
  featured: { type: Boolean, default: false },
  summary: String,
  highlights: [String],
  subtitle: String,
  image: String,
  intro: String,
  important: String,
  sections: [serviceSectionSchema],
  disclaimer: String,
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
