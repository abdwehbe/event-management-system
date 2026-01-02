const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getAllEvents,
} = require("../controllers/eventController");

router.post("/", authenticate, createEvent);
router.get("/", authenticate, getEvents);
router.get("/all", getAllEvents);
router.get("/:id", authenticate, getEventById);
router.put("/:id", authenticate, updateEvent);
router.delete("/:id", authenticate, deleteEvent);

module.exports = router;
