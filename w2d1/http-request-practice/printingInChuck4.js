const https = require('https');

function getHTML(options, callback) {

  /* Add your code here */
  https.get(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      callback(data);
    });

    response.on('end', () => {
      console.log('Response Have Ended \n', newData);
    });

  });

}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);