const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//Routes

const { productRoutes } = require('./routes/productRoutes');

// Endpoints

app.use('/api/v1', productRoutes);

// App Running

const PORT = process.env.PORT || 3000;

app.listen( PORT );

module.exports = { app };