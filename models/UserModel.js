const db = require("../config/firebase-config");
const jwt = require('jsonwebtoken');

/////create/////
const addUser = async (
  FirstName,
  LastName,
  DateOfBirth,
  Sex,
  Address,
  Phone,
  Email,
  idToken,
) => {
  const UserRef = db.collection("User").doc();
  const decoded = jwt.decode(idToken);
  const LineId = decoded.sub;
  await db.collection("User").doc(UserRef.id).set({
    UserID: UserRef.id,
    FirstName: FirstName,
    LastName: LastName,
    DateOfBirth: DateOfBirth,
    Sex: Sex,
    Address: Address,
    Phone: Phone,
    Email: Email,
    LineUserId: LineId
  });
};

/////read/////

/////update/////

/////delete/////


module.exports = {addUser} ;