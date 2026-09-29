import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[2,"Minimum 2 character required"],
        maxLength:[40,"Maximum length should be 40 character "]
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    passwordHash:{
        type:String,
        required:true,
        minLength:5
    }
})

const userModel=mongoose.model('users',userSchema);

export default userModel;