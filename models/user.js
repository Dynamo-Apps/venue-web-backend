const database = require("../database");
const moment = require("moment");


const register = ({ email, id, first_name, last_name, password, token } = data) => {
    const dateNow = moment().format("yyyy-MM-DD");
    return new Promise((resolve, reject) => {
      database.query(
        `INSERT INTO user( 'email',  'first_name', 'last_name','password', 'created_date', 'token') VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE    
        first_name = VALUES(first_name), last_name = VALUES(last_name), password = VALUES(password), token = VALUES(token)`,
        [
          email,
          first_name,
          last_name,
          password,
          dateNow,
          token,
        ],
        (err, result) => {
          if (err) {
            return reject(false);
          }
  
          if (result) {
            return resolve(result);
          }
        }
      );
    });
  };


  module.exports = {
    register
  }