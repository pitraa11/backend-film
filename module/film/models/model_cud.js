const { Film, sequelize } = require("../../../models");

class Model_cud {
  constructor(req) {
    this.req = req;
  }

  // CREATE
  async createFilm() {
    const t = await sequelize.transaction();
    try {
      const { title, photo, genre, releaseYear } = this.req.body;

      const newFilm = await Film.create(
        { title, photo, genre, releaseYear },
        { transaction: t }
      );

      await t.commit();
      return newFilm;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  // UPDATE
  async updateFilm() {
    const t = await sequelize.transaction();
    try {
      const { id, title, photo, genre, releaseYear } = this.req.body;

      const film = await Film.findByPk(id, { transaction: t });
      if (!film) throw new Error("Film tidak ditemukan");

      await film.update(
        { title, photo, genre, releaseYear },
        { transaction: t }
      );

      await t.commit();
      return film;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  // DELETE
  async deleteFilm() {
    const t = await sequelize.transaction();
    try {
      const { id } = this.req.body;

      const film = await Film.findByPk(id, { transaction: t });
      if (!film) throw new Error("Film tidak ditemukan");

      await film.destroy({ transaction: t });

      await t.commit();
      return { message: "Film berhasil dihapus" };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
}

module.exports = Model_cud;
