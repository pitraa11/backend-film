const { Film } = require("../../../models");

class Model_r {
  async getFilm() {
    const sql = await Film.findAll();
    const data = sql.map((item) => item.dataValues);
    return data;
  }
}

module.exports = Model_r;
