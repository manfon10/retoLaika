const express = require('express');

const router = express.Router();

// Controllers

const { getProducts } = require('../controller/productController');

// Routes

router.get('/products', getProducts);

module.exports = { productRoutes: router };
