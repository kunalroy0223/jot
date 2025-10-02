const express = require("express");
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote
} = require("../controllers/noteController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// All routes require logged-in user
router.use(authMiddleware());

router.post("/", createNote);
router.get("/", getNotes);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
