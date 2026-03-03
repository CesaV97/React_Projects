const express = require('express');
const router = express.Router();
const {
    getAllPlants
} = require('../controllers/plantsController')
router.get('/',getAllPlants);

module.exports = router;
