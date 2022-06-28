var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Login = new Schema({

  email: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('Login', Login, 'Login');
