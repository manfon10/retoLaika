const express = require('express');
const cors = require('cors');
const process = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

//Routes

const { productRoutes } = require('./routes/productRoutes');

// Endpoints

app.use('/api/v1', productRoutes);

// App Running

const { SERVER_PORT } = process.parsed;

const PORT = SERVER_PORT || 5000;

app.listen( PORT);

module.exports = { app };