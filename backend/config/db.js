const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("📡 MONGO_URI:", process.env.MONGO_URI); // For debugging

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("📢 Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("⚠️ Mongoose connection error:", err);
});

module.exports = connectDB;
 