let request = require('request');
let fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error',(err)=> console.log('error: ', err))
  .on('response',(response) => {
    console.log(response.statusMessage);
    console.log(response.headers['content-type']);})
  .on('end',()=>console.log('Downloading Image'))
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish',()=>console.log('Finished Downloading'));