import * as dotenv from 'dotenv'
dotenv.config()

const env = {
  NODE_ENV: process.env.NODE_ENV || 'DEV',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3000

}
module.exports = env