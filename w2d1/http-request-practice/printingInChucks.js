const https = require('https');


const getAndPrintHTMLChucks = () => {

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/https-examples/step1.html'
  };

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    response.on('error', (err) => {
      console.log('An error occured', err);
    });

    response.on('data', (data) => {
      console.log('Received Data Length', data.length);
      console.log(data,'\n');
    });

    response.on('end', () => {
      console.log('Response Ended');
    });

  });

}

getAndPrintHTMLChucks();