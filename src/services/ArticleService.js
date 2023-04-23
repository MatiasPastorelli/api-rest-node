const ArticleRepository = require("../repository/ArticleRepository");

const ArticleService = {
  /*
   * Crear artiuclo
   */
  create: async (parametros) => ArticleRepository.create(parametros),
  /*
   * Listar articulos
   */
  findAll: async () => ArticleRepository.findAll(),
};

module.exports = ArticleService;
