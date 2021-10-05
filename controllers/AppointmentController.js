const { getTimeTable } = require("../models/TimeTableModel");
const { addAppointment } = require("../models/AppointmentModel");

const createAppointment = async (req, res) => {
  try {
    const UserID = req.body.UserID;
    const DoctorName = req.body.DoctorName;
    const Symptom = req.body.Symptom;
    const Date = req.body.Date;
    const Time = req.body.Time;
    await addAppointment(UserID, DoctorName, Symptom, Date, Time);
    res.status(200).send("created appointment !");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = { createAppointment, getTimeTable };
