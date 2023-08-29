const Joi = require("joi");

const resendVerificationSchema = Joi.object({
  email: Joi.string().messages({ "any.required": "Please enter email" }).required(),
});
module.exports = resendVerificationSchema;
