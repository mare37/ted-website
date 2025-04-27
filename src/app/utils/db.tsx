import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO || "");
    console.log("MONGO CONNECTED");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
