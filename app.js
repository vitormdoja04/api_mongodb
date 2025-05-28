const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usuarioRoutes = require('./routes/usuarioRoutes');
const treinoRoutes = require('./routes/treinoRoutes');
const alimentacaoRoutes = require('./routes/alimentacaoRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/treinos', treinoRoutes);
app.use('/api/alimentacoes', alimentacaoRoutes);
app.use('/api/dashboard', dashboardRoutes);

module.exports = app;