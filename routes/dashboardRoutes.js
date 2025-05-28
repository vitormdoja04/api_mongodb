const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Rota para o resumo diário (treinos + alimentações)
router.get('/diario/:usuarioId', dashboardController.getResumoDiario);

// Rota para todos os dados do usuário (treinos + alimentações)
router.get('/usuario/:usuarioId', dashboardController.getResumoDoUsuario);

module.exports = router;