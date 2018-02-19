
var getHTML = require('../printingInChuck4');
const https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};



getHTML(requestOptions,printHTML);

function printHTML(html) {
  let newStr ='';

  for (var i = html.length - 1; i >= 0; i--) {
    newStr += html[i];
  }
  console.log(newStr);
}
