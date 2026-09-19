import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { authenticate } from "./middleware/auth.middleware.js";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("hey ....");
  res.status(200).json({
    message: "Welcome to the authentication api...",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, username, password } = req.body;

  /**
   * add user into the database
   */
  const User = await userModel.create({ email, username, password:await bcrypt.hash(password,12) });

  console.log("name : ", username);
  console.log("Email : ", email);

  const token = jwt.sign(
    { id: User._id },
    "34ced046c002c89ffe694ad1e04e68fabd213e83516ab5155813859a6bc2b537", // its a jwt secret key
  );

  //res.send
  res.status(201).json({
    message: "User Registered Successfully ",
    data: {
      id: User._id,
      email,
      username,
    },
    token,
  });
});

// now use middleware in every api to get the user  

app.get('/api/auth/me',authenticate,async (req,res)=>{    

  console.log(req.user);

  res.status(200).json({
    data:req.user
  })

  // const authHeader = req.headers.authorization;
  // console.log(authHeader);
  // if (!authHeader) return res.status(400).json({
  //   message: "No token provided",
  //   data:null
  // })

  // const data=jwt.decode(authHeader)
  // const user=await userModel.findById(data.id);

  // console.log(user)
  // res.status(200).json({
  //   message:"Token recieved successfully"
  // })

})

app.post('/api/auth/login',async(req,res)=>{

  const {email,password}=req.body;

  const user=await userModel.findOne({email})

  const isValidPassword=await bcrypt.compare(password,user.password);
  console.log(isValidPassword)

  if(!isValidPassword){
    res.status(400).json({
      message:"Invalid email or password"
    })
  }
  
  const token=await jwt.sign({
    id:user._id
  },"34ced046c002c89ffe694ad1e04e68fabd213e83516ab5155813859a6bc2b537")

  res.status(200).json({
    message:"User logged in successfully",
    data:{
      user
    },
    token
  }
)
  
})

export default app;
