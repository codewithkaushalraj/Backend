const express=require('express')
const app=express();
const fileRoutes=require('./routes/file.route.js')
app.use(express.json());

app.use('/file',fileRoutes);


app.get("/",(req,res)=>{
    res.send('API IS WORKING PROPERLY ...')
})
module.exports=app;