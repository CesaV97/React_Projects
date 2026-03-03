const express = require('express');
const cors = require('cors');
const plantsRoutes = require('./routes/plants');

const app = express();

app.use(cors());
app.use(express.json()); // para leer JSON en el body de las peticiones

// Rutas
app.use('/api/plants', plantsRoutes);

module.exports = app;