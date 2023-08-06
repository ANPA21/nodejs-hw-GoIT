const contacts = require("../models/contacts");
const { requestError } = require("../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw requestError(404);
  }
  res.status(200).json({ message: `Contact ${result[0].name} deleted` });
};

module.exports = removeContact;
