const express = require('express');
const router = express.Router();
const { getEquipo } = require('../controllers/equipoController');

router.get('/', getEquipo);

module.exports = router;