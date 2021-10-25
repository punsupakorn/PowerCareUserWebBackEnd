const db = require("../config/firebase-config");
const axios = require("axios")

/////create/////
const addUser = async (
  FirstName,
  LastName,
  DateOfBirth,
  Sex,
  Address,
  Phone,
  Email,
  accessToken,
) => {
  const UserRef = db.collection("User").doc();
  const profile = await axios.get(
    `https://api.line.me/v2/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` }
 });
  await db.collection("User").doc(UserRef.id).set({
    UserID: UserRef.id,
    FirstName: FirstName,
    LastName: LastName,
    DateOfBirth: DateOfBirth,
    Sex: Sex,
    Address: Address,
    Phone: Phone,
    Email: Email,
    LineUserId: profile.UserId
  });
};

/////read/////

/////update/////

/////delete/////


module.exports = {addUser} ;