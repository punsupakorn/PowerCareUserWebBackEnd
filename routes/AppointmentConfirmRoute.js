const express = require("express");
const router = express.Router();
const { createAppointment } = require("../controllers/AppointmentController");
const {
  getUserFromLineUserId,
} = require("../controllers/AppointmentConfirmController");

router.post("/token", async (req, res) => {
  const accessToken = req.body.accessToken;
  let result = await getUserFromLineUserId(accessToken);
  // console.log("result : ", result);
  res.send(result);
});

router.post("/", async (req, res) => {
  const UserID = req.body.UserID;
  const DoctorName = req.body.DoctorName;
  const Symptom = req.body.Symptom;
  const Date = req.body.Date;
  const Time = req.body.Time;

  let result = await createAppointment(UserID, DoctorName, Symptom, Date, Time);
  res.send(result);
});

module.exports = router;
