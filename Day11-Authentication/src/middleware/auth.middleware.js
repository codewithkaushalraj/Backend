import jwt from 'jsonwebtoken'
import userModel from '../../models/user.model.js';
import dotenv from 'dotenv'
dotenv.config();

export const authenticate=async(req,res,next)=>{

    const token=req.headers.authorization;

    if(!token) {
      res.status(401).json({
        message:"Token not found .."
      })
    }

    // const data=jwt.decode(token)

    const data=jwt.verify(token,"34ced046c002c89ffe694ad1e04e68fabd213e83516ab5155813859a6bc2b537")

    const user=await userModel.findById(data.id)

    req.user=user; // ye hum new property create kr rahe hai

    next()
}