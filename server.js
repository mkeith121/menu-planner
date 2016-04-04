var express = require('express');

var app = express();

app.get('/', function(req, res) {
  console.log('Hey creator. I\'m alive at port 3000');
  res.send('Hello World');
}).listen(3000);