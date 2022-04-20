# Usage

```shell
$ SIGNED_URL=$(node create-signed-url.js your-s3-bucket-name s3-file-name)
$ node upload-signed.js ${SIGNED_URL} /path/to/local/file/to/upload
```