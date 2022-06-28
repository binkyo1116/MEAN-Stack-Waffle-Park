var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserCart = new Schema({
  userId: {
    type: String
  },
  totalQty: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  data:[{
    itemId : String,
    itemQty : Number
  }]

});


module.exports = mongoose.model('UserCart', UserCart, 'UserCart');
