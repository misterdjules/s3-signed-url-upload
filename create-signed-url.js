const AWS = require('aws-sdk')

const s3Client = new AWS.S3({
  // Setting this signature version seems important, otherwise the upload fails
  // with hard to understand errors. See
  // https://github.com/aws/aws-sdk-js/issues/902#issuecomment-184872976 for the
  // source of this recommendation.
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
