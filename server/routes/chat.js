const express = require('express');
const router = express.Router();

const { showMessage, addMessage, delMessage } = require("@controllers/chat-controller");


// router.get("/chat/show-message", showMessage);
// router.post("/chat/add-message", addMessage);
// router.delete("/chat/del-message/:id?", delMessage);

module.exports = router;