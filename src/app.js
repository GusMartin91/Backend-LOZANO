import express from 'express';
import { ProductManager } from './productManager.js';

const app = express();
const port = 8080;

const prodManager = new ProductManager("./Productos.json");

app.get('/products', async (req, res) => {
    try {
        const products = prodManager.getProducts();
        const limit = req.query.limit;

        if (limit) {
            res.json(products.slice(0, limit));
        } else {
            res.json(products);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = prodManager.getProductByID(productId);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
