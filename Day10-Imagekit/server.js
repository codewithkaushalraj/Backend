const app = require("./src/app");
const dotenv=require('dotenv')
dotenv.config();

const port =process.env.port

app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`)
})