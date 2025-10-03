const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/notes", require("./routes/noteRoutes"));
//app.use("/api/v1/admin", require("./routes/adminRoutes")); // ✅ Admin routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
