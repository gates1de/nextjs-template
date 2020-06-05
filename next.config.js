require('dotenv').config()
const path = require('path')

module.exports = {
  env: {
    APP_ENV: process.env.APP_ENV,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_FUNCTIONS_REGION: process.env.FIREBASE_FUNCTIONS_REGION,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BACKET: process.env.FIREBASE_STORAGE_BACKET,
    GENERATE_SOURCEMAP: process.env.GENERATE_SOURCEMAP,
    SECRET: process.env.SECRET
  },
  webpack: config => {
    // path setting
    config.resolve.modules = [...config.resolve.modules, './src']
    return config
  }
}
