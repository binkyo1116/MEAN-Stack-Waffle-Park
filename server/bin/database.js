let mongoose = require('mongoose');

var server = '127.0.0.1'; // REPLACE WITH YOUR DB SERVER
var db = 'Waffles';      // REPLACE WITH YOUR DB NAME
var port = '27017';
var url = `mongodb://${server}:${port}/${db}`;

class Database {

  constructor() {    this._connect()  }

  _connect() {
    mongoose.connect(url, {useNewUrlParser: true})
      .then(() => {
        console.log('Database connection successful')
      }).catch(err => {
        console.error('Database connection error')
      })
  }

  _disconnect(){
    mongoose.disconnect()
    .then(() => {
        console.log('Database disconnected successfully')
      }).catch(err => {
        console.error('Database connection error')
      });
  }

  _connection(){
    return {
        host: server,
        port: port,
        db: db,
        url: url
    }
  }
}

module.exports = new Database();
