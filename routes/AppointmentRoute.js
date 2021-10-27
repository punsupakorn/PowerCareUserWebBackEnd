const express = require("express");
const router = express.Router();
// const { getTimeTable } = require("../controllers/AppointmentController");
const {
  createAppointment,
  getDateInTimeTable,
  getDoctorInChooseDate,
  getTimeSlot,
} = require("../controllers/AppointmentController");

router.get("/", async (req, res) => {
  let result = await getDateInTimeTable();
  // console.log("result : ", result);
  res.send(result);
});

router.post("/name", async (req, res) => {
  const Date = req.body.Date;
  let result = await getDoctorInChooseDate(Date);
  // console.log("result : ", result);
  res.send(result);
});

router.post("/time", async (req, res) => {
  const TimeTableID = req.body.TimeTableID;
  let result = await getTimeSlot(TimeTableID);
  console.log("result : ", result);
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
