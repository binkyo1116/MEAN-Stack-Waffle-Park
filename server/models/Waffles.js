var mongoose = require('mongoose');

const Schema = mongoose.Schema;
let Waffles = new Schema({

  image: {
    type: String
  },
  title: {
    type: String
  },
  item: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
});


module.exports = mongoose.model('Waffles', Waffles, 'Waffles');
