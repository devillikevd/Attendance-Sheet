const express = require("express");
const { markAttendance, getAttendance } = require("../controllers/attendanceController");
const router = express.Router();

router.post("/", markAttendance);
router.get("/:date", getAttendance);

module.exports = router;
