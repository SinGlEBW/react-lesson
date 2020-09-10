const express = require('express');
const { upload_Validate } = require("@services/receipt-files");
const { register, logIn, logOut, refresh } = require("@controllers/user-controller");
const router = express.Router();

router.post("/register", upload_Validate, register); //registerValid,
router.post("/login", upload_Validate, logIn); //loginValid
router.get("/logOut", logOut);
router.post("/refresh", refresh);


module.exports = router;