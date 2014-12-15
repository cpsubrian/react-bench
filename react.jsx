/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react')
  , props = {
      title: 'React Helper',
      message: 'This was rendered with the react helper.'
    };

var Page = React.createClass({

  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <html>
          <h1>{this.props.title}</h1>
          <p>{this.props.message}</p>
        </html>
      </html>
    );
  }

});

module.exports = function (req, res) {
  var content = React.createElement(Page, props);
  res.end('<!DOCTYPE html>' + React.renderToString(content));
};
