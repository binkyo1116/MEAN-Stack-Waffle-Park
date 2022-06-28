const uuidv4 = require('uuid/v4');

module.exports = function Cart (oldcart){

  this.uid = oldcart.uid || uuidv4();
  this.data = oldcart.data || {};
  this.totalQty = oldcart.totalQty || 0;
  this.totalPrice = oldcart.totalPrice || 0;

  this.add = function(item, id){

    var storeitem = this.data[id];

    if(!storeitem){
      storeitem = this.data[id] = {
        id: item.id,
        description: item.description,
        image: item.image,
        title: item.title,
        info: item.info,
        quantity: 0,
        price: item.price
      };
    }

    storeitem.quantity += item.quantity;
    this.totalQty += item.quantity;
    this.totalPrice += item.quantity * storeitem.price;

  };

  this.getList = function(){
    var arr = [];

    for(var i in this.data){
      arr.push(this.data[i]);
    }
    return arr;
  };
  this.getListDB = function(){
    var arr = [];

    for(var i in this.data){
      arr.push({
        itemId: this.data[i].id,
        itemQty: this.data[i].quantity
      });
    }
    return arr;
  };

  this.update = function(items){

    for(var i in items){
      this.add(items[i], items[i].id);
    }
  }

};
