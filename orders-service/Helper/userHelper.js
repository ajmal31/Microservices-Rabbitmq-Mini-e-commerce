import order from '../model/orderSchema.js'
export default{

    addOrders:async(data)=>{
       
       
        const {name,description,price,quantity,total}=data


        const newOrder= new order({

            name:name,
            description:description,
            price:price,
            quantity:quantity,
            total:total

        })
        let response=await newOrder.save()
        
        return response

    }
}