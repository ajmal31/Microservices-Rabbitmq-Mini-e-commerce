import express from 'express'
import userRouter from './routes/user/userRoutes.js'
import userController from './controllers/user/userController.js'
import amqp from 'amqplib'
const app=express()
const port=3002
app.use(express.json())

var connection,channel,qName
//setting gloabbaly connection variable channel variable and queue name 

app.use('/payment-srv/',userRouter)


export const connect=async()=>{

    const url='amqp://host.docker.internal:5672'
    // const url='amqp://localhost:5672'
          connection=await amqp.connect(url)
          channel=await connection.createChannel()
          qName='PAYMENT'
    const queue=await channel.assertQueue(qName)
       const obj={
        channel,
        qName
       }
   return obj
   

}
connect().then(()=>{
   
    
    channel.consume('PAYMENT',data=>{
        
        console.log('hai')
        const product=JSON.parse(data.content)
        console.log(product)
        //this data want to send frontend even after wanto display
       channel.ack(data)

        
    })
})


app.use('/',userRouter)
app.listen(port,()=>{
    console.log(`payment service listening on port ${port}`)
})