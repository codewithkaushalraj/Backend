
const express=require('express');
let app=express();
app.use(express.json())
let users=[
    // {
    //     name:'Golu',
    //     age:12
    // }
];

//create
app.post('/create',(req,res)=>{
    const body=req.body;
    users.push(body)
    res.send("User Saved Successfully")
    
})

// get-Read 
app.get('/',(req,res)=>{
    res.send(users)
})

//delete
app.delete('/delete/:id',(req,res)=>{
    // const data=req.params;
    // console.log(data);

    let {id}=req.params;   // iske andar dynamic cheez aati hai in the form of object 
    users=users.filter((data)=> data.id!=id);
    // res.send(users);\
    res.send('User Deleted Successfully')
})

// Update
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    // const body=req.body;
    const {name}=req.body;

    // const updatedUser=users.map((data)=>data.id==id?{name:'Changed User',age:40}:data);

    const updatedUser=users.map((data)=>data.id==id?{...data,name}:data);

    users=updatedUser;

    res.send('User Updated Successfully')
})


app.listen(3000,(req,res)=>{
    console.log('server is running on port number 3000 ')
})