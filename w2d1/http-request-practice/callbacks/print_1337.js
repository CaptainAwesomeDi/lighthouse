var getHTML = require('../printingInChuck4');
const https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};



getHTML(requestOptions, printHTML);

function printHTML(html) {
  console.log(html
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/o/gi, '0')
    .replace(/l/gi, '1')
    .replace(/s/gi, '5')
    .replace(/t/gi, '7')
    .replace(/ck/gi, 'x')
    .replace(/er/gi, '0r')
    .replace(/you/gi, 'j00')
  );
}