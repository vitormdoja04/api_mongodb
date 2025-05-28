const express = require('express');
const router = express.Router();
const alimentacaoController = require('../controllers/alimentacaoController');

router.post('/', alimentacaoController.criarAlimentacao);
router.get('/', alimentacaoController.listarAlimentacoes);
router.get('/:usuarioId', alimentacaoController.listarAlimentacoesPorUsuario);
router.put('/:id', alimentacaoController.atualizarAlimentacao);
router.delete('/:id', alimentacaoController.deletarAlimentacao);

module.exports = router;
