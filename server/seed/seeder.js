var database = require('../bin/database');

var Waffle = require("../models/Waffles");


var Waffles = [
  new Waffle({
    title: "Honey Butter Waffle",
    item: "Waffle",
    description: "Warm melted butter with a golden honey drizzle",
    price: 100,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/os4cvxsqpsap1kzdides"
  }),
  new Waffle({
    title: "Maple Butter Waffle",
    item: "Waffle",
    description: "Warm melted butter with maple syrup drizzle",
    price: 110,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/fn9uqskl4vdiqbes1wgg"
  }),
  new Waffle({
    title: "Almond Cocoa Butter Waffle",
    item: "Waffle",
    description: "Cocoa Butter spread clubbed with roasted almonds served inside hot and crispy waffle",
    price: 120,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/dj4ggvehi7vlo1uhut4b"
  }),new Waffle({
    title: "Butterscotch Crunch Waffle",
    item: "Waffle",
    description: "Crunchy, gooey Butterscotch spread served inside hot and crispy waffle",
    price: 110,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/nksn6jdb7bxsj3emhzeb"
  }),
  new Waffle({
    title: "Kiki And Cream Waffle",
    item: "Waffle",
    description: "Even I don't know",
    price: 120,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/b4kivuwwwggcup7gahpd"
  }),
  new Waffle({
    title: "Coffee Wafee",
    item: "Waffle",
    description: "Waffle charged with unique coffee chocolate spread",
    price: 120,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/lreg6zcinw2feongaesl"
  }),
  new Waffle({
    title: "Snickers",
    item: "Waffle",
    description: "Crunchy roasted peanut butter spread with delicious gooey Chocolate",
    price: 120,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/fddinwe2fji9wwovojdu"
  }),
  new Waffle({
    title: "Naked Nutella",
    item: "Waffle",
    description: "A European chocolate hazelnut spread (add banana if you like)",
    price: 120,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/a4w4fhqwaknin7pzgycx"
  }),
  new Waffle({
    title: "Kitkat Wafee",
    item: "Waffle",
    description: "White batter waffle layered with white chocolate and filled with Kit Kat bits",
    price: 150,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/gquzrcfweig1et0vqcbk"
  }),
  new Waffle({
    title: "Dark & White Fantasy",
    item: "Waffle",
    description: "Dark chocolate waffle with a filling of creamy white chocolate",
    price: 150,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/durkvlfgnzz83hlx0xlr"
  }),
  new Waffle({
    title: "Triple Chocolate",
    item: "Waffle",
    description: "Dark Chocolate waffle charged with blanket of gooey chocolates",
    price: 150,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/zs0eaofz6ik3ywecfo3z"
  }),
  new Waffle({
    title: "Red Velvet",
    item: "Waffle",
    description: "Velvety smooth taste of cream cheese and white chocolate paired with our original Red velvet waffle",
    price: 160,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/uensjdrfqgvw0xpko8eg"
  }),
  new Waffle({
    title: "Cotton Candy Waffle",
    item: "Waffle",
    description: "Velvety smooth taste of Cotton Candy and chocolate sprinkles paired with our original Red velvet waffle",
    price: 180,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/ekpg7mox1i0cbeosnk5q"
  }),
  new Waffle({
    title: "Pizza Waffle",
    item: "Waffle",
    description: "A layered pizza waffle with cream cheese on top",
    price: 200,
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366,h_240,c_fill/yjtlkuarz5gyjzx25rhp"
  })

];


var len = Waffles.length;
var done =0;
for(var i=0; i<len; i++){
  Waffles[i].save(function(err, res){
    done++;
    if(done == len){
      database._disconnect();
    }
  });
}
