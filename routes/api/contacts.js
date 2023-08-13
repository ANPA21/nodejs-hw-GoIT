const express = require("express");
const ctrl = require("../../controllers");
const schemas = require("../../schemas");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const router = express.Router();
const validateBody = require("../../middleware/validateBody");

router.get("/", ctrlWrapper(ctrl.getAllContacts));
router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContactById));

router.put("/:contactId", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateContactById));

router.patch("/:contactId", validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavoriteById));

module.exports = router;
