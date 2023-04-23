const Article = require("../model/Article");

const ArticleRepository = {
  create: async (parametros) => {
    const article = new Article(parametros);
    article.save();

    return article;
  },
};

module.exports = ArticleRepository;
