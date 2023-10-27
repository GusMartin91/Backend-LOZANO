class ProductManager {
    constructor() {
        this.products = []
    }

    getProducts() {
        return this.products;
    }

    isCodeDuplicate(code) {
        return this.products.some(product => product.code === code);
    }

    getProductByID(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("¡Producto no encontrado!");
        }
    }

    addProduct(product) {
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        for (const field of requiredFields) {
            if (!product[field]) {
                return console.log(`Falta completar el campo "${field}" del producto`);
            }
        }

        if (this.isCodeDuplicate(product.code)) {
            return console.log("¡El código del producto ya existe!");
        }

        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }
}

class Product {
    constructor(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ) {
        this.id = "";
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


const prodManager = new ProductManager()
console.log("-----------------------------------------")
console.log(prodManager.getProducts())
console.log("-----------------------------------------")
prodManager.addProduct(new Product("Manzana", "Manzana roja seleccionada", 600, "https://elegifruta.com.ar/wp-content/uploads/2017/07/manzana_roja.jpg", "MR006", 67))
console.log("-----------------------------------------")
console.log(prodManager.getProducts())
console.log("-----------------------------------------")
console.log(prodManager.getProductByID(2));