var Handlebars = require('handlebars')
  , fs = require('fs');

var content = fs.readFileSync('./page.hbs', 'utf8')
  , template = Handlebars.compile(content)
  , data = {
      title: 'Handlebars Helper',
      message: 'This was rendered with the handlebars helper.'
    };

module.exports = function (req, res) {
  res.end(template(data));
};