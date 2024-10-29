const passport = require("passport");
const authUser = (req, res, next) => {
  if (!req.isauthenticated()) {
    res.regirect("/login");
    console.log("authication failed");
  }
  next();
};
