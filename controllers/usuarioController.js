const Usuario = require('../models/Usuario');

exports.criarUsuario = async (req, res) => {
    try {
        const novoUsuario = await Usuario.create(req.body);
        res.status(201).json(novoUsuario);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.atualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(usuario);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.excluirUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ mensagem: 'Usuário removido com sucesso' });
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};
