const express = require("express");
const router = express.Router();
const { createAppointment } = require("../controllers/AppointmentController");

router.post("/", createAppointment);

module.exports = router;
