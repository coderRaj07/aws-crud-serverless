const mongoose = require('mongoose');

let conn = null;

const uri = process.env.DB;

module.exports = connectDatabase = async () => {
  if (conn == null) {
    conn = await mongoose.connect(uri,{ serverSelectionTimeoutMS: 5000});
    return conn;
  }

  console.log("Connection already established, reusing the connection");
 
};