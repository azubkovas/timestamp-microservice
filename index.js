var express = require('express');
var app = express();
var url = require('url');


var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.use('/api', require('./api/routes'))

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var port = process.env.PORT || 5001;

var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  console.log('App available at: ' + 'http://localhost:' + listener.address().port);
});
