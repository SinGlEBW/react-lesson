const express = require('express');
const { create, find } = require("@controllers/menu-controller");
const router = express.Router();

router.post("/catalog", find);

module.exports = router;