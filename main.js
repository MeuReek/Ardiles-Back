const fs = require("fs");


class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getAll() {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf8");
      const infoText = JSON.stringify(contenido, null, 2)
      const info = JSON.parse(infoText)
      console.log(`Contenido del Archivo leído:
      ${info}`); 
    } catch (error) {
      console.log(`No se pudo leero correctamente el Archivo. 
      ${error}`);
    }
  }


  async getRandom() {
    try {
      const contenido = await fs.promises.readFile("./productos.txt", "utf8");
      setTimeout(() => {
      const indice = Math.floor(Math.random() * contenido.length);
      //const producto = contenido[indice];
      console.log(`Producto encontrado de forma aleatoria: ${indice}`);
    }, 3000);
    } catch (error) {
      console.log(`No se pudo leer correctamente el Archivo. ${error}`);
    }
  }

 

}


 async function main() {
   const producto = new Contenedor("./productos.txt");
   await producto.getAll();
   await producto.getRandom();
}
main()  

module.exports = Contenedor;