import dotenv from 'dotenv'
dotenv.config()

const config={
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_TOKEN:process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN:process.env.REFRESH_TOKEN_SECRET,

}

export default config;