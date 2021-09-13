const db = require("../config/firebase-config");

/////create/////
const addUser = async (
  FirstName,
  LastName,
  DateOfBirth,
  Sex,
  Address,
  Phone,
  Email,
  Password
) => {
  const UserRef = db.collection("User").doc();

  await db.collection("User").doc(UserRef.id).set({
    UserID: UserRef.id,
    FirstName: FirstName,
    LastName: LastName,
    DateOfBirth: DateOfBirth,
    Sex: Sex,
    Address: Address,
    Phone: Phone,
    Email: Email,
    Password: Password,
  });
};

/////read/////

/////update/////

/////delete/////


module.exports = {addUser} ;