const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, BASE_URL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendVerification = (verificationToken, email) => {
  const msg = {
    to: `${email}`,
    from: "papsujevicandrew@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    html: `<a href= "${BASE_URL}/${verificationToken}"> This is a verification link, please click to verify</a>`,
  };

  sgMail
    .send(msg)
    .then(() => console.log(`Sent an email to ${email} `))
    .catch((err) => console.log(err.message));
};

module.exports = sendVerification;
