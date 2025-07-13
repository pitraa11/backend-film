const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { sequelize } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Auto-load semua file routes/router_*.js
const routesPath = path.join(__dirname, "router");

if (fs.existsSync(routesPath)) {
  fs.readdirSync(routesPath).forEach((file) => {
    if (file.startsWith("router_") && file.endsWith(".js")) {
      const route = require(path.join(routesPath, file));
      const routeName = "/" + file.replace("router_", "").replace(".js", "");
      app.use(routeName, route);
      console.log(`Route aktif: [${routeName}] dari file: ${file}`);
    }
  });
}

const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Koneksi database berhasil!");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server jalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Gagal konek ke database:", err);
  });
