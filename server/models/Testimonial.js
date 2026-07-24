const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: String,
  rating: { type: Number, min: 1, max: 5, default: 5 },
  text: { type: String, required: true },
  isApproved: { type: Boolean, default: false },
  isDenied: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
