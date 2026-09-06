const express=require('express');
const upload = require('../config/multer');

const router=express.Router();

router.post('/',upload.single('imageData'),async(req,res)=>{
    try {
        const body=req.body;
        const file=req.file;
        console.log(body)
        console.log(file)
        res.status(200).json({
            message:"file recieved Successfully",

        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
        })
    }    
})


module.exports=router
