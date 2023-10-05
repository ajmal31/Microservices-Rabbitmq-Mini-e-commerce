import amqp from 'amqplib'

export default{

 sendToPaymentSrv:async(data)=>{
        const url='amqp://localhost:5672'
        const connection=await amqp.connect(url)
        const channel=await connection.createChannel()
        const qName='PRODUCT'
        const queue=await channel.assertQueue(qName)

        const foreign='PAYMENT'
        channel.sendToQueue(foreign,Buffer.from(JSON.stringify(data)))

        console.log('data sent to payment service')


    }
}