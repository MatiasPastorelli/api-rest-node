const ArticleService = require("../services/ArticleService");
const validator = require("validator");

const ArticleController = {
  create: async (req, res) => {
    //Recoger parametros por post a guardar
    let parametros = req.body;
    //Validar datos
    try {
      let validarTitulo =
        !validator.isEmpty(parametros.titulo) &&
        validator.isLength(parametros.titulo, { min: 0, max: 50 });
      let validarContenido = !validator.isEmpty(parametros.contenido);

      if (!validarTitulo || !validarContenido) {
        throw new Error("Error de validacion");
      }

      const article = await ArticleService.create(parametros);

      if (validator.isLength(article) == 0) {
        return res.status(400).json({
          status: "error",
          message: "No se a guardado el articulo correctamente",
        });
      }

      return res.status(200).json({
        status: "succes",
        message: "Article creado",
        data: article,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
  findAll: async (req, res) => {
    try {
      const articles = await ArticleService.findAll();

      if (!articles) {
        return res.status(400).json({
          status: "error",
          message: "No se a guardado el articulo correctamente",
        });
      }

      return res.status(200).json({
        status: "succes",
        message: "Lista de articulos",
        data: articles,
      });
    } catch (error) {
      return res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

module.exports = ArticleController;
