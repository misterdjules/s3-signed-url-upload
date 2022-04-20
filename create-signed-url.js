const AWS = require('aws-sdk')

const s3Client = new AWS.S3({
  signatureVersion: 'v4',
  region:"eu-west-3"
}); 

const params = {
  Bucket: process.argv[2],
  Key: process.argv[3],
  Expires: 60 * 1000, 
}; 

const signedUrl = s3Client.getSignedUrl('putObject', params);
  
console.log(signedUrl)
