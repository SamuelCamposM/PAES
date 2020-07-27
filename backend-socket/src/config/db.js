import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: ".env" });

const uri = process.env.URI;

const DB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
      console.log("mongoose error" , error)
  }
};

DB();

export default DB;
