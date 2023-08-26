const { nanoid } = require("nanoid");
const { requestError } = require("../../helpers");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { sendVerification } = require("../../helpers");

const userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw requestError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  await sendVerification(verificationToken, email);

  const result = await User.create({ email, password: hashPassword, name, avatarURL, verificationToken });
  res.status(201).json({ name: result.name, email: result.email });
};

module.exports = userRegister;
