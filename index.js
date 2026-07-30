require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const cdRoutes = require('./routes/cdRoutes');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/cds', cdRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
