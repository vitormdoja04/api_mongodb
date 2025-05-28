// src/controllers/dashboardController.js
const Treino = require('../models/Treino');
const Alimentacao = require('../models/Alimentacao');

exports.getResumoDoUsuario = async (req, res) => {
    const { usuarioId } = req.params;

    try {
        const treinos = await Treino.find({ usuarioId }).select('-usuarioId');
        const alimentacoes = await Alimentacao.find({ usuarioId }).select('-usuarioId');

        res.status(200).json({
            usuarioId,
            treinos,
            alimentacoes
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do usuário' });
    }
};

exports.getResumoDiario = async (req, res) => {
    const { usuarioId } = req.params;

    // Define o início e o fim do dia atual
    const hoje = new Date();
    const inicioDoDia = new Date(hoje.setHours(0, 0, 0, 0));
    const fimDoDia = new Date(hoje.setHours(23, 59, 59, 999));

    try {
        const treinos = await Treino.find({
            usuarioId,
            data: { $gte: inicioDoDia, $lte: fimDoDia }
        }).select('-usuarioId');

        const alimentacoes = await Alimentacao.find({
            usuarioId,
            data: { $gte: inicioDoDia, $lte: fimDoDia }
        }).select('-usuarioId');

        res.status(200).json({
            data: new Date().toISOString(),
            treinosDoDia: treinos,
            alimentacoesDoDia: alimentacoes
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do dia' });
    }
};
