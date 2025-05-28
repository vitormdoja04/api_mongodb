const Alimentacao = require('../models/Alimentacao');

// POST - Criar nova alimentação
exports.criarAlimentacao = async (req, res) => {
    try {
        const novaAlimentacao = new Alimentacao(req.body);
        const alimentacaoSalva = await novaAlimentacao.save();
        res.status(201).json(alimentacaoSalva);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao cadastrar alimentação' });
    }
};

// GET - Todas as alimentações
exports.listarAlimentacoes = async (req, res) => {
    try {
        const alimentacoes = await Alimentacao.find();
        res.status(200).json(alimentacoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar alimentações' });
    }
};

// GET - Alimentações de um usuário
exports.listarAlimentacoesPorUsuario = async (req, res) => {
    const { usuarioId } = req.params;
    try {
        const alimentacoes = await Alimentacao.find({ usuarioId });
        res.status(200).json(alimentacoes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar alimentações do usuário' });
    }
};

// PUT - Atualizar alimentação por ID
exports.atualizarAlimentacao = async (req, res) => {
    const { id } = req.params;
    try {
        const alimentacaoAtualizada = await Alimentacao.findByIdAndUpdate(id, req.body, { new: true });
        if (!alimentacaoAtualizada) return res.status(404).json({ error: 'Alimentação não encontrada' });
        res.status(200).json(alimentacaoAtualizada);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar alimentação' });
    }
};

// DELETE - Deletar alimentação por ID
exports.deletarAlimentacao = async (req, res) => {
    const { id } = req.params;
    try {
        const alimentacaoRemovida = await Alimentacao.findByIdAndDelete(id);
        if (!alimentacaoRemovida) return res.status(404).json({ error: 'Alimentação não encontrada' });
        res.status(200).json({ mensagem: 'Alimentação removida com sucesso' });
    } catch (error) {
        res.status(400).json({ error: 'Erro ao deletar alimentação' });
    }
};
