const { addAppointment } = require("../models/AppointmentModel");

const createAppointment = async (req, res) => {
  try {
    const Symptom = req.body.Symptom;
    const Date = req.body.Date;
    const DoctorName = req.body.DoctorName;
    const Time = req.body.Time;

    await addAppointment(Symptom, Date, DoctorName, Time);
    res.status(200).send("created appointment !");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = { createAppointment };
