const express = require('express');
const router = express.Router();

// const { uploadImages } = require("@services/receipt-files");
// const { addImages, showImages, delImages} = require("@controllers/images-controller");


// router.get("/show-img", showImages);
// router.post("/add-img", uploadImages, addImages);
// router.delete("/del-img/:id?", delImages);

module.exports = router;

/*
  Время жизни токена наверно это означает то, что если даже удалить токен на клиенте и
  снова залогиниться, то наверно он будет снова выдан.
  Если токен имеет время жизни то его нужно обновлять
*/