const express = require("express");
const router = express.Router();
const {
  getAllAppointment,
  getDateChange,
} = require("../controllers/SelectPostponeController");

router.get("/date/:doctorid", async (req, res) => {
  const { doctorid } = req.params;
  let result = await getDateChange(doctorid);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
