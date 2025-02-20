const { requestError } = require("../../helpers");
const generateToken = require("../../helpers/generateToken");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw requestError(401, "Incorrect email or pasword");
  }
  if (user.verify === false) {
    throw requestError(401, "User not verified, please verify your account via email");
  }
  const pwCompare = await bcrypt.compare(password, user.password);

  if (!pwCompare) {
    throw requestError(401, "Incorrect x email or pasword");
  }

  const token = generateToken(user.id);
  await User.findByIdAndUpdate(user.id, { token });
  res.status(200).json({ token, user: { email: user.email, subscription: user.subscription } });
};

module.exports = userLogin;
