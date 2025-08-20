// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// basic middleware
app.use(express.json());

// mount routes (we'll create these soon)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/interview', require('./routes/interviewRoutes'));

// fallback
app.get('/', (req, res) => res.send('AI Interview Prep Backend is running'));

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

start().catch(err => {
  console.error('Failed to start', err);
  process.exit(1);
});
