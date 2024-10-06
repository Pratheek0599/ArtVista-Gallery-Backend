// import mongoose from "mongoose";
// import dotenv from 'dotenv';


// dotenv.config()
// const mongodb_URL=process.env.MONGODB_URL;

// export const connectDB=async(req,res)=>{
//     try {
//         const connection=await mongoose.connect(mongodb_URL)
//         console.log("MongoDb connected Successfully")
//         return connection
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({message:"MongoDB Connection Failure"})
//     }
// }


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongodb_URL = process.env.MONGODB_URL;

export const connectDB = async () => {
  // Removed req and res
  try {
    const connection = await mongoose.connect(mongodb_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
    return connection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error; // Throw error instead of using res
  }
};
