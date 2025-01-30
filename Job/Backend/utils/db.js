import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://thakurtushar1309:aCwgvfcyrWXvO0wD@cluster0.5vp8l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected successfully");
        
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;