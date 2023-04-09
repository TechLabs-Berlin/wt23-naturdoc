const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const { MONGO_URI } = process.env;

// db connection
function connect() {
  return mongoose.connect(MONGO_URI);
}

function close() {
  return mongoose.connection.close();
}

module.exports = { connect, close };
