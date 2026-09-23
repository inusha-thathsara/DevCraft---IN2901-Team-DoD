const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Base Route / Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'DevCraft API Server Running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 DevCraft Server running on port ${PORT}`);
});
