import adminHelper from "../../helper/adminHelper/adminHelper.js"
import rabitmq from "../../communicate/payment-service/rabitmq.js";

export default{

  addProduct:async(req,res)=>{

    let response=await adminHelper.addProduct(req.body)
     if(response)
     {
        res.status(201).send(response)
     }else res.status(404)

  },
  deleteProduct:async(req,res)=>{

    const {id}=req.params
    console.log('id:-',id)
     let result=await adminHelper.deleteProduct(id)

     if(result) res.status(204).send(result)

  },
  getAllproducts:async(req,res)=>{

    let result=await adminHelper.getAllProdcuts()
    if(result) res.status(302).send(result) 
    else res.status(404)

  },
  getOneProduct:async(req,res)=>{

     const pid=req.params.id
    let result= await adminHelper.getOneProduct(pid)

    if(result) res.status(302).send(result)
    else res.status(404).send('product not found')
  },
  purchase:async(req,res)=>{

    
    const pid=req.params.id
   
    let result=await adminHelper.getOneProduct(pid)
    console.log('reach here')

     rabitmq.sendToPaymentSrv(result).then(()=>{
      res.send('succcesfullt send data to paymetn service')
     })

  }

};