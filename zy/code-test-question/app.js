var express = require('express');
var request = require('request');
var app = express();

// You will not need the edit this file for this challenge.
// This endpoint is a gateway for calling the itunes service.
app.use('/api', function(req, res) {  
  var url = "https://itunes.apple.com/search" + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

app.use(express.static("./"));
