const router = require('express').Router();
const Testimonial = require('../models/Testimonial');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const testimonials = await Testimonial.find({ isApproved: true }).sort({ isFeatured: -1, createdAt: -1 });
  res.json(testimonials);
});

router.post('/', async (req, res) => {
  try {
    const t = new Testimonial(req.body);
    await t.save();
    res.json({ message: 'Testimonial submitted for review' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/admin', auth, async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json(testimonials);
});

router.patch('/:id', auth, async (req, res) => {
  const t = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(t);
});

router.delete('/:id', auth, async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
