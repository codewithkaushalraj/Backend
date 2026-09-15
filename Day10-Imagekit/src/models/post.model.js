const mongoose=require('mongoose')
const { post } = require('../app')

const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{timestamps:true})  // isse jab aap kuch crud karoge to ye aapko time bta dega kis time pr aapne changes perform kiye 

const postModel=mongoose.model('/postInfo',postSchema)

module.exports=postModel