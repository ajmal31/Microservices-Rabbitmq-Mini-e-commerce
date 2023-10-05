import productSchema from '../../model/productsSchema.js'
import { Types } from 'mongoose'

export default{

    addProduct:async(data)=>{

        const {name,description,price}=data

        const product=new productSchema({

            name:name,
            description:description,
            price:price

        })

        let response=await product.save()
        return response ?response :false

    },
    deleteProduct:async (pid)=>{

        try{
            const res= await productSchema.deleteOne({_id:new Types.ObjectId(pid)})
            return res ? res :false

        }catch(err){
           console.log('error founded when deleting product',err)
        }

        
    },
    getAllProdcuts:async()=>{

      try{
        let res=await productSchema.find()
        return res ? res :false

      }catch(err){
        console.log('error found when getting all datas in products collection',err)

      }
        

    },
    getOneProduct:async(pid)=>{

        try{

            let res=await productSchema.findById(pid)
           
            return res? res :false

        }catch(err){

            console.log("error found when geting specific products",err)
        }
    }

}