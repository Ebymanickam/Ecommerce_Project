const express = require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();  //router is module ...we use the router module to create seperate files 

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProduct);

module.exports = router;