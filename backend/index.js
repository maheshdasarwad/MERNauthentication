const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');

//Middlewares
app.use(cors()) 
app.use(bodyParser.json());

//Test Route
app.get('/ping', (req,res) => {
    res.send('PONG');
})

//Routes
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})

