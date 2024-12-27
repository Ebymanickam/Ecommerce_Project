const ProductModel = require('../models/productModel');





//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
 //query - to find the specific product data in API
  const query = req.query.keyword?{ name : {
 //operator       
      $regex : req.query.keyword,
      $options: 'i'
    }}:{}
                                           // to find the specific product in API
    const products = await ProductModel.find({query});  //storing ProductModel data's indside the product

    res.json({
        success: true,
        products
    })
}

//Get Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
}