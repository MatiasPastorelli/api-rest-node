const ArticleService = require("../services/ArticleService");
const validator = require("validator");

const ArticleController = {
  create: async (req, res) => {
    //Recoger parametros por post a guardar
    let parametros = req.body;
    //Validar datos
    try {
      let validarTitulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo,{min: 0, max: 50});
      let validarContenido = !validator.isEmpty(parametros.contenido);

      if (!validarTitulo || !validarContenido) {
        throw new Error("Error de validacion");
      }

      const article = await ArticleService.create(parametros);

      return res.status(200).json({
        message: "Article creado",
        data: article
      });

    } catch (error) {
      return res.status(400).json({
        status: "error"
      });
    }

    //Crear el objeto

    //Asignar valores a objeto en el modelo

    //Guardar el articulo en la base de datos

    //Devolver resultado
    return res.status(200).json({
      message: "Accion de guardar",
    });
  },
};

module.exports = ArticleController;
