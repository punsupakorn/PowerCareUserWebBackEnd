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

router.get("/doctorname/:date", async (req, res) => {
  const date = req.params;
  let result = await getDoctorInChooseDate(date);
  // console.log("result : ", result);
  res.send(result);
});

router.get("/time", async (req, res) => {
  const TimeTableID = "0d2oeRCaYrfcoKoZ5d8Z";
  let result = await getTimeSlot(TimeTableID);
  // console.log("result : ", result);
  res.send(result);
});

router.post("/", async (req, res) => {
  const UserID = req.body.UserID;
  const DoctorName = req.body.DoctorName;
  const Symptom = req.body.Symptom;
  const Date = req.body.Date;
  const Time = req.body.Time;

  let result = await createAppointment(UserID,DoctorName,Symptom,Date,Time);
  res.send(result);
});

module.exports = router;
