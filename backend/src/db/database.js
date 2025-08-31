const mongoose = require("mongoose");

const connectDb = async () => {

  try {

    const mongoDbUrl = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected : ",mongoDbUrl.connection.host);
  }
  catch(error) {
    console.log("error while connecting mongodb : ",error);
    process.exit(1);
  }

}

module.exports = connectDb;