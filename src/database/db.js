const mongoose = require('mongoose');

let conn = null;

const uri = process.env.DB;

module.exports = connectDatabase = async () => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (conn == null) {
    console.log("Creating new connection to the database ...");
    conn = await mongoose.connect(process.env.DB,{ serverSelectionTimeoutMS: 5000});
    return conn;
  }

  console.log("Connection already established, reusing the connection");
 
};