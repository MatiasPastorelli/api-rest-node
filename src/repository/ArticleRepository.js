const Article = require("../model/Article");

const ArticleRepository = {
  create: async (parametros) => {
    const article = new Article(parametros);
    article.save();

    return article;
  },
  findAll: async () => {
    const article = Article.find().exec();

    return article;
  },
};

module.exports = ArticleRepository;
