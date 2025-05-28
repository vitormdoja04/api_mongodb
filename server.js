const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB conectado com sucesso');
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    })
    .catch(err => console.error('Erro ao conectar com MongoDB:', err));