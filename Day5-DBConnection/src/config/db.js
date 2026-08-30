const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kaushalrajverma2007_db_user:asdf1234@cohortcluster.ymwv8ki.mongodb.net/",
    );
    console.log("Database Connected...");
  } catch (error) {
    console.error("Error in while connecting DB ", error);
  }
};

module.exports=connectDB;