const { deleteAppointment } = require("../models/AppointmentModel");
const { CancelAppointment, client } = require("./../linepushmessage/pushmessage");
const { getUser } = require("../models/UserModel");

const pushMessage = async (userId, AppointmentID)=>{
    try {
        const arr = [];
        const user = await getUser(userId);
        const lineUserId = user.LineUserId;
        const appointmentRef = db.collection("Appointment").doc(AppointmentID);
        const doc = await appointmentRef.get();
        if (doc.exists) {
            arr.push(doc.data());
          }
          const result = arr[0];
          await appointmentRef.delete({
            Status: "ยกเลิกนัดสำเร็จ",
          });
          client.pushMessage(lineUserId,CancelAppointment(
            result.UserName,
            result.initial_Symptoms,
            result.Date,
            result.Time,
            result.DoctorName,
            result.Status
            )
            )
            .then(() => {
                console.log("done");
              })
              .catch((err) => {
                // error handling
                console.log("send message error: ", err);
              });
    }catch (error) {
        return false;
      }
};


module.exports = { deleteAppointment,getUser,pushMessage};