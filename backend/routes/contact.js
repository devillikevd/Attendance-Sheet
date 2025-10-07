const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/contactController");

router.post("/", sendEmail);

module.exports = router;

