import mongoose from 'mongoose'
import config from './config.js'

const connectDB=async()=>{
    await mongoose.connect(config.MONGO_URI)
    console.log("Databse connected successfully...")
}

export default connectDB;