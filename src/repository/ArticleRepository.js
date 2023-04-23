const Article = require("../model/Article");

const ArticleRepository = {
  create: async (parametros) => {
    const article = new Article();
    article.titulo = parametros.titulo;
    article.contenido = parametros.contenido;
    article.save();

    return article;
  },
};

module.exports = ArticleRepository;
