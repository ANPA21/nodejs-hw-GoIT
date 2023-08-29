const { requestError, sendVerification } = require("../../helpers");
const User = require("../../models/user");

const resendVerification = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw requestError(404, "Did not find user with this email");
  }
  if (user.verify === true) {
    throw requestError(400, "User already verified");
  }
  await sendVerification(user.verificationToken, email);
  res.status(200).json(`New email sent to ${email}`);
};

module.exports = resendVerification;
