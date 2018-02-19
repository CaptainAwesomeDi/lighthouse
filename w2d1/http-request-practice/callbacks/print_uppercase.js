
var getHTML = require('../printingInChuck4');
const https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};



getHTML(requestOptions,printHTML);

function printHTML(html) {
  console.log(html.reverse());
}
