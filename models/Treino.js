const mongoose = require('mongoose');

const treinoSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    nome: String,
    exercicios: [String],
    data: {
        type: Date,
        default: Date.now // Garante que será usada a data atual do servidor
    }
});

module.exports = mongoose.model('Treino', treinoSchema);
