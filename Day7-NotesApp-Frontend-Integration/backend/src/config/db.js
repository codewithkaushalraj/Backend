const mongoose=require('mongoose');

const connectDB=async()=>{
    await mongoose.connect(process.env.mongodb_uri);
    console.log('MongoDB Connected ...')
}

module.exports=connectDB;