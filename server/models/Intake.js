const mongoose = require('mongoose');

const intakeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  preferredName: String,
  email: { type: String, required: true },
  phone: String,
  serviceType: { type: String, required: true },
  opposingParties: String,
  courtOrTribunal: String,
  fileNumber: String,
  knownDates: String,
  briefDescription: String,
  preferredContact: { type: String, enum: ['email', 'phone', 'either'], default: 'either' },
  preferredTime: String,
  privacyConsent: { type: Boolean, required: true },
  status: { type: String, enum: ['new', 'contacted', 'accepted', 'declined'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('Intake', intakeSchema);
