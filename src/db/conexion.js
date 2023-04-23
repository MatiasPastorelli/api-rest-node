const mongose = require("mongoose");

const conexion = async () => {
  try {
    await mongose.connect("mongodb://127.0.0.1:27017/mi_blog");
    console.log("Conectado correctamente a la bd mi_blog!");
  } catch (err) {
    console.log(error);
    throw new Error("No se ha podido conectar a la base de datos");
  }
};

module.exports = conexion;
