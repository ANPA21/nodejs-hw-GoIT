const { requestError } = require("../../helpers");
const User = require("../../models/user");

const verifyUser = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw requestError(404, "Verification Failed, no user found or already verified");
  }

  await User.findOneAndUpdate({ verificationToken }, { verificationToken: "", verify: true });

  res.status(200).json("Successful Verification");
};

module.exports = verifyUser;
