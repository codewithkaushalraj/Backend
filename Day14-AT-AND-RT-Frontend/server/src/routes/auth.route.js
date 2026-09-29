import express from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

const router = express.Router();

/**
 *
 * @post /api/auth/register
 */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isExist = await userModel.findOne({ email });
  if (isExist) {
    res.status(400).json({
      message: "User Already Exist",
      errors: [
        {
          field: "email",
          message: "User already registered",
        },
      ],
    });
  }

  const user = await userModel.create({
    name,
    email,
    passwordHash: await bcrypt.hash(password, 10),
  });
  const { accessToken, refreshToken } = await generateToken({
    userId: user._id,
  });

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, { httpOnly: true });

  res.status(201).json({
    message: "User registered Successfully",
    data: {
      name: user.name,
      email: user.email,
    },
    accessToken,
  });
});

/**
 * @get /api/auth/me
 * user should request on this api and this will get the details of this user
 */

router.get("/me", async (req, res) => {
  // headers me accessToken aata hai....
  const accessToken = req.headers.authorization?.split(" ")[1];

  try {
    const decoded = await verifyAccessToken(accessToken);
    const user = await userModel.findById(decoded.id);

    if (!user) {
      res.status(400).json({
        message: "Invalid user ",
      });
    } else {
      res.status(200).json({
        message: "User fetched Successfully",
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized ,Invalid or Expired access Token",
    });
  }
});

/**
 * @post /api/auth/refresh
 */
router.post("/refresh", async (req, res) => {
  const refToken = req.cookies.refreshToken;

  if (!refToken)
    return res.status(401).json({
      message: "Unauthorized , Refresh Token not found",
    });
  const decode = verifyRefreshToken(refToken);
  // console.log(refreshToken)
  // console.log(decode)
  const user = await userModel.findById(decode.id);

  if(user.refreshToken!=refToken){
    user.refreshToken=null;
    await user.save()
    return res.status(401).json({
        message:"unauthorized Access, refresh token Mismatch "
    })
  }

  const { accessToken, refreshToken } = await generateToken({
    userId: user.id,
  });

  res.cookie("refreshToken", refreshToken, { httpOnly: true });

  user.refreshToken = refreshToken;
  await user.save();

  res.status(200).json({
    message: "Token Refreshed Successfully",
    data: {
      name: user.name,
      email: user.email,
    },
    accessToken,
  });
});

export default router;
