import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const KEY = process.env.DB_KEY;


const connection = () => {
  const MONGODB_URL =`mongodb+srv://${USERNAME}:${KEY}@cluster0.hdqxuks.mongodb.net/`;
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  mongoose.connection.on('connected',()=>{
    console.log("database connected");
  })
  mongoose.connection.on('disconnected',()=>{
    console.log("Warning database disconnected");
  })

  mongoose.connection.on('error',()=>{
    console.log("error while connecting while database" , error.message);
  })
};

export default connection;
