const express = require("express");
const router = express.Router();
const usermodel = require("../model/user");
const passport = require("passport");
const express_validator = require("express-validator");
const {
  handleValidationErrors,
  data_validator,
} = require("../middleware/datavalid");
router.post(
  "/user",

  async function (req, res) {
    try {
      const { username, password } = req.body;
      if (await usermodel.findOne({ username })) {
        return res.status(400).send("Username already exists");
      }
      const newUser = new usermodel({
        username,
      });
      const userRegister = await usermodel.register(newUser, password);
      res.send("userRegister: " + userRegister);
    } catch (err) {
      console.log(err);
    }
  }
);

router.post(
  "/user/login",
  passport.authenticate("local", {
    failureFlash: false,
    failureRedirect: "/user/login",
  }),
  function (req, res) {
    res.send("user login success");
  }
);

// profile
router.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ message: "Welcome to your profile!", user: req.user });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = router;
