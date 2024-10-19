const express = require("express");
const cors = require("cors");

const { ENV_VARS } = require("./config/envVars");
const { connectDB } = require("./config/db");

const authRoutes = require("./routes/auth-routes/index");

const app = express();
const PORT = ENV_VARS.PORT;

app.use(
  cors({
    origin: ENV_VARS.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
  connectDB();
});
