const { Produto } = require('../models/Produto'); // Importe o modelo Produto

class ProdutoRepository {
  async findAll() {
    try {
      console.log('Entrou no método findAll'); // Adicione esta linha
      const produtos = await Produto.findAll();
      return produtos;
    } catch (error) {
      console.error('Erro ao buscar produtos no repositório:', error);
      throw new Error('Erro ao buscar produtos no repositório', error);
    }
  }

  async findById(id) {
    try {
      const produto = await Produto.findByPk(id);
      return produto;
    } catch (error) {
      throw new Error('Erro ao buscar produto por ID no repositório', error);
    }
  }

  async create(produtoData) {
    try {
      const produto = await Produto.create(produtoData);
      return produto;
    } catch (error) {
      throw new Error('Erro ao criar produto no repositório', error);
    }
  }

  async update(id, produtoData) {
    try {
      const [updatedRows] = await Produto.update(produtoData, { where: { id } });
      if (updatedRows > 0) {
        const produto = await this.findById(id);
        return produto;
      } else {
        throw new Error('Produto não encontrado no repositório');
      }
    } catch (error) {
      throw new Error('Erro ao atualizar produto no repositório', error);
    }
  }

  async delete(id) {
    try {
      const deletedRows = await Produto.destroy({ where: { id } });
      if (deletedRows > 0) {
        return true;
      } else {
        throw new Error('Produto não encontrado no repositório');
      }
    } catch (error) {
      throw new Error('Erro ao excluir produto no repositório', error);
    }
  }
}

module.exports = new ProdutoRepository();
