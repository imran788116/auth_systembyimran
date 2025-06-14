const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express(); // Define app first

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Register Route
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Existing login/auth routes (if any)
app.use('/api/auth', require('./routes/auth'));

// Default route
app.get('/', (req, res) => res.send('API is running...'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
