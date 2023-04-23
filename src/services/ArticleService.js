const ArticleRepository = require("../repository/ArticleRepository");

const ArticleService = {
  create: async () => ArticleRepository.create(),
};

module.exports = ArticleService;
