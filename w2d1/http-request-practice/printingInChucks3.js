const https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

  let newData = '';

  https.get(options, (response) => {
    response.setEncoding('utf8');

    response.on('data', (data) => {
      newData += data + '\n';
    });

    response.on('end', () => {
      console.log('Response Have Ended \n', newData);
    });

  });

}

getAndPrintHTML(requestOptions);