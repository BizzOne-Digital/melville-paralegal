const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(express.json());

// Cache the DB connection across serverless invocations
let cached = global._mongooseConn;
if (!cached) cached = global._mongooseConn = { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/melville-paralegal')
      .then(m => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error('MongoDB Error:', err);
    res.status(500).json({ message: 'Database connection error' });
  }
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/services', require('./routes/services'));
app.use('/api/intake', require('./routes/intake'));

app.get('/api/health', (req, res) => res.json({ ok: true }));

module.exports = app;
