const express = require("express");
const { registerUser, loginUser, getMe, updateMe } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Get current user (protected)
router.get("/me", authMiddleware(), getMe);

// Update current user (protected)
router.put("/me", authMiddleware(), updateMe);

module.exports = router;
