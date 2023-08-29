const mongoose = require('mongoose');

let conn = null;

const uri = process.env.DB;

modules.exports = connectDatabase = async () => {
  context.callbackWaitsForEmptyEventLoop = false;
  if (conn == null) {
    console.log("Creating new connection to the database ...");
    conn = await mongoose.connect(uri,{ serverSelectionTimeoutMS: 5000});
    return conn;
  }

  console.log("Connection already established, reusing the connection");
 
};