const https = require('https');

function getAndPrintHTML() {

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let newData = '';

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');

    response.on('data',(data) =>{
      newData += data + '\n';
    });

    response.on('end',()=>{
      console.log('Response Have Ended \n', newData);
    });

  });

}

getAndPrintHTML();