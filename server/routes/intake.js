const router = require('express').Router();
const Intake = require('../models/Intake');
const auth = require('../middleware/auth');
const { sendNotificationEmail } = require('../utils/mailer');

router.post('/', async (req, res) => {
  try {
    const intake = new Intake(req.body);
    await intake.save();
    res.json({ message: 'Intake submitted successfully. We will be in touch shortly.' });

    sendNotificationEmail({
      subject: `New Intake Form Submission - ${intake.fullName || 'Website'}`,
      html: `
        <h2>New Intake Form Submission</h2>
        <p><strong>Full Name:</strong> ${intake.fullName || ''}</p>
        <p><strong>Email:</strong> ${intake.email || ''}</p>
        <p><strong>Phone:</strong> ${intake.phone || ''}</p>
        <p><strong>City:</strong> ${intake.city || ''}</p>
        <p><strong>Service Type:</strong> ${intake.serviceType || ''}</p>
        <p><strong>Deadline Date:</strong> ${intake.deadlineDate || ''}</p>
        <p><strong>Brief Description:</strong><br/>${intake.briefDescription || ''}</p>
      `,
    });
  } catch (err) {
    console.error('[intake] Error saving submission:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', auth, async (req, res) => {
  const intakes = await Intake.find().sort({ createdAt: -1 });
  res.json(intakes);
});

router.patch('/:id', auth, async (req, res) => {
  const intake = await Intake.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(intake);
});

module.exports = router;
