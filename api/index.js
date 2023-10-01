const AWS = require('aws-sdk')
const dotenv = require('dotenv')
dotenv.config()

const s3 = new AWS.S3()

const main = () => {
  // const url = s3.getSignedUrl('putObject', {
  //   Bucket: 'uploadermaker',
  //   Key: 'resume.pdf',
  //   Expires: 200,
  //   ContentType: 'application/pdf' // Parâmetro não existe na doc da aws
  // })

  const url = s3.getSignedUrl('getObject', {
    Bucket: 'uploadermaker',
    Key: 'resume.pdf',
    Expires: 200
  })

  return url
}

console.log(main())