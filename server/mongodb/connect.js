import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Connected to mongoDB"))
    .catch((err) => {
      console.log("ERROR!!!");
      console.log(err);
    });
};

export default connectDB;
