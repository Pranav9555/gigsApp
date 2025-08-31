const express = require("express");
const connectDb = require("./src/db/database");
require("dotenv").config();
const app = express();


const PORT = process.env.PORT;

connectDb();

app.listen(PORT,() => {
  console.log(`http://localhost:${PORT}`);
})