const Article = require("../model/Article");

const ArticleRepository = {
  create: async (parametros) => {
    const article = new Article(parametros);
    article.save();

    return article;
  },
  findAll: async () => {
    return Article.find().sort({ fecha: -1 }).exec(); // con sort ordena como uno quiera
  },
  findById: async (id) => {
    console.log(id);
    return await Article.findById({ _id: id }).exec();
  },
};

module.exports = ArticleRepository;
