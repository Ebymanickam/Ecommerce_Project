const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

// Create order - /api/v1/order
exports.createOrder = async (req, res, next) => {
    const cartItems = req.body; // data's from API
    //acclamator(acc) - before go to the next step, it declares the previous value     //After the decimal value 2 number is fixed - 1444.67(7888)
    const amount = Number(cartItems.reduce((acc, item)=> (acc + item.product.price * item.qty), 0)).toFixed(2); // reduce- to subtract 
    // console.log(amount, 'AMOUNT')                      // qty oda priceaa multiply panni kudukum, athuthan AMOUNT
    // console.log(req.body, 'DATA');
    const status = 'pending';

                         // intha orderModel data is returning the data
    const order = await orderModel.create({cartItems, amount, status})


            // Updating product stock
            cartItems.forEach(async(item) =>{
                const product = await productModel.findById(item.product._id);
                product.stock = product.stock - item.qty;
                //   await - database operation panrathala await usepanroam 
                await product.save();
            })


        res.json({
            success: true,
            order
        })

}