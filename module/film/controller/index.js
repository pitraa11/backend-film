const Model_r = require("../models/model_r");

const daftar_film = async (req, res) => {
  try {
    const model = new Model_r();
    const data = await model.getFilm();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { daftar_film };
