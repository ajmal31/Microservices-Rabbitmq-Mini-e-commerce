import  userHelper from '../../Helper/userHelper/user.js'
import jwt from 'jsonwebtoken'
export const secret_key='ajmal'

export default{


    getUser:async(req,res)=>{

      const response=await userHelper.getUser(req.body)
      response ? res.status(201).send(response):res.status(401).send('user not found')
      
    },
    createUser:async(req,res)=>{

      console.log('body',req.body)
      let response = await userHelper.createUser(req.body)
      if(response) res.status(201).send('user created succesfull')

      

    },
    userLogin:async(req,res)=>{
     
      const response=await userHelper.userLogin(req.body)

      if(response){

        const token=await jwt.sign(req.body,secret_key)
      

        res.status(201).json({token:token})
    }else{

      res.status(401).send('invalid email or password')

    }
   
      
      
      
    },
    deleteUser:(req,res)=>{
    
     userHelper.deleteUser()

    },
    getAllusers:async(req,res)=>{
      
      let result=await userHelper.getAllUsers()
      res.status(201).send(result)
    }

}