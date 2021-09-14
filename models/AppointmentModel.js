const db = require("../config/firebase-config");

///// crate /////
const addAppointment = async (Symptom, Date, DoctorName, Time) => {
  const appointmentRef = db.collection("Appointment").doc();

  await db.collection("Appointment").doc(appointmentRef.id).set({
    AppointmentID: appointmentRef.id,
    Symptom: Symptom,
    Date: Date,
    DoctorName: DoctorName,
    Time: Time,
  });
};

///// read /////

///// update /////

///// delete /////

module.exports = { addAppointment };
