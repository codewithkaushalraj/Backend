const express=require('express');
const fileRoutes=require('./routes/file.routes')
const cors=require('cors')

const app=express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))

app.use('/file',fileRoutes)


module.exports=app;