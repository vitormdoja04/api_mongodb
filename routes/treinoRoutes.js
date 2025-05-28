const express = require('express');
const router = express.Router();
const controller = require('../controllers/treinoController');

router.post('/', controller.criarTreino);
router.get('/:usuarioId', controller.listarTreinos);
router.put('/:id', controller.atualizarTreino);
router.delete('/:id', controller.deletarTreino);

module.exports = router;
