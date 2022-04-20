const url = process.argv[2]

var request = require('request');
var fs = require('fs');

var filePath = process.argv[3];
var stats = fs.statSync(filePath);

request({
  followAllRedirects: true,
  method: 'PUT',
  uri: url, 
  body: fs.readFileSync(filePath),
  headers: {
    'Content-Length': stats['size']
  }
},
function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log('upload successful:', body);
  }
});
