const express = require("express");
const router = express.Router();
const {
  addAppointment,
} = require("../controllers/AppointmentConfirmController");
const {
  getUserFromLineUserId,
} = require("../controllers/AppointmentConfirmController");

router.post("/token", async (req, res) => {
  const accessToken = req.body.accessToken;
  console.log("route: ",accessToken);
  let result = await getUserFromLineUserId(accessToken);
  // console.log("result : ", result);
  res.send(result);
});

router.post("/", async (req, res) => {
  const DoctorID = req.body.DoctorID;
  const DoctorName = req.body.DoctorName;
  const Date = req.body.Date;
  const Time = req.body.Time;
  const TimeTableID = req.body.TimeTableID;
  const UserID = req.body.UserID;
  const UserName = req.body.UserName;
  const Initial_Symtoms = req.body.Initial_Symtoms;
  const AccessToken = req.body.AccessToken;

  let result = await addAppointment(
    DoctorID,
    DoctorName,
    Date,
    Time,
    TimeTableID,
    UserID,
    UserName,
    Initial_Symtoms,
    AccessToken
  );
  res.send(result);
});

module.exports = router;
