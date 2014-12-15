var server = require('http').createServer()
  , fs = require('fs')
  , nodejsx = require('node-jsx').install()
  , handlebarsHandler = require('./handlebars')
  , reactHandler = require('./react');

var notFound = fs.readFileSync('./page.html', 'utf8');

server.on('request', function (req, res) {
  if (req.url === '/handlebars') {
    handlebarsHandler(req, res);
  }
  else if (req.url === '/react') {
    reactHandler(req, res);
  }
  else {
    res.statusCode = 404;
    res.end(notFound);
  }
});

server.listen(3000);