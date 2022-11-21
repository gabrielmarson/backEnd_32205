class ProductManager {

    constructor (products) {
        this.products = products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if((title, description, price, thumbnail, code, stock)) {
            const codeCheck = this.products.find((el) =>el.code == code)
            if(codeCheck){
                console.log("Codigo Existente!. Por favor ingrese un producto valido");
            }else{
            if (this.products.length > 0) {
                let idProducto = this.products[this.products.length - 1].id + 1;
                let nuevoProducto = {
                    id: idProducto,
                    title,
                    description,
                    price,
                    thumbnail,
                    stock,
                };
                this.products.push(nuevoProducto);
            } else {
                let nuevoProducto = {
                    id: 1,
                    title,
                    description,
                    price,
                    thumbnail,
                    stock,
                };
                this.products.push(nuevoProducto);
            }
        }
        } else {
            console.log("Agrega todos los detalles del producto");
        }
    };

    getProduct = () => {
        if (this.products.length > 0) {
            console.log(this.products);
        } else {
            console.log("No hay ningun producto cargado");
        }
    };
    getProductById = (id) => {
        if (this.products.length > 0) {
            let mostrarProducto = this.products.find((product) => product.id == id);
            mostrarProducto?console.log(mostrarProducto):console.log("Producto no encontrado ...");
        } else {
            console.log("No hay ningun producto disponible");
        }
    };
}

let productos = [];

const productosDisponibles = new ProductManager(productos);

productosDisponibles.addProduct(
    "Samsung S22 Ultra",
    "El equipo con mas potencia del mercado",
    300000,
    "https://firebasestorage.googleapis.com/v0/b/your-phone-de9d0.appspot.com/o/s22_ultra_300.png?alt=media&token=870ca4f5-5c3a-4e90-b54b-54eabf587ddd",
    101,
    3
  );
  productosDisponibles.addProduct(
    "Motorola Edge 20 Pro",
    "Lo mejor del marcado, su bateria dura hasta 72hs",
    180000,
    "https://firebasestorage.googleapis.com/v0/b/your-phone-de9d0.appspot.com/o/moto_edge20_pro_300.png?alt=media&token=631ca398-f869-44b8-838b-8217501e3adb",
    201,
    5
  );

  productosDisponibles.getProduct();

  productosDisponibles.getProductById(2)