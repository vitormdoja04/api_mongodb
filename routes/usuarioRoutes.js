const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');

router.post('/', controller.criarUsuario);
router.get('/', controller.listarUsuarios);
router.put('/:id', controller.atualizarUsuario);
router.delete('/:id', controller.excluirUsuario);

module.exports = router;
