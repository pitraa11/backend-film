const express = require("express");
const controllers = require("../module/film/controller/index");

// ROUTER
const router = express.Router();

// GET /film/daftar_film
router.get("/daftar_film", controllers.daftar_film);

module.exports = router;
