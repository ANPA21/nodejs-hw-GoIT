const ctrlWrapper = require("./ctrlWrapper");
const generateToken = require("./generateToken");
const optimizeImage = require("./optimizeImage");
const requestError = require("./requestError");
const sendVerification = require("./sendVerification");

module.exports = {
  ctrlWrapper,
  requestError,
  sendVerification,
  optimizeImage,
  generateToken,
};
