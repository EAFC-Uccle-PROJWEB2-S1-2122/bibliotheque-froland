var express = require("express");
var logger = require("morgan");
const cors = require("cors");

var apiRouter = require("./routes/api");

var app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());

app.use("/api", apiRouter);

module.exports = app;
