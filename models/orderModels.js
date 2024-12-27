const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,      // every mongoose,Schema items 
                        // are stored in the orderSchema
    status: String,
    createdAt: Date
})

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;