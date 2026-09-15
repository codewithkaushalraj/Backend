const mongoose=require('mongoose')

const connectDB=async()=>{
    await mongoose.connect(process.env.mongodb_uri)
    console.log('database is connected ....')
}

module.exports=connectDB;