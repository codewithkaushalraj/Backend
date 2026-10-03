import crypto from "crypto";

/**
 * Generate a 6 character long url unique shortcode for Url's which contain a-z A-Z and 0-9
 **/

const generateCode = () => {
  const mainString =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let shortCode = "";
  // Generate 6 random characters safely using crypto.randomInt
  for (let i = 0; i < 6; i++) {
    const randomIndex = crypto.randomInt(0, mainString.length);
    shortCode += mainString[randomIndex];
  }
  console.log(shortCode);
  
  return shortCode
};

export default generateCode