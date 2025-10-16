// app.js
require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Example route: Get all users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
