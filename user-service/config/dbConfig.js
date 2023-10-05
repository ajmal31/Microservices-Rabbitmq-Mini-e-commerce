import mongoose from 'mongoose'

//localhost default port 127.0.0.1
  mongoose.connect('mongodb://host.docker.internal:27017/mini-e-commerce')

//  mongoose.connect('mongodb://192.168.48.127:27017/mini-e-commerce')
const db=mongoose.connection
 db.once('open',()=>{
    console.log('connection succes')
 })
 db.on('error',(err)=>{
    console.log('error occured !!!',err)
 })
export function databse(){
    return db
}
