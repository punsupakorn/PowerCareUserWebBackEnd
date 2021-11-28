const { addUser, checkUser } = require("../models/UserModel");

const createUser = async (
  FirstName,
  LastName,
  DateOfBirth,
  Sex,
  Address,
  Phone,
  Email,
  accessToken
) => {
  try {
    await addUser(
      FirstName,
      LastName,
      DateOfBirth,
      Sex,
      Address,
      Phone,
      Email,
      accessToken
    );
    res.status(200).send("add user success!");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = { createUser, checkUser };
