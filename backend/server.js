// Load env vars FIRST
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const app = express();

// Connect to MongoDB
connectDB();

// CORS middleware with whitelist for your frontend URL
const allowedOrigins = [
  "https://auth-systembyimran-1.onrender.com",  // Your frontend URL
  "http://localhost:3000" // Optional: for local dev testing
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin like mobile apps or curl
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy: The origin ${origin} is not allowed`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // if you are sending cookies or auth headers
}));

app.use(express.json());

// Auth routes
app.use("/api/auth", require("./routes/auth"));

// Register route
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Test route
app.get("/", (req, res) => res.send("🚀 API is running..."));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
