const mongoose = require("mongoose");
const { ENV_VARS } = require("./envVars.js");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("DB connection established: " + conn.connection.host);
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
