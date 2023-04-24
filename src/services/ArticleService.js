const ArticleRepository = require("../repository/ArticleRepository");

const ArticleService = {
  create: async (parametros) => await ArticleRepository.create(parametros),

  findAll: async () => await ArticleRepository.findAll(),

  findById: async (id) => await ArticleRepository.findById(id),
};

module.exports = ArticleService;
