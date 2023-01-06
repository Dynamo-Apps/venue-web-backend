const express = require("express");
const register = require("../controllers/auth");

//app

const authRouter = express.Router();

authRouter.post("/auth", register);

module.exports = authRouter;
