const User = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const optimizeImage = require("../../helpers/optimizeImage");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");
const updAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { id } = req.user;

  const imgType = originalname.split(".").pop();

  const resultUpload = path.join(avatarDir, `${id}.${imgType}`);
  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", `${id}.${imgType}`);
  await User.findByIdAndUpdate(id, { avatarURL });

  await optimizeImage(resultUpload);

  res.status(201).json({ avatarURL });
};

module.exports = updAvatar;
