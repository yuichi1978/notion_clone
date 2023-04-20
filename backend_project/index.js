const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
require("dotenv").config();
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",
}))
app.use(express.json());
app.use("/api/v1", require("./src/v1/routes"));

// DB接続
try {
  mongoose.connect(process.env.MOGODB_URL);
  console.log("DBと接続中・・・");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中・・・");
})