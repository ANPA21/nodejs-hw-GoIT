const userLogin = require("./userLogin");
const userRegister = require("./userRegister");
const userLogout = require("./userLogout");
const getCurrent = require("./getCurrent");
const userSubscription = require("./userSubscription");
const updAvatar = require("./updAvatar");
const resendVerification = require("./resendVerification");

module.exports = {
  userRegister,
  userLogin,
  userLogout,
  getCurrent,
  userSubscription,
  updAvatar,
  resendVerification,
};
