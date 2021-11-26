const express = require("express");
const router = express.Router();
const { editAppointment } = require("../controllers/PostponeConfirmController");

router.post("/", async (req, res) => {
  const {
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
    olddate,
    doctorname,
    symptom,
    username,
    accessToken,
  } = req.body;
  let result = await editAppointment(
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
    olddate,
    doctorname,
    symptom,
    username,
    accessToken
  );
  res.send(result);
});

module.exports = router;
