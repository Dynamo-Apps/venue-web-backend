const dotenv = require("dotenv");
const { register } = require("../models/user");

const { successHandler } = require("../utils/helper");
// const modelAPP = require("../../models/app");
dotenv.config();

const auth = async (req, res, next) => {
  try {
    let results = await register(req.body)
    res.json(successHandler(results));
  } catch (e) {
    next({ name: e.name, message: e.message, status: e.status });
  }
};

module.exports = auth;
