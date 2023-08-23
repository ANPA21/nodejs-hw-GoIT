const Jimp = require("jimp");

const optimizeImage = (imgPath) => {
  Jimp.read(`${imgPath}`)
    .then((img) => {
      return img.resize(250, 250).quality(60).write(imgPath);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = optimizeImage;
