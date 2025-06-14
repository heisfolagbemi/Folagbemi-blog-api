const express = require('express');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', blogRoutes);

module.exports = app;


  