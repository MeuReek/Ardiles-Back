const fs = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getAll() {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf8");
      const infoText = JSON.stringify(contenido, null, 2);
      const info = JSON.parse(infoText);
      return info;
    } catch (error) {
      return error;
    }
  }

  async getRandom() {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf8");
      const productos = JSON.parse(contenido);
      const indice = Math.floor(Math.random() * productos.length);
      const productoRandom = productos[indice];
      return productoRandom;
    } catch (error) {
      return error;
    }
  }
}

async function main() {
  const producto = new Contenedor("./productos.txt");
  await producto.getAll();
  await producto.getRandom();
}
main();

module.exports = Contenedor;
