const mongoose = require("mongoose");
module.exports.connect = async function () {
  try {
    const dbresponse = await mongoose.connect(
      "mongodb://127.0.0.1:27017/ManagementSystem"
    );
    console.log(
      `database connected Host:- ${dbresponse.connection.host}\nPort:- ${dbresponse.connection.port}\n Database:-${dbresponse.connection.name}`
    );
  } catch (error) {
    console.log(`Database not connected \n erro:-${error.message}`);
  }
};
