// console.log('Hello Guys')

const http=require('http')
console.log(http)

const server=http.createServer((req,res)=>{
    console.log('Hii I am a Server')
    res.end('Mai server hu and maine tumhari baat sun li hai')
})

server.listen(3000,()=>{
    console.log('Server is running on port number 3000')
})