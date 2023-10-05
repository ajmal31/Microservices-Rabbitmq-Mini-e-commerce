import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/mini-e-commerce-three')

const db =mongoose.connection

db.once('open',()=>{

    console.log('your order service db connetion is succesfull')
})
db.on('error',(err)=>{
    console.log('error occured when try to connecting database to orders service')
})

export default function connect(){
    return db
}