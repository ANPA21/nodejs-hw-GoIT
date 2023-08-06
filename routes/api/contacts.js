const express = require("express");
const ctrl = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();
const validateBody = require("../../middleware/validateBody");
const schemas = require("../../schemas/contactsSchema");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put("/:contactId", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContact));

module.exports = router;
