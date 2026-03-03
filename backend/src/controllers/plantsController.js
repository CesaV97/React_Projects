const pool = require('../config/db');

// GET /api/plants — obtener todas las plantas
const getAllPlants = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM core.plant ORDER BY name');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener plantas:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {getAllPlants}