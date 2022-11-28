const use = require("./script.js");

// IMPORTANTE! Posicionarse en la carpeta "CD desafio_2_manejo_archivos"

//TODO --> await use.products PARA PODER ACCEDER AL MODULO DE LOGICA Y ASÍ PODER ACCEDER A SUS MÉTODOS

//! Importante escribir dentro de la función llamar métodos

let llamarMetodos = async () => {
  //* Agregar productos --> use.products.addProduct(titulo,descripción,precio,imagen,stock)

   await use.products.addProduct(
     "Samsung S22 Ultra",
     "El equipo con mas potencia del mercado",
     300000,
     "https://firebasestorage.googleapis.com/v0/b/your-phone-de9d0.appspot.com/o/s22_ultra_300.png?alt=media&token=870ca4f5-5c3a-4e90-b54b-54eabf587ddd",
     101,
     3
   );
    await use.products.addProduct(
     "Motorola Edge 20 Pro",
     "Lo mejor del marcado, su bateria dura hasta 72hs",
     180000,
     "https://firebasestorage.googleapis.com/v0/b/your-phone-de9d0.appspot.com/o/moto_edge20_pro_300.png?alt=media&token=631ca398-f869-44b8-838b-8217501e3adb",
     201,
     5
   );
  // //* Ver todos los productos -->  use.products.getProduct()
   await use.products.getProduct();
  // //* Buscar producto por id --> use.products.getProductById(id)
     await use.products.getProductById(2);

  //* Actualizar producto --> use.products.updateProduct(id del producto,{propiedades a cambiar: "nuevo valor de la propiedad"}), En caso de agregar más de una utilizar coma y dentro del mismo corchete
   await use.products.uptadeProduct(2), {
     title: "Samsung S22 Plus",
     description: "Lo mejor en tecnologia y eficiencia",
   };

  //* Eliminar un producto --> use.products.deleteProduct(id del producto)
   await use.products.deleteProduct()
};

llamarMetodos(use.products.addProduct());

