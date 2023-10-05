import mongoose from 'mongoose'

const {Schema}=mongoose

const orderSchema=new Schema({

    name: String,
    description: String,
    price: Number,
    quantity: Number,
    total: Number

},{
    timestamps:true
})
const order=mongoose.model('orders',orderSchema)
export default order