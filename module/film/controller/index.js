const Model_r = require("../models/model_r");
const Model_cud = require("../models/model_cud");

// GET semua film
const daftar_film = async (req, res) => {
  try {
    const model = new Model_r();
    const data = await model.getFilm();
    res.status(200).json({
      success: true,
      message: "Daftar film berhasil diambil",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// POST tambah film
const tambah_film = async (req, res) => {
  try {
    const model = new Model_cud(req);
    const data = await model.createFilm();
    res.status(201).json({
      success: true,
      message: "Film berhasil ditambahkan",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// PUT update film
const ubah_film = async (req, res) => {
  try {
    const model = new Model_cud(req);
    const data = await model.updateFilm();
    res.status(200).json({
      success: true,
      message: "Film berhasil diubah",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE film
const hapus_film = async (req, res) => {
  try {
    const model = new Model_cud(req);
    const data = await model.deleteFilm();
    res.status(200).json({
      success: true,
      message: "Film berhasil dihapus",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  daftar_film,
  tambah_film,
  ubah_film,
  hapus_film
};
