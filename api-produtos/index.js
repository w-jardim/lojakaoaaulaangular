const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const carros = require('./data/carros');

app.use(cors());
app.use(express.json());

// Rota para listar os carros
app.get('/carros', (req, res) => {
  res.json(carros);
});

app.listen(PORT, () => {
  console.log(`🚗 API da Loja Kaoa rodando em http://localhost:${PORT}`);
});
