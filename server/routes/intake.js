const router = require('express').Router();
const Intake = require('../models/Intake');
const auth = require('../middleware/auth');

router.post('/', async (req, res) => {
  try {
    const intake = new Intake(req.body);
    await intake.save();
    res.json({ message: 'Intake submitted successfully. We will be in touch shortly.' });
  } catch (err) {
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
