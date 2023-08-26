const express = require("express");
const ctrl = require("../../controllers/users");
const schemas = require("../../schemas");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const router = express.Router();
const validateBody = require("../../middleware/validateBody");
const authentication = require("../../middleware/authenticate");
const upload = require("../../middleware/upload");

router.post("/register", validateBody(schemas.userRegisterSchema), ctrlWrapper(ctrl.userRegister));
router.post("/login", validateBody(schemas.userLoginSchema), ctrlWrapper(ctrl.userLogin));
router.post("/logout", authentication, ctrlWrapper(ctrl.userLogout));
router.get("/current", authentication, ctrlWrapper(ctrl.getCurrent));
router.patch("/", authentication, validateBody(schemas.userSubscriptionSchema), ctrlWrapper(ctrl.userSubscription));
router.patch("/avatars", authentication, upload.single("avatar"), ctrlWrapper(ctrl.updAvatar));
module.exports = router;
