import mongoose from 'mongoose'

mongoose.connect('mongodb://host.docker.internal:27017/mini-e-commerce-two')
//  mongoose.connect('mongodb://127.0.0.1:27017/mini-e-commerce-two')

const db=mongoose.connection
db.once('open',()=>{
    console.log('product serveice db connection succesfull')

})
db.on('error',(err)=>{
    console.log('error occured when connection db',err)
})

const connection=()=>{
    return db
}
export default connection
