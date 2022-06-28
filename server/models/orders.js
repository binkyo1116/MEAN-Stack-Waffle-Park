var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Orders = new Schema({
  userId: {
    type: String,
    required: true
  },
  userCartId: {
    type: String,
    required: true
  },
  deliverAdd:{
    type: String
  },
  cartAmt:{
    type: Number
  },
  discount:{
    type: Number,
    default : 0
  },
  promoCode:{
    type: string
  },
  taxes : {
    type: Number,
    default: 0
  },
  billAmt: {
    type: Number
  },
  paymentMode:{
    type: String
  },
  isPaid:{
    type: Boolean,
    default: false
  },
  transactionId:{
    type: String
  },
  isDelivered:{
    type: Boolean,
    default: false
  }


});


module.exports = mongoose.model('Orders', Orders, 'Orders');
