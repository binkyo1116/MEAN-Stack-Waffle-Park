var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  contact: {
    type: String
  },
  address:[{
    label : {
      type: String
    },
    flatNo:{
      type: String
    },
    body : {
      type: String
    },
    pincode:{
      type: String
    }
  }]
});


module.exports = mongoose.model('User', User, 'User');
