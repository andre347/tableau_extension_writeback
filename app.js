var express = require('express');
var fs = require('fs');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var products = [];

app.use("/public", express.static(__dirname + "/public"));
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.post('/addData', function(req, res){
  console.log(req.body);


  var newProduct = req.body.newProduct;
  var newSales = req.body.newSales;
  var newProfit = req.body.newProfit

  var dataToWrite = newProduct+','+newSales+','+newProfit+'\n';

  products.push(newProduct);
  res.redirect('/addData');
  fs.appendFile('product_file.txt', dataToWrite, finished);
    function finished(){
      console.log('added product data');
    };

});

app.get('/addData', function(req, res){
   res.render('data.html', {products: products});
 });


app.listen(3000, function(){
  console.log('Server is running on localhost:3000');
});
