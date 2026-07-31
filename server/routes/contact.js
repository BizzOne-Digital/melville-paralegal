const router = require('express').Router();
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const { sendNotificationEmail } = require('../utils/mailer');

router.post('/', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: 'Message sent successfully' });

    sendNotificationEmail({
      subject: `New Contact Form Submission - ${contact.name || 'Website'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name || ''}</p>
        <p><strong>Email:</strong> ${contact.email || ''}</p>
        <p><strong>Phone:</strong> ${contact.phone || ''}</p>
        <p><strong>Subject:</strong> ${contact.subject || ''}</p>
        <p><strong>Message:</strong><br/>${contact.message || ''}</p>
      `,
    });
  } catch (err) {
    console.error('[contact] Error saving submission:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', auth, async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

router.patch('/:id', auth, async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(contact);
});

module.exports = router;
