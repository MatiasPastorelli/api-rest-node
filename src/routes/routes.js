const express = require("express");
const router = express.Router();

const ArticleController = require("../controller/ArticleController");

//rutas de article
router.post("/create", ArticleController.create);
router.get("/findAll", ArticleController.findAll);

module.exports = router;
