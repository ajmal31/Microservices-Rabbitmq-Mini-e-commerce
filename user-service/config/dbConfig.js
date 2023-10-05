import mongoose from 'mongoose'

//localhost default port 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/mini-e-commerce')
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
