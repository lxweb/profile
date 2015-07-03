var express = require('express');
var app = express();

app.use(express.static('./src'));

app.get('/', function (req, res) {
  res.render('index.html');
});

var server = app.listen(8080, function () {});

console.log("ROOOOCK at the port 8080");