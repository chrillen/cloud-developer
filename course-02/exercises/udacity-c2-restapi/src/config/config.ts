export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
    "image_filter_url" : process.env.IMAGE_FILTER_URL || 'http://localhost:8082/filteredimage?image_url='
  },
  "jwt": {
    "secret": process.env.JWT_SECRET,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagramprod",
    "host": "",
    "dialect": "postgres",
    "image_filter_url" : ""
  }
}
