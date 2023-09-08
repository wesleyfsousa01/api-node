const produtoRepository = require('../repository/produtoRepository.js');

const ProdutoController = {
  async findAll(req, res) {
    try {
      const produtos = await produtoRepository.findAll();
      return res.json(produtos);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, preco } = req.body;
    try {
      const [updatedRows] = await produtoRepository.update({ nome, preco }, { where: { id } });
      if (updatedRows > 0) {
        const produto = await produtoRepository.findById(id);
        return res.json(produto);
      } else {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }

};

module.exports = ProdutoController;
