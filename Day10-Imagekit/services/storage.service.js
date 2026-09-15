const imagekit=require('imagekit')

const storageInstance=new imagekit({
    urlEndpoint:process.env.imagekit_uri,
    publicKey:process.env.imagekit_public_key,
    privateKey:process.env.imagekit_private_key,

})

const sendFiles=async(file,fileName)=>{
    const obj={
        file,
        fileName,
        folder:'PostImageFolder'
    }
    
    return await storageInstance.upload(obj)
}

module.exports=sendFiles