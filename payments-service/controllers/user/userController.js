import userHelper from '../../helpers/user/userHelper.js'
import amqp from 'amqplib'
import { connect } from '../../server.js'

export default{


    cod:async(req,res)=>{

        

        let {channel,qName}=await connect()
        
        const foreign='ORDERS'

        channel.sendToQueue(foreign,Buffer.from(JSON.stringify(req?.body)))

        console.log('message sent to orders service payment method: COD')
        

    },
    check:(req,res)=>{
        res.status(201).json({message:'payment service working properly'})
    }

}