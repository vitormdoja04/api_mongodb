const Treino = require('../models/Treino');

exports.criarTreino = async (req, res) => {
    try {
        const { usuarioId, nome, exercicios } = req.body;

        const treino = await Treino.create({
            usuarioId,
            nome,
            exercicios,
            data: new Date() // Define automaticamente a data atual
        });

        res.status(201).json(treino);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.listarTreinos = async (req, res) => {
    try {
        const treinos = await Treino.find({ usuarioId: req.params.usuarioId });
        res.json(treinos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.atualizarTreino = async (req, res) => {
    try {
        const treino = await Treino.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(treino);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.deletarTreino = async (req, res) => {
    try {
        await Treino.findByIdAndDelete(req.params.id);
        res.json({ mensagem: 'Treino deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};
