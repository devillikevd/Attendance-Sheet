const Attendance = require("../models/attendanceModel");

exports.markAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ date: req.params.date }).populate("studentId");
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
