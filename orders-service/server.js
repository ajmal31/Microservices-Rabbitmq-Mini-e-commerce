import express from 'express'
import amqp from 'amqplib'
import db from './config/db.connection.js'
import userHelper from './Helper/userHelper.js'
const app=express()
const port=3000
db()

var channel,qName,queue
const connect=async()=>{

    const url='amqp://host.docker.internal:5672'
    const connection=await amqp.connect(url)
    channel=await connection.createChannel()
    qName='ORDERS'
    queue=await channel.assertQueue(qName)
    
    
}

connect().then(()=>{

    channel.consume(qName,data=>{
       
        const order=JSON.parse(data.content)
        console.log('user order this product please insert order collections',order)
        channel.ack(data)

        const obj={
            name:order.name,
            description:order.description,
            price:order.price,
            quantity:1,
            total:order.price,


        }

        userHelper.addOrders(obj).then((response)=>{
          
            console.log('order created succfully',response)


        })

    })

})

app.listen(port,()=>{
    console.log(`order service listening on port ${port}`)
})

