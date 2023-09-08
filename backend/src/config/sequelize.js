const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,          // Endereço do servidor MySQL
  dialect: 'mysql',      // Dialet do banco de dados
  logging: true,         // Desativa os logs do Sequelize (opcional)
});

module.exports = sequelize;


  

