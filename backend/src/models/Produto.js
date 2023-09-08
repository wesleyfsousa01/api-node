const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/sequelize.js'); // Certifique-se de que a configuração do banco de dados esteja correta

const Produto = sequelize.define('products', {
  code: {
    type: DataTypes.BIGINT,
    primaryKey: true, // Define a coluna 'code' como chave primária
  },
  name: {
    type: DataTypes.STRING(100), // Limite o tamanho da coluna 'name' para 100 caracteres
    allowNull: false, // Não permite valores nulos
  },
  cost_price: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
  },
  sales_price: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
  }
}, {
  tableName: 'products', // Certifique-se de que o nome da tabela corresponda ao do banco de dados
});

module.exports = Produto;