const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models'); // import koneksi dari Sequelize

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (contoh)
// const userRoutes = require('./routes/userRoutes');
// app.use('/users', userRoutes);

// Test koneksi dan jalankan server
const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi database berhasil!');
    return sequelize.sync(); // otomatis sync semua model
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server jalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Gagal konek ke database:', err);
  });
