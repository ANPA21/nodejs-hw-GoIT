const contacts = require("../models/contacts");
const { requestError } = require("../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw requestError(404);
  }
  res.status(200).json({ message: `Contact  updated` });
};

module.exports = updateContact;
