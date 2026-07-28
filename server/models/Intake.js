const mongoose = require('mongoose');

const intakeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: String,
  serviceType: { type: String, required: true },
  briefDescription: String,
  deadlineDate: String,
  consent: { type: Boolean, required: true },
  status: { type: String, enum: ['new', 'contacted', 'accepted', 'declined'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Intake', intakeSchema);
