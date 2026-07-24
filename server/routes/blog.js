const router = require('express').Router();
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const blogs = await Blog.find({ isPublished: true }).sort({ publishedAt: -1 });
  res.json(blogs);
});

router.get('/:slug', async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
  if (!blog) return res.status(404).json({ message: 'Not found' });
  res.json(blog);
});

router.get('/admin/all', auth, async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

router.post('/', auth, async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', auth, async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
});

router.delete('/:id', auth, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
