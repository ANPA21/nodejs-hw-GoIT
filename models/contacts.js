const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const updateContactsList = async (contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}
async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((cont) => cont.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((cont) => cont.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  const removedContact = contacts.splice(contactIndex, 1);
  await updateContactsList(contacts);
  return removedContact;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContactsList(contacts);
  return newContact;
}

async function updateContact(contactId, body) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex((cont) => cont.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  contacts[contactIndex] = { id: contactId, ...body };
  await updateContactsList(contacts);
  return contacts[contactIndex];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
