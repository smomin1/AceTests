const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
  getAllNotes,
} = require("../controllers/noteController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.get("/all", protect, getAllNotes);

router
  .route("/:id")
  .get(getNoteById)
  .put(protect, updateNote)
  .delete(protect, deleteNote);

module.exports = router;
