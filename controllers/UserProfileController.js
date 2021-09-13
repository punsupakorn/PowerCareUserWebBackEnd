const { addUser } = require("../models/UserModel");

const createUser = async (req, res) => {
  try {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const DateOfBirth = req.body.DateOfBirth;
    const Sex = req.body.Sex;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const Email = req.body.Email;
    const Password = req.body.Password;

    await addUser(
      FirstName,
      LastName,
      DateOfBirth,
      Sex,
      Address,
      Phone,
      Email,
      Password
    );
    res.status(200).send("add user success!");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports = { createUser };
