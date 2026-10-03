import express from 'express'
import urlRoutes from '../routes/url.routes.js'
import urlModel from '../model/url.model.js'

const app=express()
app.use(express.json())

app.use('/api/url',urlRoutes)

app.get('/',(req,res)=>{
    console.log("Ye le bhikari tera data")
    res.send("Your server is running properly")
})

app.get('/:code',async(req,res)=>{

    const {code} =req.params;

    const url=await urlModel.findOne({shortCode:code});

    if(!url) return res.status(404).json({message:"No URL found with the given code"});
    res.redirect(302,url.originalUrl)
    await urlModel.findOneAndUpdate({
        shortCode:code
    },{
        $inc:{clicks:1}
    })
})

export default app;