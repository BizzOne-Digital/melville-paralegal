const router = require('express').Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const services = await Service.find({ isActive: true }).sort({ order: 1, createdAt: 1 });
  res.json(services);
});

router.get('/admin/all', auth, async (req, res) => {
  const services = await Service.find().sort({ order: 1, createdAt: 1 });
  res.json(services);
});

router.get('/:slug', async (req, res) => {
  const service = await Service.findOne({ slug: req.params.slug, isActive: true });
  if (!service) return res.status(404).json({ message: 'Not found' });
  res.json(service);
});

router.post('/', auth, async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.json(service);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', auth, async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(service);
});

router.delete('/:id', auth, async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
