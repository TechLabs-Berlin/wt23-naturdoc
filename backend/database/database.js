const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const { MONGO_URI } = process.env;


const mongourl = 'mongodb+srv://naturdoc:WhYJmBoDdO3tZ89Z@naturdoc.aj9zhtw.mongodb.net/naturdoc?retryWrites=true&w=majority';
//const mongourl = MONGO_URI;
//const mongourl = 'mongodb://localhost:27017/naturdoc';

// db connection
function connect() {
  return mongoose.connect(mongourl);
}

function close() {
  return mongoose.connection.close();
}

module.exports = { connect, close };
