var express = require('express');
var app = express();
var port = 3000;


app.listen(port, function onServerListen(){
  console.log('Started Express Server on Port 3000');
  console.log('Press Control-C to stop');
});

app.get('/', function(request, response){
  response.send('Go Cubs!');
});
