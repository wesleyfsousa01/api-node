
require('dotenv').config({ path: 'variaveis.env' });
const express = require('express');
const bodyParser = require('body-parser');
const produtosRouter = require('./routes/produtos');
const sequelize = require('./config/sequelize');

// Função para iniciar o servidor
async function startServer() {
  const app = express();
  app.use(bodyParser.json());

  // Configure as rotas da sua API
  app.use('/api', produtosRouter);

  // Defina uma porta para o servidor
  const PORT = process.env.PORT || 3000;

  try {
    // Verifique a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincronize os modelos com o banco de dados (executa migrações, se necessário)
    await sequelize.sync();

    // Inicie o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Chame a função para iniciar o servidor
startServer();