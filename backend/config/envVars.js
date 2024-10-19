const dotenv = require("dotenv");

dotenv.config();

const ENV_VARS = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT || 5000,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

  NODE_ENV: process.env.NODE_ENV,

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,

  CLIENT_URL: process.env.CLIENT_URL,
};

module.exports = { ENV_VARS };
