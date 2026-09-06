const express=require('express');
const upload = require('../config/multer');

const router=express.Router();

router.post('/',upload.single("imageData"),(req,res)=>{ // imageName should be exactly match when you send the data with frontend 
    const textData=req.body;
    const fileData=req.file;
    console.log(textData)
    console.log(fileData)
    res.status(200).json({
        mesaage:"Data created Successfully",
        data:textData,
    })
})

module.exports=router;