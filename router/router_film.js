const express = require("express");
const controllers = require("../module/film/controller/index");

// ROUTER
const router = express.Router();

// GET /film/daftar_film
router.get("/daftar_film", controllers.daftar_film);

router.post("/post_film", controllers.tambah_film);

router.post("/ubah_film", controllers.ubah_film);

router.post("/hapus_film", controllers.hapus_film);

module.exports = router;
