import express from "express";
import generateCode from "../utils/generateCode.js";
import urlModel from "../model/url.model.js";

const router = express.Router();

/**
 * @post /api/url/
 * req.body={url : http://longUrl.com }
 **/

router.post("/", async(req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Please provide a url" });

  if (url.startsWith("http") == false && url.startsWith("https") == false) {
    return res.status(400).json({ error: "Please provide a valid URL" });
  }
  if (url.length > 2048) {
    return res.status(400).json({ error: "URL is too long" });
  }

  const code =generateCode()

  const newUrl=await urlModel.create({
    originalUrl:url,
    shortCode:code,
    clicks:0
  })
  return res.status(201).json({
    message:"Url shortened successfully",
    data:{
        originalUrl:newUrl.originalUrl,
        shortCode:newUrl.shortCode,

    }
  })
});


/**
 * @GET /api/url/all
 **/
router.get('/all',async(req,res)=>{
  const urls= await urlModel.find()
  return res.status(200).json({
    message:"Url fetched Successfully",
    data:{
      urls
    }
  })


})

/**
 * @delete /api/url/:id 
 **/
router.delete('/:id',async (req,res)=>{
  const {id}=req.params;
  const url=await urlModel.findById(id)
  if(!url) return res.status(404).json({
    message:"URL Not found.."
  })

  await urlModel.findOneAndDelete({
    _id:id
  })

  return res.status(200).json({
    message:"URL Deleted Successfully",
    
  })

    

})



export default router;

