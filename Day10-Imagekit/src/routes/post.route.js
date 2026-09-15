const express=require('express');
const postModel = require('../models/post.model');
const uploads = require('../config/multer');
const sendFiles = require('../../services/storage.service');

const router =express.Router();

router.post('/create',uploads.single("image"),async(req,res)=>{
    const {caption}=req.body;
    const file=req.file;
    console.log(file)

    const uploadImageURL=await sendFiles(file.buffer,file.originalname);

    console.log(uploadImageURL)

    const model=postModel.create({
        caption,
        image:uploadImageURL
    })


    res.status(201).json({
        message:'post Created successfully',
    })
})

module.exports=router;

