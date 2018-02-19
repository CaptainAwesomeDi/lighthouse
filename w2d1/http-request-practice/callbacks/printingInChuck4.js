const https = require('https');

module.exports = function getHTML(options, callback) {
  let newData = '';
  https.get(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      newData += data + '\n';
    });

    response.on('end', () => {
      console.log('Response Have Ended \n');
      callback(newData);
    });

  });

}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);