const multer=require('multer');

// disk Storage for local
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/')
//         // size ration format sb kuch yahi pr set kar sakte ho
//     },
//     filename:(req,file,cb)=>{
//         console.log('Data that should be come into a file',file);
//         cb(null,Date.now()+file.originalname);
//     }
// })


// for server
const storage=multer.memoryStorage()


const upload=multer({storage});
module.exports=upload