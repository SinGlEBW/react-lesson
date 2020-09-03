const express = require('express');
const { upload_Validate } = require("@services/receipt-files");
const { createUser, logIn, logOut } = require("@controllers/user-controller");
const router = express.Router();

router.post("/register", upload_Validate, createUser); //registerValid,
router.post("/login", upload_Validate, logIn); //loginValid
router.get("/logOut",  logOut);


module.exports = router;