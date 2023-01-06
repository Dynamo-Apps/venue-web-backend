const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require('./routes/authentication');
const { errorHandler } = require('./utils/helper');

const app = express();
dotenv.config();

const PORT = process.env.SERVER_PORT || 3306;
const API_ENDPOINT = "/api";

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10MB" }));


app.use(API_ENDPOINT, authRouter);

app.use((req, res, next) => {
  let err = new Error(`Request URL not found ${req.url}`);
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
