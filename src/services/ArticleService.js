const ArticleRepository = require("../repository/ArticleRepository");

const ArticleService = {
  create: async (parametros) => ArticleRepository.create(parametros),
};

module.exports = ArticleService;
