const db = require("../config/firebase-config");

///// crate /////
const addAppointment = async (UserID, DoctorName, Symptom, Date, Time) => {
  const appointmentRef = db.collection("Appointment").doc();
  await db.collection("Appointment").doc(appointmentRef.id).set({
    AppointmentID: appointmentRef.id,
    UserID: UserID,
    DoctorName: DoctorName,
    Intitial_Symptoms: Symptom,
    Date: Date,
    Time: Time,
  });
};

// const addAppointment = async (Symptom, Date, DoctorName, Time, Patient) => {
//   const appointmentRef = db.collection("Appointment").doc();

//   await db.collection("Appointment").doc(appointmentRef.id).set({
//     AppointmentID: appointmentRef.id,
//     Symptom: Symptom,
//     Date: Date,
//     DoctorName: DoctorName,
//     Time: Time,
//     Patient: Patient,
//   });
// };

///// read /////

///// update /////

///// delete /////

module.exports = { addAppointment };
