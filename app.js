const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors'); // middleware
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})


const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json()) //request endra datava eduthu body kulla set panni vitrum
app.use(cors());// set the (Access-control-Allow-Origin--> console.log/Network/headers) header in response
app.use('/api/v1/', products);
app.use('/api/v1', orders);



app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});

