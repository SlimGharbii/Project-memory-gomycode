import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.MONGO_URI});

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    }
    catch (error){
        console.log(error)
    }
}
export default connect;
