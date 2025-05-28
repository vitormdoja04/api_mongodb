const mongoose = require('mongoose');

const alimentacaoSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    refeicao: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Alimentacao', alimentacaoSchema);

