const express = require("express");
const router = express.Router();
const {
  getAppointmentWithAccessToken,
} = require("../controllers/PostponeController");

router.get("/:accesstoken", async (req, res) => {
  const { accesstoken } = req.params;
  let result = await getAppointmentWithAccessToken(accesstoken);
  // console.log(result)
  res.send(result)
});

module.exports = router;
