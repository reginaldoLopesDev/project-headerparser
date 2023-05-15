// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});
app.get('/api/whoami', function (req, res) {
  const ip = req.ip;

  const regexLanguage = /^[a-z]{2}-[A-Z]{2}(,[a-z]{2}(;q=\d(\.\d)?)?)*(?=,|$)/;

  const acceptLanguage = req.headers['accept-language'] || "pt-BR,pt;q=0.9";
  const match = acceptLanguage.match(regexLanguage);
  const language = match[0];

  const software = req.headers['user-agent'];

  res.json({"ipAddres": ip, "language": language, "software": software});
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
