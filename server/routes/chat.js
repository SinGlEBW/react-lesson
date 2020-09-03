const express = require('express');
const { showMessage, addMessage, delMessage } = require("@controllers/chat-controller");
const router = express.Router();

router.get("/chat/show-message", showMessage);
router.post("/chat/add-message", addMessage);
router.delete("/chat/del-message/:id?", delMessage);

module.exports = router;